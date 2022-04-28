import React from "react";
import { IconContext } from "react-icons";
import { FaLinkedin } from "react-icons/fa";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function LinkedinIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-4xl",
        }}
      >
        <FaLinkedin onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
