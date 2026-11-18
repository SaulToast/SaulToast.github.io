import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const mediaUrl = z.string().refine((value) => /^(\/(?!\/)|https:\/\/)/.test(value), 'Use a public /media/ path or an HTTPS URL.');
const externalUrl = z.url().refine((value) => value.startsWith('https://'), 'Use an HTTPS URL.');

const projects = defineCollection({
  loader: glob({
    pattern: ['**/*.{md,mdx}', '!**/portfolio-technical-breakdown.md'],
    base: './src/content/projects',
  }),
  schema: ({ image }) => z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    summaryIsPlaceholder: z.boolean().default(false),
    discipline: z.string().min(1),
    engine: z.string().min(1),
    languages: z.array(z.string().min(1)).min(1),
    cover: image(),
    coverAlt: z.string().min(1),
    coverCaption: z.string().min(1),
    accent: z.enum(['green', 'purple', 'blue']).default('blue'),
    featured: z.boolean().default(false),
    order: z.number().int().default(99),
    // Drafts can appear only in an explicitly requested local preview.
    published: z.boolean().default(false),
    preview: z.boolean().default(false),
    inlineMedia: z.boolean().default(false),
    draftNote: z.string().min(1).optional(),
    role: z.string().min(1).optional(),
    team: z.string().min(1).optional(),
    status: z.string().min(1).optional(),
    period: z.string().min(1).optional(),
    links: z.array(z.object({ label: z.string().min(1), url: externalUrl })).default([]),
    media: z.array(z.discriminatedUnion('type', [
      z.object({
        type: z.literal('image'),
        image: image(),
        alt: z.string().min(1),
        caption: z.string().min(1),
      }),
      z.object({
        type: z.literal('video'),
        sources: z.array(z.object({ src: mediaUrl, type: z.enum(['video/mp4', 'video/webm']) })).min(1),
        poster: image(),
        caption: z.string().min(1),
        loop: z.boolean().default(false),
        tracks: z.array(z.object({ src: mediaUrl, language: z.string().min(1), label: z.string().min(1) })).default([]),
      }),
    ])).default([]),
  }),
});

export const collections = { projects };
