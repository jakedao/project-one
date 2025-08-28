import { ArrowDown } from "@/assets/icons";
import ArrowUp from "@/assets/icons/ArrowUp";
import type { SelectField as SelectFieldProps } from "@/types";
import { checkDisabled, combineClassNames, upperCase } from "@/utils/common";
import { useState } from "react";
import Menu from "../Menu/Menu";
import Text from "../Text/Text";
import "./SelectField.scss";

const SelectField = (props: SelectFieldProps) => {
  const { options, disabled = false, width, onChange } = props;
  const [expended, toggleExpand] = useState<boolean>(false);
  const [parentPos, setParentPos] = useState<{ top: number; left: number }>();
  const [selectedValue, setSelectedValue] = useState<string>();

  const onSelectValue = (value: string | number) => {
    setSelectedValue(value as string);
    onChange && onChange(value as string);
    toggleExpand(false);
  };

  const disabledClass = checkDisabled(disabled);

  return (
    <>
      <div
        style={{
          width: width || 250,
        }}
        className={
          combineClassNames(
            "select-field__wrapper",
            expended ? "--expanded" : ""
          ) + disabledClass
        }
        onClick={(e) => {
          e.stopPropagation();
          const rect = e.currentTarget.getBoundingClientRect();
          setParentPos({ top: rect.top + 15, left: rect.left + 150 });
          toggleExpand((prev) => !prev);
        }}
      >
        <div className={combineClassNames("select-field") + disabledClass}>
          <Text size="title">
            {selectedValue ? upperCase(selectedValue) : "Select field"}
          </Text>
        </div>
        {expended ? <ArrowUp size={28} /> : <ArrowDown size={28} />}
      </div>

      <Menu
        open={expended}
        onClose={() => toggleExpand(false)}
        options={options}
        targetPos={parentPos}
        onSelectValue={onSelectValue}
        selectedValue={selectedValue}
      />
    </>
  );
};

export default SelectField;
