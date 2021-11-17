import React, { useState } from "react";
import colorData from "./color-data";
import ColorList from "./ColorList";
import AddColorForm from "./addColorForm";

export default function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <>
      <AddColorForm
        onNewColor={(title, color) => alert(`TODO: Create ${title} - ${color}`)}
      />
      <ColorList
        colors={colors}
        onRemoveC={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
      />
    </>
  );
}
