import { BookCard } from '../BookCard/BookCard';
import type { Book } from '@/models/Book';
import styles from './_.module.scss';
import { type Dispatch, type SetStateAction } from 'react';
import { Button } from '@/components/misc/Button/Button';
import { BookCardSkeleton } from '../BookCard/BookCardSkeleton';

type Props = {
  books: Book[];
  page: number;
  goToNextPage: () => void;
  goToPrevPage: () => void;
  maxPages: number;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
  setCurrentBook: Dispatch<SetStateAction<Book | null>>;
};

export const BookList = ({
  books,
  page,
  goToNextPage,
  goToPrevPage,
  maxPages,
  isLoading,
  isError,
  error,
  setCurrentBook,
}: Props) => {
  if (isError) {
    return (
      <div>
        <p>{`Erro ao buscar os livros: ${error || 'Erro desconhecido'}`}</p>
      </div>
    );
  }

  if (!isLoading && !books.length) {
    return (
      <section className={styles['booklist']}>
        <p>Nenhum livro encontrado</p>
      </section>
    );
  }

  return (
    <section className={styles['booklist']}>
      {isLoading ? (
        <div className={styles['books-container']}>
          <BookCardSkeleton />
        </div>
      ) : (
        <div className={styles['books-container']}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              onClick={() => {
                setCurrentBook(book);
              }}
            />
          ))}
        </div>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '4rem',
        }}
      >
        <Button
          kind='primary'
          onClick={goToPrevPage}
          disabled={page === 1 || isLoading || isError}
        >
          Anterior
        </Button>
        Paginação: {page} / {maxPages}
        <Button
          kind='primary'
          onClick={goToNextPage}
          disabled={page === maxPages || isLoading || isError}
        >
          Próxima
        </Button>
      </div>
    </section>
  );
};
