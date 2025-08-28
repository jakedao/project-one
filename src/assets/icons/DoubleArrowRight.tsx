import type { Icon } from "@/types";

const DoubleArrowRight = (props: Icon) => {
  const { size, color } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6833 10L8.33325 12.35L15.9666 20L8.33325 27.65L10.6833 30L20.6833 20L10.6833 10Z"
        fill={color}
      />
      <path
        d="M21.6666 10L19.3166 12.35L26.9499 20L19.3166 27.65L21.6666 30L31.6666 20L21.6666 10Z"
        fill={color}
      />
    </svg>
  );
};

export default DoubleArrowRight;
