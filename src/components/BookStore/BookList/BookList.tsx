import { useBooks } from '@/hooks/useBooks';
import { BookCard } from '../BookCard/BookCard';


export const BookList = () => {

  const {
    books,
    isLoading,
    isError,
    error
  } = useBooks();

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
        <div key={book.id}>
          <BookCard book={book}/>
        </div>
      ))}
    </div>
  );
};
