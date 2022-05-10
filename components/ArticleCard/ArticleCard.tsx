import { motion } from "framer-motion";
import React from "react";
import useLocale from "../../hooks/useLocale";
import dropInLeft from "../../lib/animations/dropInLeft";
import ButtonLink from "../ButtonLink/ButtonLink";
import CalendarIcon from "../Icons/CalendarIcon";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import ReadMore from "../ReadMore/ReadMore";

interface Props {
  sectionType: "recommended" | "featured";
  heading: string;
  href: string;
  image?: string;
  imageArticle?: string;
  imageAlt?: string;
  type?: "primary" | "secondary";
  date: string;
  author: string;
}

export default function ArticleCard({
  sectionType,
  heading,
  href,
  image,
  imageArticle,
  imageAlt,
  type,
  date,
  author,
}: Props) {
  const locale = useLocale();
  return (
    <motion.article
      variants={dropInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col space-y-4 p-6 ${
        type === "secondary" ? "bg-primary-bg" : "bg-primary-yellow "
      }`}
    >
      <h2 className="text-center text-lg font-semibold uppercase">
        {sectionType}
      </h2>
      <div className="relative h-48 w-full">
        <ImageWithFallback
          src={`${imageArticle ? imageArticle : "/images/" + image}`}
          fallBackSrc={`/images/image-error.jpg`}
          alt={`${imageAlt}`}
        />
        <div className="relative h-48 w-full bg-black/40">
          <div className="absolute bottom-0 flex items-center justify-center space-x-2 p-4">
            <CalendarIcon style="text-white" />
            <p className="font-medium text-white">{date}</p>
          </div>
          <p className="absolute bottom-0 right-0 p-4 font-medium text-white">
            {locale == "en" ? "Author" : "Autor"}: {author}
          </p>
        </div>
        {/* <Image
          src={`/images/about.jpg`}
          alt={"Ovo je test"}
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          priority={true}
        /> */}
      </div>
      <h3 className="text-lg font-semibold">{heading}</h3>
      <ReadMore
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque
        dolorem porro eveniet dolor consectetur, natus rerum aperiam! Ab, omnis?"
        maxLength={100}
      />
      <ButtonLink
        text={locale === "hr" ? "Pročitaj više" : "Read more"}
        ariaLabel="Read more"
        href={href}
        type={"button"}
        locale={true}
        icon={"arrowRight"}
      />
    </motion.article>
  );
}
