import { BookCard } from '../BookCard/BookCard';
import type { Book } from '@/models/Book';

type Props = {
  books: Book[],
  isLoading: boolean,
  isError: boolean,
  error: string | null
}

export const BookList = ({books, isLoading, isError, error}:Props) => {
  
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

  return (
    <div className='books-container'>
      {books.map((book) => (
        <BookCard key={book.id} book={book}/>
      ))}
    </div>
  );
};
