import type { Icon } from "@/types";

const FilterIcon = (props: Icon) => {
  const { size, color } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.675 9.99996H28.3417L19.9917 20.5L11.675 9.99996ZM7.09169 9.34996C10.4584 13.6666 16.675 21.6666 16.675 21.6666V31.6666C16.675 32.5833 17.425 33.3333 18.3417 33.3333H21.675C22.5917 33.3333 23.3417 32.5833 23.3417 31.6666V21.6666C23.3417 21.6666 29.5417 13.6666 32.9084 9.34996C33.7584 8.24996 32.975 6.66663 31.5917 6.66663H8.40835C7.02502 6.66663 6.24169 8.24996 7.09169 9.34996Z"
        fill="#792e29"
      />
    </svg>
  );
};

export default FilterIcon;
