"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Pagination({
  totalPages,
  currentPage,
  setPage,
}: {
  totalPages: number;
  currentPage: number;
  setPage: (page: number) => void;
}) {
  const pathName = usePathname();
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    router.push(`${pathName}?page=${newPage}`);
  };

  return (
    <div className="flex justify-center">
      <button
        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
