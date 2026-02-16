import { BookCard } from '../BookCard/BookCard';
import type { Book } from '@/models/Book';
import styles from './_.module.scss'
import type { Dispatch, SetStateAction } from 'react';

type Props = {
  books: Book[],
  isLoading: boolean,
  isError: boolean,
  error: string | null,
  setCurrentBook: Dispatch<SetStateAction<Book | null>>
}

export const BookList = ({books, isLoading, isError, error, setCurrentBook}:Props) => {
  
  if (isLoading) {
    return <div>Fetching books</div>
  }

  if (isError) {
    return (
      <div>
        <p>
          {`Erro ao buscar os livros: ${error || 'Erro desconhecido'}`}
        </p>
      </div>
    )
  }

  if (!books.length) {
    return (
    <section className={styles['booklist']}>
      <p>Nenhum livro encontrado</p>
    </section>
    )
  }

  return (
    <section className={styles['booklist']}>
      <div className={styles['books-container']}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} onClick={() => {setCurrentBook(book)}} />
        ))}
      </div>
    </section>
  );
};
