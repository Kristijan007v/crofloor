import React from "react";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";

interface Props {
  onclick: () => void;
  style?: string;
}

export default function CloseIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon__default",
        }}
      >
        <MdClose onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
