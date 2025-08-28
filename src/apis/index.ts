import { PRODUCTS } from "@/constants/data";
import type { CustomSearchParams, Product } from "@/types/listing";

// LOGIC HANDLE DATA
const filterData = (params: CustomSearchParams) => {
  const { min = 0, max = 100, flavor, keyword } = params;
  const filteredData = PRODUCTS.filter((product) => {
    const flavors = flavor?.split(",") || [];
    const hasFlavorFilter = Boolean(flavors.filter(Boolean).length);

    // IF having no Flavor filter will ignored result of Product Flavors
    const flavorCondition =
      (hasFlavorFilter && flavors.includes(product.flavor!)) || true;

    const pricingCondition = product.price >= min && product.price <= max;
    const keywordCondition =
      keyword && keyword !== "undefined"
        ? product.name
            .trim()
            .toLowerCase()
            .includes(keyword.trim().toLowerCase())
        : true;

    return pricingCondition && flavorCondition && keywordCondition;
  });
  return filteredData || [];
};

const generateData = (
  params: CustomSearchParams,
  updateParams: (total: number) => void
) => {
  let data = [] as Product[];
  let paginatedData = [] as Array<Product[]>;
  const { limit, page } = params;

  // Filtering data
  const filteredData = filterData(params);
  // Update total data
  updateParams(filteredData.length);

  // PAGINATING into 2d array
  const maxPage = Math.ceil(filteredData.length / Number(limit));

  for (let i = 0; i < maxPage; i++) {
    const groupedData = filteredData.slice(
      Number(limit) * i,
      Number(limit) * (i + 1)
    );
    paginatedData.push(groupedData);
  }

  data = paginatedData[Number(page) - 1];
  return data || [];
};

export const fetchProducts = (
  params: CustomSearchParams,
  callback: (total: number) => void
): Promise<Product[]> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(generateData(params, callback));
      reject("Something went wrong when fetching products");
    }, 500);
  });
