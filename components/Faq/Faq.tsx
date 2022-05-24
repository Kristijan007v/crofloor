import { useState } from "react";
import ArrowDown from "../Icons/ArrowDown";
import ArrowUp from "../Icons/ArrowUp";

interface Props {
  question: string;
  answer: string;
}

export default function Faq({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const toogle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex cursor-pointer flex-col space-y-2">
      <div
        className="flex items-center justify-between"
        onClick={() => toogle()}
      >
        <p className="p__responsive">{question}</p>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>

      {isOpen && (
        <div className="rounded-2xl bg-primary-gray p-4">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
