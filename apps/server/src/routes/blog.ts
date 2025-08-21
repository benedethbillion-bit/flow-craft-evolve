import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const blogRouter = Router();

blogRouter.get('/posts', async (req, res) => {
  const { category, q } = req.query as { category?: string; q?: string };
  const posts = await prisma.post.findMany({
    where: {
      AND: [
        category ? { category: { slug: category } } : {},
        q ? { OR: [{ title: { contains: q, mode: 'insensitive' } }, { content: { contains: q, mode: 'insensitive' } }] } : {},
      ],
    },
    orderBy: { createdAt: 'desc' },
    include: { category: true },
  });
  res.json(posts);
});

blogRouter.get('/posts/:slug', async (req, res) => {
  const { slug } = req.params;
  const post = await prisma.post.findUnique({ where: { slug }, include: { category: true } });
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json(post);
});

blogRouter.get('/categories', async (_req, res) => {
  const categories = await prisma.category.findMany({ orderBy: { name: 'asc' } });
  res.json(categories);
});

// Admin CRUD (basic) - in production, protect with auth middleware
blogRouter.post('/admin/posts', async (req, res) => {
  const { title, slug, excerpt, content, categorySlug } = req.body;
  const category = await prisma.category.findUnique({ where: { slug: categorySlug } });
  if (!category) return res.status(400).json({ error: 'Invalid category' });
  const created = await prisma.post.create({
    data: { title, slug, excerpt, content, categoryId: category.id },
  });
  res.status(201).json(created);
});

blogRouter.put('/admin/posts/:slug', async (req, res) => {
  const { slug } = req.params;
  const { title, excerpt, content, categorySlug } = req.body;
  const category = categorySlug ? await prisma.category.findUnique({ where: { slug: categorySlug } }) : null;
  const updated = await prisma.post.update({
    where: { slug },
    data: {
      title,
      excerpt,
      content,
      ...(category ? { categoryId: category.id } : {}),
    },
  });
  res.json(updated);
});

blogRouter.delete('/admin/posts/:slug', async (req, res) => {
  const { slug } = req.params;
  await prisma.post.delete({ where: { slug } });
  res.status(204).send();
});

