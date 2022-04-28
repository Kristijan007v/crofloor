import React from "react";
import { IconContext } from "react-icons";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function ArrowDown({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-4xl",
        }}
      >
        <MdKeyboardArrowDown onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
