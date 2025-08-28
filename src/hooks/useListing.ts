import { fetchProducts } from "@/apis";
import type { Product } from "@/types/listing";
import { useEffect, useState } from "react";
import usePaginator from "./usePaginator";

const useListing = () => {
  const { searchParams, onUpdateParams } = usePaginator();
  const { limit, page, flavor, min, max, keyword } = searchParams;

  const [data, setData] = useState<{ products: Product[]; loading: boolean }>({
    products: [],
    loading: false,
  });

  const fetchData = async () => {
    setData((prev) => ({ ...prev, loading: true }));

    try {
      const parsedData = { limit, page, min, max, flavor, keyword };

      const data = await fetchProducts(parsedData, (total) =>
        onUpdateParams({ ...searchParams, total })
      );

      if (data) {
        setData({ products: data, loading: false });
      }
    } catch (e) {
      console.log(e);
    }
  };

  // WATCHER: Observe params changed to re-fetching new data
  useEffect(() => {
    fetchData();
  }, [limit, page, flavor, min, max, keyword]);

  return { products: data.products || [], loading: data.loading };
};

export default useListing;
