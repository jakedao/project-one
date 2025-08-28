import usePaginator from "@/hooks/usePaginator";
import { useState } from "react";
import { ClickAwayListener, Text } from "../common";
import "./LimitDropdown.scss";

const LimitDropdown = () => {
  const { searchParams, onUpdateParams } = usePaginator();
  const { limit } = searchParams;

  const [expanded, toggleExpanded] = useState<boolean>(false);
  const ITEM_STEPS = [5, 10, 20, 50];

  const handleSelectLimit = (value: number) => {
    onUpdateParams({ ...searchParams, limit: value, page: 1 });
    toggleExpanded(false);
  };

  const renderLimitItem = () => {
    if (!expanded) {
      return (
        <div className="limit__item">
          <Text size="text-lg">{limit}</Text>
        </div>
      );
    }

    return ITEM_STEPS.map((t) => (
      <div
        key={t}
        className={"limit__item"}
        onClick={(e) => {
          e.stopPropagation();
          handleSelectLimit(t);
        }}
      >
        <Text size="text-lg">{t}</Text>
      </div>
    ));
  };

  return (
    <div
      className="limit__wrapper"
      onClick={(e) => {
        e.stopPropagation();
        toggleExpanded(true);
      }}
    >
      <ClickAwayListener
        onClickAway={() => toggleExpanded(false)}
        shouldListen={true}
      >
        <div className="limit">{renderLimitItem()}</div>
      </ClickAwayListener>
    </div>
  );
};

export default LimitDropdown;
