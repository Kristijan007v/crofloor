import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dropInLeft from "../../lib/animations/dropInLeft";

interface Props {
  heading: string;
  type: "primary" | "secondary";
  image: string;
}

export default function ProductCard({ heading, type, image }: Props) {
  return (
    <motion.div
      variants={dropInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col space-y-4 rounded-xl text-center shadow-md ${
        type === "primary" ? "bg-primary-yellow" : "bg-primary-bg"
      }`}
    >
      <div className="relative h-72 w-full">
        <Image
          src={`/images/${image}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`/images/${image}`}
          className="rounded-tr-xl rounded-tl-xl"
        />
      </div>
      <div className="flex flex-col space-y-4 pt-2 pb-10">
        <h2 className="text-xl font-semibold uppercase">{heading}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          enim.
        </p>
      </div>
    </motion.div>
  );
}
