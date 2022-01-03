import React from "react";

interface IRangeProps {
    min?: number;
    max?: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
}

export const Range: React.FC<IRangeProps> = ({ min = 0, max = 100, step = 1, value, onChange }) => (
    <input
        type="range"
        id="priceRange"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number.parseInt(e.target.value))}
    />
);

export default Range;
