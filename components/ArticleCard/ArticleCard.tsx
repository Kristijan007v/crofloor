import React from "react";
import Image from "next/image";
import ButtonDefault from "../Buttons/ButtonDefault";
import { motion } from "framer-motion";
import dropInLeft from "../../lib/animations/dropInLeft";

export default function ArticleCard() {
  return (
    <motion.article
      variants={dropInLeft}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col space-y-4 bg-primary-yellow p-6"
    >
      <h2 className="text-center text-lg font-semibold uppercase">
        FEATURED ARTICLES
      </h2>
      <div className="relative h-48 w-full">
        <Image
          src={`/images/about.jpg`}
          alt={"Ovo je test"}
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          priority={true}
        />
      </div>
      <h3 className="text-lg font-semibold">Here goes the heading</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore neque
        dolorem porro eveniet dolor consectetur, natus rerum aperiam! Ab, omnis?
      </p>
      <ButtonDefault text="Read more" ariaLabel="Read more" />
    </motion.article>
  );
}
