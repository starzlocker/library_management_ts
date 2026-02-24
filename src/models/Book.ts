import {z} from 'zod';

export type Book = z.infer<typeof BookSchema>

export const BookSchema = z.object({
  title: z.string(),
  author: z.string(),
  year: z.number(),
  genre: z.string(),
  coverUrl: z.string().nullish(),
  description: z.string(),
  price: z.number(),
  id: z.number()
})