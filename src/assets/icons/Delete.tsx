import type { Icon } from "@/types";

const Delete = (props: Icon) => {
  const { size = 40, color, classes } = props;
  return (
    <svg
      className={classes}
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 10H8.33333M8.33333 10H35M8.33333 10V33.3334C8.33333 34.2174 8.68452 35.0653 9.30964 35.6904C9.93477 36.3155 10.7826 36.6667 11.6667 36.6667H28.3333C29.2174 36.6667 30.0652 36.3155 30.6904 35.6904C31.3155 35.0653 31.6667 34.2174 31.6667 33.3334V10M13.3333 10V6.66671C13.3333 5.78265 13.6845 4.93481 14.3096 4.30968C14.9348 3.68456 15.7826 3.33337 16.6667 3.33337H23.3333C24.2174 3.33337 25.0652 3.68456 25.6904 4.30968C26.3155 4.93481 26.6667 5.78265 26.6667 6.66671V10M16.6667 18.3334V28.3334M23.3333 18.3334V28.3334"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Delete;
