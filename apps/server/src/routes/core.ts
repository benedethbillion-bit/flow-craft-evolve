import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export const coreRouter = Router();

// Mood tracker
coreRouter.get('/mood', async (_req, res) => {
  const moods = await prisma.mood.findMany({ orderBy: { timestamp: 'desc' }, take: 100 });
  res.json(moods);
});
coreRouter.post('/mood', async (req, res) => {
  const { value, note } = req.body as { value: number; note?: string };
  const created = await prisma.mood.create({ data: { value, note } });
  res.status(201).json(created);
});

// Journal
coreRouter.get('/journal', async (_req, res) => {
  const entries = await prisma.journalEntry.findMany({ orderBy: { date: 'desc' }, take: 100 });
  res.json(entries);
});
coreRouter.post('/journal', async (req, res) => {
  const { title, content } = req.body as { title: string; content: string };
  const created = await prisma.journalEntry.create({ data: { title, content } });
  res.status(201).json(created);
});

// Community
coreRouter.get('/community', async (_req, res) => {
  const posts = await prisma.communityPost.findMany({ orderBy: { createdAt: 'desc' }, take: 100 });
  res.json(posts);
});
coreRouter.post('/community', async (req, res) => {
  const { author, content } = req.body as { author: string; content: string };
  const created = await prisma.communityPost.create({ data: { author, content } });
  res.status(201).json(created);
});

// Music
coreRouter.get('/music', async (_req, res) => {
  const tracks = await prisma.musicTrack.findMany({ orderBy: { title: 'asc' } });
  res.json(tracks);
});

