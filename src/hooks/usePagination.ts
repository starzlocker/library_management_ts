import { useState } from "react";

export const usePagination = (total:number) => {
  const [page, setPage] = useState(0);
  const limit = 15;
  const maxPages = Math.floor(total / limit);

  const goToNextPage = () => {
    if (page < maxPages) setPage(prev => prev + 1);
  }

  const goToPrevPage = () => {
    if (page > 0) setPage(prev => prev - 1);
  }

  const goToPage = (page: number) => {
    if (page < maxPages) setPage(page);
  }

  return {
    goToNextPage,
    goToPrevPage,
    goToPage,
    maxPages,
    page
  }
}