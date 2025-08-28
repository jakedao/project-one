import { NULLISH_PAGE } from "@/constants";
import { PRODUCTS } from "@/constants/data";
import type { CustomSearchParams } from "@/types/listing";
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

  const pageSteps = [
    1,
    page > 3 ? NULLISH_PAGE : undefined, // Other previous pages
    page > 2 ? page - 1 : undefined,
    page !== 1 && page !== maxPage ? page : undefined, // current page logics
    page + 2 <= maxPage ? page + 1 : undefined,
    page < maxPage - 2 ? NULLISH_PAGE : undefined, // Other next page
    maxPage >= 2 ? maxPage : undefined,
  ].filter(Boolean);

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
