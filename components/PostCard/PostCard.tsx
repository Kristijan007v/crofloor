import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useLocale from "../../hooks/useLocale";
import dropInLeft from "../../lib/animations/dropInLeft";
import CalendarIcon from "../Icons/CalendarIcon";
import LinkIcon from "../Icons/LinkIcon";
import ReadMore from "../ReadMore/ReadMore";
import Tag from "../Tag/Tag";

interface Props {
  heading: string;
  type?: "primary" | "secondary";
  image: string;
  href: string;
  author?: string;
  avatarURL?: string;
  createdAt?: string;
  tagName: string;
  alt: string;
}

export default function PostCard({
  heading,
  type,
  image,
  href,
  author,
  avatarURL,
  createdAt,
  tagName,
  alt,
}: Props) {
  const locale = useLocale();

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
      <div className="relative h-72 w-full rounded-xl border">
        <Image
          src={`${image}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`${image}`}
          className="rounded-tr-xl rounded-tl-xl"
          alt={alt}
        />
        <div className="relative h-72 w-full rounded-tr-xl rounded-tl-xl bg-black/40">
          <div className="absolute top-0 p-4">
            <Tag text={tagName} />
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <button
              className="flex items-center space-x-2"
              onClick={() => {
                window.location.href = `/${locale}/${href}`;
              }}
            >
              <span>{locale === "hr" ? "Pročitaj više" : "Read more"}</span>
              <LinkIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-4 pt-2 pb-10">
        <div className="ml-4 mr-4 flex flex-row-reverse flex-wrap justify-between">
          <span className="rounded-xl bg-primary-bg p-2 text-black">
            {locale === "hr" ? "Autor" : "Author"}: {author}
          </span>
          <div className="flex items-center space-x-2">
            <CalendarIcon />
            <p>{createdAt}</p>
          </div>
        </div>
        <Link href={`${href}`}>
          <a className="text-center text-xl font-semibold">{heading}</a>
        </Link>
        <ReadMore
          maxLength={100}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,enim."
          }
          style={"pl-4 pr-4"}
        />

        {/* <p className="pl-4 pr-4"></p> */}
      </div>
    </motion.div>
  );
}
