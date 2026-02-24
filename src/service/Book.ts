import { BookSchema } from "@/models/Book";
import {z} from 'zod';

export const getBooks = async (page:number) => {
  const paramPage = 'page';
  const encodedPage = encodeURIComponent(page);
  const response = await fetch(`http://localhost:9000/api/books?${paramPage}=${encodedPage}`, )

  if (!response.ok) {
    throw new Error('Teste');
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