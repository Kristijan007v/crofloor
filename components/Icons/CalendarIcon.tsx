import React from "react";
import { IconContext } from "react-icons";
import { MdCalendarToday } from "react-icons/md";

interface Props {
  onclick?: () => void;
  style?: string;
}

export default function CalendarIcon({ onclick, style }: Props) {
  return (
    <>
      <IconContext.Provider
        value={{
          className: `${style} text-xl`,
        }}
      >
        <MdCalendarToday onClick={onclick} />
      </IconContext.Provider>
    </>
  );
}
