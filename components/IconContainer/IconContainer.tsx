import React from "react";
import { IconContext } from "react-icons";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  children: React.ReactNode;
  onclick?: () => void;
  style?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function IconContainer({
  children,
  onclick,
  style,
  size,
}: Props) {
  return (
    <IconContext.Provider
      value={{
        className: `${style} ${
          size === "sm"
            ? "text-xl"
            : size === "md"
            ? "text-2xl"
            : size === "lg"
            ? "text-3xl"
            : "text-4xl"
        }`,
      }}
    >
      {children}
    </IconContext.Provider>
  );
}
