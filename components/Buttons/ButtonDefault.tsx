import React from "react";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";
import { motion } from "framer-motion";
import MailIcon from "../Icons/MailIcon";

interface Props {
  onclick?: () => void;
  text: string;
  ariaLabel: string;
  icon?: "arrowLeft" | "arrowRight" | "mail";
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
      className={`btn-wide btn flex content-center justify-center space-x-2 rounded-full bg-black text-white`}
      onClick={onclick}
      aria-label={ariaLabel}
    >
      {icon == "arrowLeft" ? <ArrowLeft /> : null}
      <span>{text}</span>
      {icon == "arrowRight" ? <ArrowRight /> : null}
      {icon == "mail" ? <MailIcon /> : null}
    </motion.button>
  );
}
