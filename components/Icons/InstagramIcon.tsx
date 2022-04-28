import React from "react";
import { IconContext } from "react-icons";
import { FaInstagram } from "react-icons/fa";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function InstagramIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-4xl",
        }}
      >
        <FaInstagram onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
