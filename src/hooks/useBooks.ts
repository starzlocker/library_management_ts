import type { Book } from "@/models/Book";
import { getBooks, type getBookRequest } from "@/service/Book";
import { useCallback, useState } from "react";

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBooks = useCallback(async (params: getBookRequest) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getBooks(params);
      setBooks(data.data);
      setTotalItems(data.totalItems);
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    books,
    totalItems,
    isLoading,
    error,
    isError: error !== null,
    refetchBooks: fetchBooks,
  };
};