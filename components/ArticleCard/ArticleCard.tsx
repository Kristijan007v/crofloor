import React from "react";
import Image from "next/image";
import ButtonDefault from "../Buttons/ButtonDefault";
import { motion } from "framer-motion";
import dropInLeft from "../../lib/animations/dropInLeft";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import ButtonLink from "../ButtonLink/ButtonLink";
import { useRouter } from "next/router";

interface Props {
  sectionType: "recommended" | "featured";
  heading: string;
  href: string;
  image: string;
  imageAlt?: string;
}

export default function ArticleCard({
  sectionType,
  heading,
  href,
  image,
  imageAlt,
}: Props) {
  const router = useRouter();
  const locale = router.locale;
  return (
    <motion.article
      variants={dropInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col space-y-4 bg-primary-yellow p-6"
    >
      <h2 className="text-center text-lg font-semibold uppercase">
        {sectionType} ARTICLES
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
