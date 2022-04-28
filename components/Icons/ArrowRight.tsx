import React from "react";
import { IconContext } from "react-icons";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  style?: string;
}

export default function ArrowRight({ style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-3xl",
        }}
      >
        <MdKeyboardArrowRight />
      </IconContext.Provider>
    </>
  );
}
