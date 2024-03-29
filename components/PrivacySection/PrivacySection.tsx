import React from "react";

interface Props {
  id?: string;
  heading: string;
  text: string;
}

export default function PrivacySection({ heading, text, id }: Props) {
  return (
    <section className="flex flex-col space-y-3">
      <h2
        id={`#${id}`}
        className="h2__responsive text-left font-semibold text-black"
      >
        {heading}
      </h2>
      <p className="paragraph p__responsive text-justify">{text}</p>
    </section>
  );
}
