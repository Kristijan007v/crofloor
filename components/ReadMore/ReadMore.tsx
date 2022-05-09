import React, { useState } from "react";

interface Props {
  maxLength: number;
  text: string;
  style?: string;
}

export default function ReadMore({ text, maxLength, style }: Props) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <>
      <p className={`p__default ${style}`}>
        {isReadMore ? text.slice(0, maxLength) : text}
        {isReadMore ? "..." : ""}
      </p>
    </>
  );
}
