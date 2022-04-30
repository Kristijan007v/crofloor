import React from "react";

interface TextboxProps {
  children: React.ReactNode;
  style?: string;
}

export default function Textbox({ children, style }: TextboxProps) {
  return (
    <div className={`${style}`}>
      <p className="p__default">{children}</p>
    </div>
  );
}
