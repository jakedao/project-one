import { NULLISH_PAGE } from "@/constants";
import { PRODUCTS } from "@/constants/data";
import type { CustomSearchParams } from "@/types/listing";
import { useCallback } from "react";
import { useSearchParams } from "react-router";

const usePaginator = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const parsedSearchParms = Object.fromEntries(
    searchParams.entries()
  ) as unknown as CustomSearchParams;

  const page = Number(parsedSearchParms.page) || 1;
  const limit = Number(parsedSearchParms.limit) || 5;
  const flavor = parsedSearchParms.flavor;
  const min = Number(parsedSearchParms.min) || 0;
  const max = Number(parsedSearchParms.max) || 100;
  const total = Number(parsedSearchParms.total) || PRODUCTS.length;
  const maxPage = Math.ceil(total / limit);
  const keyword = parsedSearchParms.keyword || "";

  const onUpdateParams = (args: CustomSearchParams) => {
    const parsedSearchURL = new URLSearchParams({
      ...searchParams,
      ...args,
    });

    if (parsedSearchURL.get("flavor") === "undefined") {
      parsedSearchURL.delete("flavor");
    }

    setSearchParams(parsedSearchURL);
  };

  const generatePageSteps = useCallback(() => {
    const MAX_RANGES = 3; // Visible number of pages
    const PAGE_GAP = Math.floor((MAX_RANGES - 1) / 2); // Maxium gap from the currentPage
    const possiblePages = [];
    const shouldShowMaxPage = maxPage >= 2 && maxPage !== page;
    const hasOtherPreviousPage = page - PAGE_GAP > 2;
    const hasOtherNextPage = page + PAGE_GAP < maxPage - 1;

    for (let i = page; i <= maxPage; i++) {
      if (possiblePages.length >= MAX_RANGES) break;
      const prevPage = i - 1;
      const nextPage = i + 1;

      // Handle Previous Page Logcs
      if (prevPage < page && prevPage > 1) {
        possiblePages.push(prevPage);
      }

      // Current Page Logics
      if (i !== 1 && i !== max && i === page) {
        possiblePages.push(i);
      }

      // Next Page Logics
      if (
        nextPage < maxPage &&
        nextPage - page < MAX_RANGES - 1 &&
        nextPage > page
      ) {
        possiblePages.push(nextPage);
      }
    }

    return [
      1,
      hasOtherPreviousPage ? NULLISH_PAGE : undefined,
      ...possiblePages,
      hasOtherNextPage ? NULLISH_PAGE : undefined,
      shouldShowMaxPage ? maxPage : undefined,
    ].filter(Boolean);
  }, [page, maxPage]);

  const pageSteps = generatePageSteps();

  return {
    searchParams: {
      page,
      limit,
      flavor,
      min,
      max,
      keyword,
    },
    maxPage,
    pageSteps,
    onUpdateParams,
  };
};

export default usePaginator;
