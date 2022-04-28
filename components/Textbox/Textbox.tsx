import React from "react";

interface TextboxProps {
  text: string;
}

export default function Textbox({ text }: TextboxProps) {
  return <div>{text}</div>;
}
