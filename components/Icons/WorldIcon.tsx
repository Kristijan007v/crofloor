import React from "react";
import { IconContext } from "react-icons";
import { BiWorld } from "react-icons/bi";

export default function WorldIcon() {
  return (
    <>
      <IconContext.Provider
        value={{
          className: "text-2xl",
        }}
      >
        <BiWorld />
      </IconContext.Provider>
    </>
  );
}
