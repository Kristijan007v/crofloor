import React from "react";
import { IconContext } from "react-icons";
import { AiFillFileText } from "react-icons/ai";

interface Props {
  style?: string;
}

export default function FileIcon({ style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: `text-xl ${style}`,
        }}
      >
        <AiFillFileText />
      </IconContext.Provider>
    </>
  );
}
