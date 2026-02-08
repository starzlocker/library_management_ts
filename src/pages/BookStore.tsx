// import { AddBookModal } from "@/components/BookStore/AddBookModal/AddBookModal"
import { BookDetailsModal } from "@/components/BookStore/BookDetailsModal/BookDetailsModal"
import { BookList } from "@/components/BookStore/BookList/BookList"
import { CartModal } from "@/components/BookStore/Cart/CartModal"
import { NavBar } from "@/components/BookStore/NavBar/NavBar"
import { SearchBar } from "@/components/BookStore/SearchBar/SearchBar"
import { CartButton } from "@/components/CartButton"
import { CartContextProvider } from "@/context/CartContextProvider"
import { useBooks } from "@/hooks/useBooks"
import { useMemo, useState } from "react"


export const BookStore = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')

  const {
    books,
    isLoading,
    isError,
    error
  } = useBooks();

  const filteredBooks = useMemo(() => {
    if (!searchTerm) return books;
    
    return books.filter(b => b.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [books, searchTerm])

  return (
    <CartContextProvider>
      <NavBar>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <CartButton />
      </NavBar>
      <BookList books={filteredBooks} isLoading={isLoading} isError={isError} error={error} />
      {/* <AddBookModal /> */}
      <BookDetailsModal />
      <CartModal />
    </CartContextProvider>
  )
}