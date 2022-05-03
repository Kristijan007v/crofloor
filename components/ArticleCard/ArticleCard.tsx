import { motion } from "framer-motion";
import React from "react";
import useLocale from "../../hooks/useLocale";
import dropInLeft from "../../lib/animations/dropInLeft";
import ButtonLink from "../ButtonLink/ButtonLink";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";

interface Props {
  sectionType: "recommended" | "featured";
  heading: string;
  href: string;
  image: string;
  imageAlt?: string;
  type?: "primary" | "secondary";
}

export default function ArticleCard({
  sectionType,
  heading,
  href,
  image,
  imageAlt,
  type,
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
          src={`/images/${image}`}
          fallBackSrc={`/images/image-error.jpg`}
          alt={`${imageAlt}`}
        />
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque
        dolorem porro eveniet dolor consectetur, natus rerum aperiam! Ab, omnis?
      </p>
      <ButtonLink
        text={locale === "hr" ? "Pročitaj više" : "Read more"}
        ariaLabel="Read more"
        href={href}
        type={"button"}
        locale={true}
      />
    </motion.article>
  );
}
