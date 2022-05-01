import React from "react";
import { IconContext } from "react-icons";
import { BiLinkExternal } from "react-icons/bi";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function LinkIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-xl",
        }}
      >
        <BiLinkExternal onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
