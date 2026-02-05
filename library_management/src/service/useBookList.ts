import type { Book } from "@/models/Book";
import type { Dispatch, SetStateAction } from "react";

export const useBookList = () => {
  const checkTextLength = (text: string) => {
    return text.length > 25 ? `${text.slice(0, 25)}...` : text;
  }

  const removeBook = (
    id: number,
    setFilteredBooks: Dispatch<SetStateAction<Book[]>>,
  ) => {
    // TODO: precisa implementar
    if(id === 0) return setFilteredBooks([]);
    return null
  }

  const getImageUrl = (name: string) => {
    return name;
  }


  return {
    checkTextLength,
    removeBook,
    getImageUrl
  }
}