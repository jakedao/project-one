import {
  DEFAULT_FILTER,
  DEFAULT_SEARCH_PARAMS,
  FLAVOR_CHECKBOXES,
} from "@/constants";
import { useDrawer } from "@/hooks";
import usePaginator from "@/hooks/usePaginator";
import type {
  ChocolateFlavor,
  FilterParams,
  RangeParams,
} from "@/types/listing";
import { useEffect, useState } from "react";
import { Button, Checkbox, RangeSlider, Text } from "../common";
import "./Filter.scss";

const Filter = () => {
  const { onClose } = useDrawer();
  const { searchParams, onUpdateParams } = usePaginator();
  const { flavor, max, min } = searchParams;
  const [filter, setFilter] = useState<FilterParams>({
    flavor: (flavor?.split(",") || []) as ChocolateFlavor[],
    ranges: {
      min,
      max,
    },
  });

  const handleSelectCheckbox = (value: ChocolateFlavor) => {
    let newFlavors = [];
    if (filter.flavor.includes(value)) {
      newFlavors = filter.flavor.filter((fl) => fl !== value);
    } else {
      newFlavors = [...filter.flavor, value];
    }
    setFilter((prev) => ({ ...prev, flavor: newFlavors }));
  };

  const handlePriceRange = (range: RangeParams) => {
    setFilter((prev) => ({ ...prev, ranges: range }));
  };

  const onApplyFilter = () => {
    onUpdateParams({
      ...searchParams,
      page: 1,
      flavor: filter.flavor.join(","),
      min: filter.ranges.min,
      max: filter.ranges.max,
    });
    onClose();
  };

  const onResetFilter = () => {
    setFilter(DEFAULT_FILTER);
    onUpdateParams(DEFAULT_SEARCH_PARAMS);
    onClose();
  };

  useEffect(() => {
    setFilter({
      flavor: (flavor?.split(",") || []) as ChocolateFlavor[],
      ranges: {
        min,
        max,
      },
    });
  }, [flavor, min, max]);

  return (
    <div className="filter">
      <div className="filter__flavor">
        <Text size="title" fontWeight={600}>
          Flavor
        </Text>
        <div className="filter__flavor__select">
          {FLAVOR_CHECKBOXES.map((fl) => (
            <Checkbox
              key={fl.value}
              checked={filter.flavor.includes(fl.value)}
              onChange={() => handleSelectCheckbox(fl.value)}
            >
              {fl.label}
            </Checkbox>
          ))}
        </div>
      </div>

      <div className="filter__pricing">
        <Text size="title" fontWeight={600}>
          Price Range
        </Text>
        <RangeSlider ranges={filter.ranges} onUpdateRange={handlePriceRange} />
      </div>

      <div className="filter__cta">
        <Button
          width={120}
          height={30}
          variant="secondary"
          onClick={onResetFilter}
        >
          Reset
        </Button>
        <Button width={120} height={30} onClick={onApplyFilter}>
          Apply
        </Button>
      </div>
    </div>
  );
};

export default Filter;
