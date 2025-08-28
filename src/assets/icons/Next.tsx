import type { Icon } from "@/types";

const ArrowRight = (props: Icon) => {
  const { size, color } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="#792e29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6833 10L8.33325 12.35L15.9666 20L8.33325 27.65L10.6833 30L20.6833 20L10.6833 10Z"
        fill={color}
        strokeWidth={0.5}
      />
    </svg>
  );
};
export default ArrowRight;
