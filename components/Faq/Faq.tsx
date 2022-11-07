import Link from "next/link";
import { useRouter } from "next/dist/client/router";
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

  const { locale } = useRouter();

  return (
    <div
      className={`ontap-remove space-y-2" prevent-select flex max-h-56 cursor-pointer flex-col`}
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
          {locale === "en" ? (
            <p className="faq__responsive">
              Answer to this question find{" "}
              <Link href="/faq">
                <a className="underline">here.</a>
              </Link>
            </p>
          ) : (
            <p className="faq__responsive">
              Odgovor na pitanje pronađite{" "}
              <Link href="/faq">
                <a className="underline">ovdje.</a>
              </Link>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
