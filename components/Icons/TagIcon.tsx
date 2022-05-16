import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineTags } from "react-icons/ai";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function TagIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: `${style} text-xl`,
        }}
      >
        <AiOutlineTags onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
