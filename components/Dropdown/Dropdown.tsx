import React, { useState } from "react";
import ArrowDown from "../Icons/ArrowDown";
import ArrowUp from "../Icons/ArrowUp";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Dropdown({ children, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toogleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-lg">{title}</p>
        {isOpen ? (
          <ArrowUp onclick={toogleAnswer} />
        ) : (
          <ArrowDown onclick={toogleAnswer} />
        )}
      </div>

      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
}
