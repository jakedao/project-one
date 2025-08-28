import { FilterIcon, SearchIcon } from "@/assets/icons";
import { Filter, Pagination } from "@/components";
import { IconButton, ProductCard, Text, TextField } from "@/components/common";
import { useDrawer, usePaginator, useScreenSize } from "@/hooks";
import useListing from "@/hooks/useListing";
import { useEffect, useState } from "react";
import "./ListingPage.scss";

const ListingPage = () => {
  const [searchText, setSearchText] = useState<string>();
  const [timeout, setTimeoutRef] = useState<NodeJS.Timeout>();

  const { products, loading } = useListing();
  const { isMobile } = useScreenSize();
  const { onTriggerDrawer } = useDrawer();
  const { searchParams, onUpdateParams } = usePaginator();

  const renderListing = () => {
    if (loading) {
      return <Text size="title">Data is fetching...</Text>;
    }

    if (!products.length) {
      return <Text variant="h5">No data available</Text>;
    }
    return products.map((d) => (
      <ProductCard key={d.id} {...d} imageSrc={d.images[0]} />
    ));
  };

  // Debounce searching
  useEffect(() => {
    if (timeout) {
      clearTimeout(timeout);
    }
    const timer = setTimeout(() => {
      onUpdateParams({ ...searchParams, keyword: searchText });
    }, 500);
    setTimeoutRef(timer);
    () => {
      clearTimeout(timeout);
    };
  }, [searchText]);

  return (
    <div className="listing-page">
      {!isMobile && <Filter />}
      <div className="listing">
        <div className="listing__search__box">
          <TextField
            width={250}
            startIcon={<SearchIcon size={24} />}
            placeholder="Type here to search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          {isMobile && (
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onTriggerDrawer && onTriggerDrawer({ component: <Filter /> });
              }}
            >
              <FilterIcon size={24} />
              <Text size="text-lg" fontWeight={600}>
                Filter
              </Text>
            </IconButton>
          )}
        </div>
        <div className="listing__container">{renderListing()}</div>

        <Pagination />
      </div>
    </div>
  );
};

export default ListingPage;
