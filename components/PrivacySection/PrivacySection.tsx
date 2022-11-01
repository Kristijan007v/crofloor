import React from "react";

interface Props {
  heading: string;
  text: string;
}

export default function PrivacySection({ heading, text }: Props) {
  return (
    <section className="flex flex-col space-y-3 text-left">
      <h2 className="h2__responsive font-semibold text-black">{heading}</h2>
      <p className="paragraph p__responsive text-justify">{text}</p>
    </section>
  );
}
