import type { ISlider } from "@/types";
import { useRef } from "react";
import Chip from "../Chip/Chip";
import "./Slider.scss";

const Slider = (props: ISlider) => {
  const { value, onChange, width, min = 0, max = 100, step = 1 } = props;
  const labelRef = useRef<HTMLDivElement>(null);
  const labelWidth = labelRef.current?.offsetWidth || 0;

  const currentRatio = value / max;

  return (
    <div className="slider" style={{ width: width || 180 }}>
      <input
        min={min}
        max={max}
        type="range"
        value={value}
        step={step}
        onChange={(e) => {
          onChange(Number(e.target.value));
        }}
        style={{
          background: `linear-gradient(to right, #792e29 ${
            currentRatio * 100
          }%, #e9c4c1 0%`, // Styling applied for the last slider as absolute attribute was taking order
        }}
      />
      <div
        style={{
          position: "relative",
          marginLeft: -(labelWidth * currentRatio) + "px", // Positioning the label by the parent width
          left: `${currentRatio * 100}%`,
          width: "30px",
          height: "30px",
        }}
      >
        <Chip ref={labelRef}>{value}</Chip>
      </div>
    </div>
  );
};

export default Slider;
