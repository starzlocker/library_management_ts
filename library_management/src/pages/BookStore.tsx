import { AddBookModal } from "@/components/BookStore/AddBookModal/AddBookModal"
import { BookDetailsModal } from "@/components/BookStore/BookDetailsModal/BookDetailsModal"
import { BookList } from "@/components/BookStore/BookList/BookList"
import { NavBar } from "@/components/BookStore/NavBar/NavBar"
import { SearchBar } from "@/components/BookStore/SearchBar/SearchBar"


export const BookStore = () => {

  return (
    <>
      <NavBar>
        <SearchBar />
      </NavBar>
      <BookList />
      <AddBookModal />
      <BookDetailsModal />
    </>
  )
}