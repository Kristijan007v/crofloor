import React from "react";
import { IconContext } from "react-icons";
import { MdFacebook } from "react-icons/md";
import ButtonLink from "../ButtonLink/ButtonLink";

interface Props {
  onclick?: () => void;
  style?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function FacebookIcon({ onclick, style, size }: Props) {
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
      <MdFacebook />
    </IconContext.Provider>
  );
}
