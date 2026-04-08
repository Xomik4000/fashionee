import { useEffect, useMemo, useState } from "react";
import { DEFAULT_PAGE } from "../constants";

function usePagination(items, itemsPerPage, resetKey) {
  const [currentPage, setCurrentPage] = useState(DEFAULT_PAGE);

  useEffect(() => {
    setCurrentPage(DEFAULT_PAGE);
  }, [resetKey]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const safeCurrentPage =
    totalPages === 0 ? DEFAULT_PAGE : Math.min(currentPage, totalPages);

  const paginatedItems = useMemo(() => {
    const startIndex = (safeCurrentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    return items.slice(startIndex, endIndex);
  }, [items, itemsPerPage, safeCurrentPage]);

  const onPageChange = (page) => {
    if (page < DEFAULT_PAGE) return;
    if (page > totalPages) return;

    setCurrentPage(page);
  };

  return {
    currentPage: safeCurrentPage,
    totalPages,
    paginatedItems,
    onPageChange,
  };
}

export default usePagination;