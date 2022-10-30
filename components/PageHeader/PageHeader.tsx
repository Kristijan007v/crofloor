import React from "react";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";
import Tag from "../Tag/Tag";
import useLocale from "../../hooks/useLocale";
import TagIcon from "../Icons/TagIcon";

interface Props {
  title: string;
  category: string;
  backgroundImage?: string;
  featuredImage?: string;
  alt: string;
  description: string;
  detailsAnchor: string;
  galleryAnchor: string;
}

export default function PageHeader({
  title,
  category,
  backgroundImage,
  featuredImage,
  alt,
  description,
  detailsAnchor,
  galleryAnchor,
}: Props) {
  const lang = useLocale();

  return (
    <>
      <div className="height__100vh relative w-full">
        <Image
          src={`${backgroundImage}`}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          priority
        />
        <div className="height__100vh relative w-full bg-black/40">
          <Navigation />
          <div className="m-auto w-full md:w-5/6 lg:w-4/6 xl:w-3/6">
            <div className="flex flex-col items-center justify-center space-y-4 p-6">
              <h1 className="h1 uppercase text-white">
                {title}
                {/* <span className="text-gray-800"> RICCO</span> */}
              </h1>

              <div className="lg:h-58 relative h-36 w-4/5 md:h-56 xl:h-60 2xl:h-64">
                <Image
                  src={`${featuredImage}`}
                  alt={alt}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-85 rounded-md"
                  priority
                />
                {/* <div className="absolute flex items-center space-x-2 p-4 text-xl font-medium text-white">
                  <span>{category}</span>
                  <TagIcon style="text-2xl" />
                </div> */}
              </div>

              <div className="absolute bottom-0 left-0 p-4 hover:cursor-pointer">
                <Tag
                  text={`${lang === "en" ? "Gallery" : "Galerija"}`}
                  onclick={() => {
                    window.location.href = `#${galleryAnchor}`;
                  }}
                />
              </div>
              <div className="absolute bottom-0 right-0 p-4 hover:cursor-pointer">
                <Tag
                  text={`${lang === "en" ? "Details" : "Detalji"}`}
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
      </div>
    </>
  );
}
