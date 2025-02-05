"use client";
import React, { useState } from "react";

export default function Theme({ setTheme }) {
  const [num, setNum] = useState(0);
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
  ];

  const changeTheme = (newNum) => {
    setNum(newNum);
    setTheme(themes[newNum]); // Update the theme in RootLayout
  };

  return (
    <div
      style={{
        height: "10vh",
        position: "absolute",
        display: "flex",
        width: "100%",
        // alignItems: "right",
        justifyContent: "right",
        gap: "30px",
      }}
    >
      <button
        className="btn btn-active btn-primary"
        onClick={() => changeTheme(Math.min(num + 1, themes.length - 1))}
      >
        {themes[num]}
      </button>
    </div>
  );
}
