import React from "react";
import ArrowUp from "../Icons/ArrowUp";

export default function GoUp() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <span
      className="absolute bottom-0 right-0 block bg-white md:hidden"
      onClick={scrollToTop}
    >
      <ArrowUp />
    </span>
  );
}
