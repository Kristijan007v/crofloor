import React from "react";
import { IconContext } from "react-icons";
import { FaYoutube } from "react-icons/fa";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function YoutubeIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-4xl",
        }}
      >
        <FaYoutube onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
