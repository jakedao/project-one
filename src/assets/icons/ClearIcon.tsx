import type { Icon } from "@/types";

const ClearIcon = (props: Icon) => {
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
        d="M31.6666 10.6834L29.3166 8.33337L19.9999 17.65L10.6833 8.33337L8.33325 10.6834L17.6499 20L8.33325 29.3167L10.6833 31.6667L19.9999 22.35L29.3166 31.6667L31.6666 29.3167L22.3499 20L31.6666 10.6834Z"
        fill={color}
      />
    </svg>
  );
};

export default ClearIcon;
