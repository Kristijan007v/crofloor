import React, { useState } from "react";
import ArrowDown from "../Icons/ArrowDown";

interface Props {
  question: string;
  answer: string;
}

export default function Faq({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toogleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-lg">{question}</p>
        <ArrowDown onclick={toogleAnswer} />
      </div>

      {isOpen && (
        <div className="rounded-2xl bg-primary-gray p-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
