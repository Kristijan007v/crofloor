import React from "react";
import { IconContext } from "react-icons";
import { MdFacebook } from "react-icons/md";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function FacebookIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-4xl",
        }}
      >
        <MdFacebook onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
