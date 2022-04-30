import Image from "next/image";
import React from "react";
import SearchIcon from "../Icons/SearchIcon";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import SectionSearch from "../SectionSearch/SectionSearch";
import Textbox from "../Textbox/Textbox";

interface Props {
  title: string;
  image: string;
  alt: string;
  key?: number;
  description?: string;
  search?: boolean;
  searchPlaceholder?: string;
}

export default function SectionHeader({
  title,
  image,
  alt,
  key,
  description,
  search,
  searchPlaceholder,
}: Props) {
  return (
    <>
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

        <div className="relative h-48 w-full bg-black/40">
          <h1 className="h1__white absolute bottom-0 p-4">{title}</h1>
        </div>
      </div>
      {description && (
        <Textbox style="pt-6 pl-6 pr-6 pb-2">{description}</Textbox>
      )}
      {search && <SectionSearch searchPlaceholder={`${searchPlaceholder}`} />}
    </>
  );
}
