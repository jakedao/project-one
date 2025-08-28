import type { ISlider } from "@/types";
import Chip from "../Chip/Chip";
import "./Slider.scss";

const Slider = (props: ISlider) => {
  const { value, onChange, width, min = 0, max = 100, step = 1 } = props;

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
            (value / max) * 100
          }%, #e9c4c1 0%`, // Styling applied for the last slider as absolute attribute was taking order
        }}
      />
      {typeof value === "number" && <Chip>{value}</Chip>}
    </div>
  );
};

export default Slider;
