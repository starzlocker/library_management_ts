import { BookSchema, type Book } from "@/models/Book";
import { books } from '@/mocks/books'
import {z} from 'zod';

export const getBooks = async ():Promise<Book[]> => {
  const data = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(books)
    }, 500);
  });

  // if (!response.ok) {
  //   throw new Error('Teste');
  // }

  // const data = await response.json();

  const result = z.array(BookSchema).safeParse(data);

  if (!result.success) {
    throw new Error(result.error.message);
  }

  return result.data;
}