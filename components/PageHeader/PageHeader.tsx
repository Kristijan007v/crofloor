import React from "react";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Tag from "../Tag/Tag";

interface Props {
  title: string;
  backgroundImage?: string;
  featuredImage?: string;
  alt: string;
  description: string;
  detailsAnchor: string;
  galleryAnchor: string;
}

export default function PageHeader({
  title,
  backgroundImage,
  featuredImage,
  alt,
  description,
  detailsAnchor,
  galleryAnchor,
}: Props) {
  return (
    <>
      <div className="relative h-screen w-full">
        <Image
          src={`${backgroundImage}`}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          priority={true}
        />
        <div className="relative h-full w-full bg-black/40">
          <Navigation />
          <div className="flex flex-col items-center justify-center space-y-6  p-6">
            <h1 className="h1 uppercase text-white">
              {title}
              {/* <span className="text-gray-800"> RICCO</span> */}
            </h1>
            <div className="relative h-36 w-4/5">
              <Image
                src={`${featuredImage}`}
                alt={alt}
                layout="fill"
                objectFit="cover"
                className="opacity-85 rounded-md"
                priority={true}
              />
            </div>
            <div className="absolute bottom-0 left-0 p-4">
              <Tag
                text="Gallery"
                onclick={() => {
                  window.location.href = `#${galleryAnchor}`;
                }}
              />
            </div>
            <div className="absolute bottom-0 right-0 p-4">
              <Tag
                text="Details"
                onclick={() => {
                  window.location.href = `#${detailsAnchor}`;
                }}
              />
            </div>
            <p className="paragraph rounded-md bg-primary-bg p-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
