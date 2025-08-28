import { RANGE_GAP } from "@/constants";
import type { RangeParams } from "@/types/listing";
import { currencyConverter } from "@/utils/common";
import Text from "../Text/Text";
import "./RangeSlider.scss";

type TOwnProps = {
  ranges: RangeParams;
  onUpdateRange: (arg: RangeParams) => void;
};

const RangeSlider = (props: TOwnProps) => {
  const { ranges, onUpdateRange } = props;

  const validateMinMax = (
    isMin: boolean,
    value: number,
    ranges: RangeParams
  ) => {
    if (isMin) {
      return value < ranges.max - RANGE_GAP ? value : ranges.max - RANGE_GAP;
    }
    return value > ranges.min + RANGE_GAP ? value : ranges.min + RANGE_GAP;
  };

  const onChangeRange = ({
    value,
    isMin,
  }: {
    value: number;
    isMin: boolean;
  }) => {
    onUpdateRange({
      ...ranges,
      [isMin ? "min" : "max"]: validateMinMax(isMin, value, ranges),
    });
  };

  return (
    <div className="slider-wrapper">
      <input
        type="range"
        value={ranges.min}
        className="slider"
        min={0}
        max={100}
        onChange={(e) =>
          onChangeRange({ value: Number(e.target.value), isMin: true })
        }
      />
      <input
        type="range"
        value={ranges.max}
        className="slider"
        min={0}
        max={100}
        style={{
          background: `linear-gradient(to right, #e9c4c1 ${ranges.min}% ${ranges.min}%, #792e29 ${ranges.min}% ${ranges.max}%, #e9c4c1 ${ranges.max}% 100%`, // Styling applied for the last slider as absolute attribute was taking order
        }}
        onChange={(e) =>
          onChangeRange({ value: Number(e.target.value), isMin: false })
        }
      />
      <div className="slider__label">
        <Text>{currencyConverter(ranges.min)}</Text>-
        <Text>{currencyConverter(ranges.max)}</Text>
      </div>
      {/* <div className="slider-track" style={{ left: ranges.min * 1.7 + "px" }}>
        <Text size="text-md" fontWeight={600}>
          {currencyConverter(ranges.min)}
        </Text>
      </div>
      <div
        className="slider-track slider-track--max"
        style={{ left: ranges.max * 1.6 + "px" }}
      >
        <Text size="text-md" fontWeight={600}>
          {currencyConverter(ranges.max)}
        </Text>
      </div> */}
    </div>
  );
};

export default RangeSlider;
