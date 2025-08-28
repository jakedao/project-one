import type { Icon } from "@/types";

const DoubleArrowLeft = (props: Icon) => {
  const { size, color } = props;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.3166 30L31.6666 27.65L24.0333 20L31.6666 12.35L29.3166 10L19.3166 20L29.3166 30Z"
        fill={color}
      />
      <path
        d="M18.3333 30L20.6833 27.65L13.05 20L20.6833 12.35L18.3333 10L8.33329 20L18.3333 30Z"
        fill={color}
      />
    </svg>
  );
};

export default DoubleArrowLeft;
