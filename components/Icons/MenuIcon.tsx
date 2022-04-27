import React from "react";
import { IconContext } from "react-icons";
import { MdMenu } from "react-icons/md";

interface Props {
  onclick: () => void;
}

export default function MenuIcon({ onclick }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-5xl",
        }}
      >
        <MdMenu onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
