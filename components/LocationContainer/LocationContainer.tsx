import React from "react";
import Image from "next/image";
import Tag from "../Tag/Tag";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface Props {
  image: string;
  height?: string;
  address: string;
  cityName: string;
  cityPosition?: "left" | "right";
  tagPosition?: "left" | "right";
  href?: string;
}

export default function LocationContainer({
  image,
  height,
  address,
  cityName,
  cityPosition,
  tagPosition,
  href,
}: Props) {
  return (
    <ErrorBoundary moduleName="LocationContainer">
      <div
        className={`relative w-full ${
          height ? height : "h-48 md:h-60 lg:h-72 xl:h-80 2xl:h-96"
        }`}
      >
        <Image
          src={`/images/${image}`}
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          placeholder="blur"
          blurDataURL={`/images/${image}`}
          alt="Location City Image"
          priority
        />

        <div className="relative h-48 w-full bg-black/20 md:h-60 lg:h-72 xl:h-80 2xl:h-96">
          <div
            className={`absolute top-0 ${
              tagPosition === "right" ? "right-0" : "left-0"
            } p-4`}
          >
            <Tag
              text={address}
              icon={"location"}
              onclick={() => {
                window.location.href = `${href}`;
              }}
            />
          </div>
          <p
            className={`absolute bottom-0 ${
              cityPosition === "right" ? "right-0" : "left-0"
            } p-4 text-3xl font-semibold text-white`}
          >
            {cityName}
          </p>
        </div>
      </div>
    </ErrorBoundary>
  );
}
