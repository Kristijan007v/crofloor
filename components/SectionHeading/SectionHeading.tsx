import React from "react";

interface Props {
  heading: string;
}

export default function SectionHeading({ heading }: Props) {
  return (
    <div className=" bg-primary-yellow p-6 text-center md:p-8 md:text-left">
      <h1 className=" text-2xl font-semibold text-black">{heading}</h1>
    </div>
  );
}
