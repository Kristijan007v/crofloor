import React from "react";

interface Props {
  text: string;
}

export default function Tag({ text }: Props) {
  return (
    <div className="rounded-full bg-primary-bg pt-2 pb-2 pr-6 pl-6 font-semibold">
      {text}
    </div>
  );
}
