import React, { useState, Dispatch, SetStateAction } from "react";
import ArrowDown from "../Icons/ArrowDown";
import ArrowUp from "../Icons/ArrowUp";

interface Props {
  children: React.ReactNode;
  title: string;
  open?: boolean;
}

export default function Dropdown({ children, title, open }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toogleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div
        onClick={toogleAnswer}
        className={`flex items-center justify-between rounded-md pt-2 pb-2 pr-5 pl-4 ${
          isOpen && "bg-black font-semibold text-white"
        }`}
      >
        <p className="text-lg font-medium">{title}</p>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>

      {isOpen && <div className="flex flex-col space-y-4 p-2">{children}</div>}
    </div>
  );
}
