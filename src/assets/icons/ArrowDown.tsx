import type { Icon } from "@/types";

const ArrowDown = (props: Icon) => {
  const { size = 40, color, classes } = props;
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
        d="M12.35 13.825L20 21.4583L27.65 13.825L30 16.175L20 26.175L10 16.175L12.35 13.825Z"
        fill={color}
        strokeWidth={0.5}
      />
    </svg>
  );
};

export default ArrowDown;
