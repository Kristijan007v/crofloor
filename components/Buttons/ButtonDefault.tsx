import React from "react";
import ArrowLeft from "../Icons/ArrowLeft";

interface Props {
  onclick: () => void;
  text: string;
  icon?: string;
  color?: "special";
}

export default function ButtonDefault({ onclick, text, icon, color }: Props) {
  return (
    <button
      className={`btn__basic flex items-center justify-center ${
        color === "special"
          ? "bg-primary-yellow text-black"
          : "bg-black text-white"
      }`}
      onClick={onclick}
    >
      {icon == "arrowLeft" ? <ArrowLeft /> : null}
      {text}
    </button>
  );
}
