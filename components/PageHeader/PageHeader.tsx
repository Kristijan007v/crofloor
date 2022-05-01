import React from "react";
import Image from "next/image";
import Navigation from "../Navigation/Navigation";

export default function PageHeader() {
  return (
    <>
      <div className="relative h-screen w-full">
        <Image
          src="/images/page-header.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          priority={true}
        />
        <div className="relative h-full w-full bg-black/40">
          <Navigation />
          <div className="flex flex-col items-center justify-center space-y-6  p-6">
            <h1 className="h1 uppercase text-white">
              MORELLO<span className="text-gray-800"> RICCO</span>
            </h1>
            <div className="relative h-36 w-4/5">
              <Image
                src="/images/morello-floor.jpg"
                alt="Hero image"
                layout="fill"
                objectFit="cover"
                className="opacity-85 rounded-md"
                priority={true}
              />
            </div>
            <p className="paragraph rounded-md bg-primary-bg p-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quas unde voluptatem a nihil ad tempora quis earum odio numquam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
