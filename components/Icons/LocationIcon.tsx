import React from "react";
import { IconContext } from "react-icons";
import { MdLocationPin } from "react-icons/md";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function LocationIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-xl",
        }}
      >
        <MdLocationPin onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
