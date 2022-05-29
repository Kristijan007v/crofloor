import React from "react";
import { IconContext } from "react-icons";
import { MdSearch } from "react-icons/md";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function SearchIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: `${style ? style : "text-3xl"}`,
        }}
      >
        <MdSearch onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
