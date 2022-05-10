import React from "react";
import Image from "next/image";
import Tag from "../Tag/Tag";
import ButtonLink from "../ButtonLink/ButtonLink";
import ButtonDefault from "../Buttons/ButtonDefault";

export default function Card() {
  return (
    <div className="">
      <div className="relative h-72 w-full">
        <Image
          src={`/images/morello-floor.jpg`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`/images/morello-floor.jpg`}
          className="rounded-2xl"
          alt={"alt"}
        />
        <div className="absolute top-0 p-4">
          <Tag text="New collection" />
        </div>
      </div>
      <div className="flex -translate-y-8 flex-col space-y-4 rounded-2xl bg-primary-yellow/60 p-6 text-left backdrop-blur-md">
        <h3 className="heading__3">Morello Ricco</h3>
        <p className="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          fugit voluptatibus consequuntur totam saepe odio assumenda beatae
          mollitia voluptatum molestiae.
        </p>
        <ButtonDefault text="Find out more" ariaLabel="" />
      </div>
    </div>
  );
}
