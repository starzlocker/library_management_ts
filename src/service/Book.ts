import { BookSchema } from "@/models/Book";
import {z} from 'zod';

export const getBooksRequestSchema = z.object({
  page: z.number(),
  title: z.string().optional(),
  author: z.string().optional(),
  year: z.number().optional(),
  genre: z.string().optional(),
});

export type getBookRequest = z.infer<typeof getBooksRequestSchema>;

export const getBooks = async (payload: getBookRequest) => {
  getBooksRequestSchema.parse(payload);
  const url = buildUrl(payload);

  const response = await fetch(url);

  if (!response.ok && response.status !== 404) {
    const err = await response.text();
    throw new Error('Failed to fetch books from the API: ' + err || 'Erro desconhecido');
  }

  const data = await response.json();

  const result = z.object({
    data: z.array(BookSchema),
    totalItems: z.number(),
    page: z.number()
  }).safeParse(data);

  if (!result.success) {
    throw new Error(result.error.message);
  }

  return result.data;
}

const buildUrl = (payload: getBookRequest) => {
  const paramPage = 'page';
  const encodedPage = encodeURIComponent(payload.page);
  let url = `${import.meta.env.VITE_BACKEND}/api/books?${paramPage}=${encodedPage}`;

  if (payload.title !== null && payload.title !== undefined) {
    const encoded = encodeURIComponent(payload.title);
    url += `&title=${encoded}`;
  }
  if (payload.author !== null && payload.author !== undefined) {
    const encoded = encodeURIComponent(payload.author);
    url += `&author=${encoded}`;
  }
  if (payload.year !== null && payload.year !== undefined) {
    const encoded = encodeURIComponent(payload.year);
    url += `&year=${encoded}`;
  }
  if (payload.genre !== null && payload.genre !== undefined) {
    const encoded = encodeURIComponent(payload.genre);
    url += `&genre=${encoded}`;
  }

  return url;
}