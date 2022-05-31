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
    <div
      className={`ontap-remove space-y-2" flex max-h-48 cursor-pointer flex-col `}
    >
      <div
        className="flex items-center justify-between"
        onClick={() => toogle()}
      >
        <p
          className={`p__responsive ${
            isOpen ? "font-semibold" : "font-normal"
          }`}
        >
          {question}
        </p>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>

      {isOpen && (
        <div className="overflow-y-auto rounded-md bg-primary-gray p-4">
          <div className="">
            <p className="faq__responsive">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
