import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
}

export default function SectionHeader({ title, image }: Props) {
  return (
    <div className="relative h-48 w-full">
      <Image
        src={`/images/${image}`}
        alt="Hero image"
        layout="fill"
        objectFit="cover"
        className="opacity-85"
      />
      <div className="relative h-full w-full bg-black/40">
        <h1 className="h1__white absolute bottom-0 p-4">{title}</h1>
      </div>
    </div>
  );
}
