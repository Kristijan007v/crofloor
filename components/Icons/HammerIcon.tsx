import React from "react";
import { IconContext } from "react-icons";
import { IoMdHammer } from "react-icons/io";

interface Props {
  style?: string;
}

export default function HammerIcon({ style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-8xl text-yellow-special",
        }}
      >
        <IoMdHammer />
      </IconContext.Provider>
    </>
  );
}
