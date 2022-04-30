import React from "react";
import { IconContext } from "react-icons";
import { AiFillMail } from "react-icons/ai";

interface Props {
  style?: string;
}

export default function MailIcon({ style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-2xl text-white",
        }}
      >
        <AiFillMail />
      </IconContext.Provider>
    </>
  );
}
