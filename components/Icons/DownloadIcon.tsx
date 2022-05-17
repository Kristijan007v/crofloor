import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineDownload } from "react-icons/ai";

interface Props {
  style?: string;
}

export default function DownloadIcon({ style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: `text-xl ${style}`,
        }}
      >
        <AiOutlineDownload />
      </IconContext.Provider>
    </>
  );
}
