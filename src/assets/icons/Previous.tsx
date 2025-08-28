import type { Icon } from "@/types";

const ArrowLeft = (props: Icon) => {
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
        d="M18.3333 30L20.6833 27.65L13.05 20L20.6833 12.35L18.3333 10L8.33329 20L18.3333 30Z"
        fill={color}
        strokeWidth={0.5}
      />
    </svg>
  );
};
export default ArrowLeft;
