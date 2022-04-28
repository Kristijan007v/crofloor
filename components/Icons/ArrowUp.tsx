import React from "react";
import { IconContext } from "react-icons";
import { MdKeyboardArrowUp } from "react-icons/md";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function ArrowUp({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-4xl",
        }}
      >
        <MdKeyboardArrowUp onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
