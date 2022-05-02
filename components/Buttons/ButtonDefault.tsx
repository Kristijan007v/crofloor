import React from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

interface Props {
  onclick?: () => void;
  text: string;
  ariaLabel: string;
  icon?: "arrowLeft" | "arrowRight";
  color?: "special";
  style?: string;
}

export default function ButtonDefault({
  onclick,
  text,
  ariaLabel,
  icon,
  color,
  style,
}: Props) {
  return (
    <button
      className={`btn__basic flex items-center justify-center ${
        color === "special" ? "bg-primary-bg text-black" : "bg-black text-white"
      } ${style}`}
      onClick={onclick}
      aria-label={ariaLabel}
    >
      {icon == "arrowLeft" ? <ArrowLeft /> : null}
      {text}
      {icon == "arrowRight" ? <ArrowRight /> : null}
    </button>
  );
}
