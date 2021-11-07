import React from "react";
import Color from "./Color";

export default function ColorList({
  colors = [],
  onRemoveC = (f) => f,
  onRateColor = (f) => f,
}) {
  if (!colors.length) return <div>No Colors Listed yet</div>;
  return (
    <div>
      {colors.map((color) => (
        <Color
          key={color.id}
          onRemove={onRemoveC}
          onRate={onRateColor}
          {...color}
        />
      ))}
    </div>
  );
}
