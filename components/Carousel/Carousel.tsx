import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Carousel({ children }: Props) {
  return (
    <div className="relative m-auto block h-auto w-full content-center overflow-auto">
      <div className="relative flex w-full snap-x snap-mandatory space-x-8 overflow-x-auto">
        <div className="shrink-0 snap-center">
          <div className="w-4 shrink-0 sm:w-48"></div>
        </div>
        {children}
        <div className="shrink-0 snap-center">
          <div className="w-4 shrink-0 sm:w-48"></div>
        </div>
      </div>
    </div>
  );
}
