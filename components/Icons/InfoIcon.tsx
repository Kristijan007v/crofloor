import React from "react";
import { IconContext } from "react-icons";
import { MdInfo } from "react-icons/md";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function InfoIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-xl",
        }}
      >
        <MdInfo onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
