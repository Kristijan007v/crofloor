import React from "react";
import { IconContext } from "react-icons";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface Props {
  style?: string;
}

export default function ArrowLeft({ style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-3xl",
        }}
      >
        <MdKeyboardArrowLeft />
      </IconContext.Provider>
    </>
  );
}
