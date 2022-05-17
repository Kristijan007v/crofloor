import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineDownload } from "react-icons/ai";

interface Props {
  style?: string;
  onclick?: () => void;
}

export default function DownloadIcon({ style, onclick }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: `text-xl ${style}`,
        }}
      >
        <AiOutlineDownload onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
