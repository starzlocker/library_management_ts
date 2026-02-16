// import { AddBookModal } from "@/components/BookStore/AddBookModal/AddBookModal"
import { BookDetailsModal } from '@/components/BookStorePage/BookDetailsModal/BookDetailsModal';
import { BookList } from '@/components/BookStorePage/BookList/BookList';
import { CartModal } from '@/components/BookStorePage/CartModal/CartModal';
import { NavBar } from '@/components/BookStorePage/NavBar/NavBar';
import { SearchBar } from '@/components/BookStorePage/SearchBar/SearchBar';
import { CartButton } from '@/components/BookStorePage/CartButton/CartButton';
import { CartContextProvider } from '@/context/CartContextProvider';
import { useBooks } from '@/hooks/useBooks';
import { useMemo, useState } from 'react';
import { Carousel } from '@/components/BookStorePage/Carousel/Carousel';
import { BookListHeading } from '@/components/misc/BookListHeading';

export const BookStore = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const { books, isLoading, isError, error } = useBooks();

  const filteredBooks = useMemo(() => {
    if (!searchTerm) return books;

    return books.filter((b) =>
      b.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [books, searchTerm]);

  return (
    <CartContextProvider>
      <header>
        <NavBar>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <CartButton />
        </NavBar>
      </header>
      <main>
        {!searchTerm && <Carousel />}
        {!searchTerm && <BookListHeading/>}
        <BookList
          books={filteredBooks}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />
        {/* <AddBookModal /> */}
        <BookDetailsModal />
        <CartModal />
      </main>
    </CartContextProvider>
  );
};
