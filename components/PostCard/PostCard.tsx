import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dropInLeft from "../../lib/animations/dropInLeft";
import Link from "next/link";

interface Props {
  heading: string;
  type?: "primary" | "secondary";
  image: string;
}

export default function PostCard({ heading, type, image }: Props) {
  return (
    <motion.div
      variants={dropInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col space-y-4 rounded-xl text-center shadow-sm ${
        type === "primary"
          ? "bg-primary-yellow"
          : type === "secondary"
          ? "bg-primary-bg"
          : "bg-white"
      }`}
    >
      <div className="relative h-72 w-full">
        <Image
          src={`/images/${image}`}
          layout="fill"
          objectFit="cover"
          priority={true}
          placeholder="blur"
          blurDataURL={`/images/${image}`}
          className="rounded-tr-xl rounded-tl-xl"
        />
      </div>
      <div className="flex flex-col space-y-4 pt-2 pb-10">
        <Link href={`/products/hrast/${heading}`}>
          <a className="text-xl font-semibold">{heading}</a>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          enim.
        </p>
      </div>
    </motion.div>
  );
}
