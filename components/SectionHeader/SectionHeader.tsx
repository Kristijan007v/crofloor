import Image from "next/image";
import React from "react";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";

interface Props {
  title: string;
  image: string;
  alt: string;
  key?: number;
}

export default function SectionHeader({ title, image, alt, key }: Props) {
  return (
    <div className="relative h-48 w-full">
      <ImageWithFallback
        key={key}
        src={`/images/${image}`}
        fallbackSrc={`/images/image-error.jpg`}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className="opacity-85"
        priority={true}
      />

      <div className="relative h-full w-full bg-black/40">
        <h1 className="h1__white absolute bottom-0 p-4">{title}</h1>
      </div>
    </div>
  );
}
