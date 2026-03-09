// import { AddBookModal } from "@/components/BookStore/AddBookModal/AddBookModal"
import { BookDetailsModal } from '@/components/BookStorePage/BookDetailsModal/BookDetailsModal';
import { BookList } from '@/components/BookStorePage/BookList/BookList';
import { CartModal } from '@/components/BookStorePage/CartModal/CartModal';
import { NavBar } from '@/components/misc/NavBar/NavBar';
import { SearchBar } from '@/components/BookStorePage/SearchBar/SearchBar';
import { CartButton } from '@/components/BookStorePage/CartButton/CartButton';
import { CartContextProvider } from '@/context/CartContextProvider';
import { useBooks } from '@/hooks/useBooks';
import { useEffect, useState } from 'react';
import { Carousel } from '@/components/BookStorePage/Carousel/Carousel';
import { BookListHeading } from '@/components/misc/BookListHeading/BookListHeading';
import type { Book } from '@/models/Book';
import { UserButton } from '@/components/misc/UserButton/UserButton';
import { UserLoginModal } from '@/components/misc/UserLoginModal/UserLoginModal';
import { usePagination } from '@/hooks/usePagination';

export const BookStore = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChangeSearchTerm = (value: string) => {
    if (value !== searchTerm) {
      setSearchTerm(value);
      goToPage(1);
    }
  }

  const { books, totalItems, isLoading, isError, error, refetchBooks } =
    useBooks();

  const [currentBook, setCurrentBook] = useState<Book | null>(null);

  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);

  // const filteredBooks = useMemo(() => {
  //   if (!searchTerm) return books;

  //   return books.filter((b) =>
  //     b.title.toLowerCase().includes(searchTerm.toLowerCase()),
  //   );
  // }, [books, searchTerm]);

  const { page, goToNextPage, goToPrevPage, maxPages, goToPage } =
    usePagination(totalItems);

  useEffect(() => {
    refetchBooks({ page, title: searchTerm});
  }, [refetchBooks, page, searchTerm]);

  return (
    <CartContextProvider>
      <header>
        <NavBar>
          <SearchBar searchTerm={searchTerm} handleChange={handleChangeSearchTerm} />
          <CartButton />
          <UserButton handleClick={() => setIsOpenLoginModal(true)} />
        </NavBar>
      </header>
      <main>
        {!searchTerm && <Carousel />}
        {(!searchTerm && books.length > 0) && <BookListHeading />}
        <BookList
          books={books}
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
          maxPages={maxPages}
          page={page}
          isLoading={isLoading}
          isError={isError}
          error={error}
          setCurrentBook={setCurrentBook}
        />
        {/* <AddBookModal /> */}
        {currentBook && (
          <BookDetailsModal
            book={currentBook}
            isOpen={currentBook?.id >= 0}
            onClose={() => setCurrentBook(null)}
          />
        )}
        <CartModal />
        <UserLoginModal
          isOpen={isOpenLoginModal}
          onClose={() => setIsOpenLoginModal(false)}
        />
      </main>
    </CartContextProvider>
  );
};
