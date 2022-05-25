import React from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";
import { motion } from "framer-motion";

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
    <motion.button
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      whileTap={{
        scale: 0.9,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
        },
      }}
      className={`btn__basic flex w-full items-center justify-center md:w-3/6 ${
        color === "special"
          ? "bg-primary-bg text-black"
          : "bg-black text-white hover:bg-gray-900"
      } ${style}`}
      onClick={onclick}
      aria-label={ariaLabel}
    >
      {icon == "arrowLeft" ? <ArrowLeft /> : null}
      {text}
      {icon == "arrowRight" ? <ArrowRight /> : null}
    </motion.button>
  );
}
