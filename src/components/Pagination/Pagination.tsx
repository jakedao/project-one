import {
  DoubleArrowLeft,
  DoubleArrowRight,
  Next,
  Previous,
} from "@/assets/icons";
import { NULLISH_PAGE } from "@/constants";
import usePaginator from "@/hooks/usePaginator";
import { combineClassNames } from "@/utils/common";
import { IconButton, Text } from "../common";
import LimitDropdown from "./LimitDropdown";
import "./Pagination.scss";

const Pagination = () => {
  const { searchParams, maxPage, pageSteps, onUpdateParams } = usePaginator();
  const { page } = searchParams;

  const disabledLogics = {
    canPrevious: page === 1 ? "disabled" : "",
    canNext: page === maxPage ? "disabled" : "",
  };

  const renderPaging = () => {
    return pageSteps.map((p) => (
      <div
        key={p}
        onClick={() => {
          onUpdateParams({ ...searchParams, page: Number(p) });
        }}
        className={`${combineClassNames(
          "pagination__page",
          page === p ? "--selected" : ""
        )} ${p === NULLISH_PAGE ? "disabled" : ""}`}
      >
        <Text size="title" fontWeight={700}>
          {p}
        </Text>
      </div>
    ));
  };

  return (
    <div className="pagination">
      <IconButton
        className={disabledLogics.canPrevious}
        onClick={() => {
          onUpdateParams({ ...searchParams, page: 1 });
        }}
      >
        <DoubleArrowLeft size={22} />
      </IconButton>
      <IconButton
        className={disabledLogics.canPrevious}
        onClick={() => {
          onUpdateParams({ ...searchParams, page: page - 1 });
        }}
      >
        <Previous size={22} />
      </IconButton>
      <div className="pagination__paging">{renderPaging()}</div>
      <IconButton
        className={disabledLogics.canNext}
        onClick={() => {
          onUpdateParams({ ...searchParams, page: page + 1 });
        }}
      >
        <Next size={22} />
      </IconButton>
      <IconButton
        className={disabledLogics.canNext}
        onClick={() => {
          onUpdateParams({ ...searchParams, page: maxPage });
        }}
      >
        <DoubleArrowRight size={22} />
      </IconButton>

      <LimitDropdown />
    </div>
  );
};

export default Pagination;
