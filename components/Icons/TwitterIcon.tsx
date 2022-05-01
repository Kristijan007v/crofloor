import React from "react";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";

interface Props {
  onclick?: () => void;
  style?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function TwitterIcon({ onclick, style, size }: Props) {
  return (
    <>
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
        <FaTwitter onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
