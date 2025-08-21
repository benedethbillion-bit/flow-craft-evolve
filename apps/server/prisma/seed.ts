import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = [
    { slug: 'stress', name: 'Stress' },
    { slug: 'productivity', name: 'Productivity' },
    { slug: 'student-life', name: 'Student Life' },
    { slug: 'emotional-growth', name: 'Emotional Growth' },
    { slug: 'inspiration', name: 'Inspiration' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
  }

  const samplePosts = [
    {
      title: 'Easing Exam Stress: A 5-Minute Reset',
      slug: 'easing-exam-stress-reset',
      excerpt: 'Quick breathing + reframing to reset your nervous system.',
      content:
        'When exams loom, your body enters a survival loop. Try box-breathing (4-4-4-4) for two minutes, then write down the smallest next step you can take. You are safe, capable, and not alone. Close with a gentle reminder: your worth is not defined by a grade.',
      categorySlug: 'stress',
    },
    {
      title: 'The 25/5 Focus Sprint for Deep Work',
      slug: 'the-25-5-focus-sprint',
      excerpt: 'A gentle Pomodoro variant that respects your attention.',
      content:
        'Set a 25-minute focus timer, then 5 minutes for a mindful break. Keep a notepad to externalize distractions. Over time, your attention muscle strengthens. End each sprint by celebrating progress, not perfection.',
      categorySlug: 'productivity',
    },
    {
      title: 'Small Routines, Big Calm',
      slug: 'small-routines-big-calm',
      excerpt: 'Tiny rituals to signal safety to your brain.',
      content:
        'Morning light, water, a two-minute tidy—small routines anchor your day. Your nervous system loves predictability. Close by telling yourself: I can choose the next kind action.',
      categorySlug: 'emotional-growth',
    },
    {
      title: 'Group Study Without Burnout',
      slug: 'group-study-without-burnout',
      excerpt: 'Structure group time to protect your energy and focus.',
      content:
        'Set a goal, assign roles, and rotate facilitators. Start with a short check-in; end with appreciations. Community fuels learning. Remember: it is okay to take breaks and say no.',
      categorySlug: 'student-life',
    },
    {
      title: 'On Days You Feel Behind',
      slug: 'on-days-you-feel-behind',
      excerpt: 'A compassionate script for tough weeks.',
      content:
        'Some days you will crawl. That is still movement. Put your hand over your heart and say: I am allowed to be human. Choose one doable task and begin gently.',
      categorySlug: 'inspiration',
    },
  ];

  for (const post of samplePosts) {
    const category = await prisma.category.findUnique({ where: { slug: post.categorySlug } });
    if (!category) continue;
    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        content: post.content + '\n\nGentle Close: You are doing your best. Breathe. You are enough.',
        categoryId: category.id,
      },
    });
  }

  await prisma.musicTrack.createMany({
    data: [
      { title: 'Ocean Breath', url: 'https://example.com/music/ocean.mp3', duration: 300 },
      { title: 'Forest Dawn', url: 'https://example.com/music/forest.mp3', duration: 420 },
    ],
    skipDuplicates: true,
  });

  console.log('Seeded categories, posts, and music tracks.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

