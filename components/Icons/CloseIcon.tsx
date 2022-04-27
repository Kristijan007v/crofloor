import React from "react";
import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";

export default function CloseIcon() {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "icon__default",
        }}
      >
        <MdClose />
      </IconContext.Provider>
    </>
  );
}
