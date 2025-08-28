import type { Icon } from "@/types";

const ArrowUp = (props: Icon) => {
  const { size, classes } = props;
  return (
    <svg
      className={classes}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="#792e29"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.35 26.175L20 18.5416L27.65 26.175L30 23.825L20 13.825L10 23.825L12.35 26.175Z"
        strokeWidth={0.5}
      />
    </svg>
  );
};

export default ArrowUp;
