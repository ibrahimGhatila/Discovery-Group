import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const commodities = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/commodities' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    summary: z.string(),
    eyebrow: z.string(),
    order: z.number().default(0),
    origin: z.object({
      regions: z.array(z.string()),
      elevation: z.string().optional(),
      seasons: z.string().optional(),
    }),
    grades: z.array(z.object({ name: z.string(), spec: z.string() })),
    processing: z.array(z.string()),
    certifications: z.array(z.string()),
    packaging: z.string(),
    moq: z.string(),
    incoterms: z.array(z.string()),
    heroCaption: z.string(),
    qualityMetricLabel: z.string().optional(),
    qualityMetricValue: z.string().optional(),
  }),
});

const producers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/producers' }),
  schema: z.object({
    name: z.string(),
    region: z.string(),
    district: z.string(),
    commodity: z.string(),
    elevation: z.string(),
    farms: z.string(),
    varieties: z.array(z.string()),
    processing: z.array(z.string()),
    cooperative: z.string().optional(),
    photoCaption: z.string(),
    quote: z.string().optional(),
    quoteAttribution: z.string().optional(),
    summary: z.string(),
    placeholder: z.boolean().default(true),
  }),
});

const orocafeProducts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/orocafe' }),
  schema: z.object({
    title: z.string(),
    category: z.enum(['Whole bean', 'Ground', 'Capsule', 'Drip bag', 'Instant', 'Premix', 'Tea']),
    summary: z.string(),
    origin: z.string(),
    process: z.string(),
    variety: z.string().optional(),
    roast: z.enum(['Light', 'Medium', 'Medium-dark', 'Dark']).optional(),
    flavourNotes: z.array(z.string()),
    sizes: z.array(z.string()),
    certifications: z.array(z.string()),
    heroCaption: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { commodities, producers, orocafeProducts };
