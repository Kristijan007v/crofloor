import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import dropInLeft from "../../lib/animations/dropInLeft";
import Link from "next/link";
import Tag from "../Tag/Tag";
import CalendarIcon from "../Icons/CalendarIcon";
import ButtonDefault from "../Buttons/ButtonDefault";
import LinkIcon from "../Icons/LinkIcon";

interface Props {
  heading: string;
  type?: "primary" | "secondary";
  image: string;
  href: string;
}

export default function PostCard({ heading, type, image, href }: Props) {
  return (
    <motion.div
      variants={dropInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col space-y-4 rounded-xl shadow-sm ${
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
        <div className="relative h-72 w-full rounded-tr-xl rounded-tl-xl bg-black/40">
          <div className="absolute top-0 p-4">
            <Tag text="Donacija" />
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <button
              className="flex items-center space-x-2"
              onClick={() => {
                window.location.href = `${href}`;
              }}
            >
              <span>Read more</span>
              <LinkIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 pt-2 pb-10">
        <div className="ml-4 mr-4 flex flex-row-reverse flex-wrap justify-between">
          <p className="rounded-xl bg-black p-2 text-white">Author: Vedran</p>
          <div className="flex items-center space-x-2">
            <CalendarIcon />
            <p>24 May, 2022</p>
          </div>
        </div>
        <Link href={`/products/hrast/${heading}`}>
          <a className="text-center text-xl font-semibold">{heading}</a>
        </Link>
        <p className="pl-4 pr-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          enim.
        </p>
      </div>
    </motion.div>
  );
}
