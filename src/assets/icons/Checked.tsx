import type { Icon } from "@/types";

const Checked = (props: Icon) => {
  const { size = 40, color } = props;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6582 26.4583L7.70822 19.5083L5.34155 21.8583L14.6582 31.175L34.6582 11.175L32.3082 8.82495L14.6582 26.4583Z"
        fill={color}
      />
    </svg>
  );
};
export default Checked;
