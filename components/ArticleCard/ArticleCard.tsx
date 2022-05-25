import { motion } from "framer-motion";
import Image from "next/image";
import useLocale from "../../hooks/useLocale";
import dropInLeft from "../../lib/animations/dropInLeft";
import ButtonLink from "../ButtonLink/ButtonLink";
import CalendarIcon from "../Icons/CalendarIcon";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";

interface Props {
  sectionType: string;
  heading: string;
  description: string;
  href: string;
  image?: string;
  imageArticle?: string;
  imageAlt?: string;
  avatarURL: string;
  type?: "primary" | "secondary";
  date: string;
  author: string;
}

export default function ArticleCard({
  sectionType,
  heading,
  description,
  href,
  image,
  imageArticle,
  imageAlt,
  avatarURL,
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
      className={`${
        type === "secondary"
          ? "bg-primary-bg"
          : "bg-primary-yellow pt-12 pb-12 md:pl-12 md:pr-12"
      }`}
    >
      <h2 className="h2__responsive text-center font-semibold uppercase">
        {sectionType}
      </h2>
      <div className="m-auto flex w-full flex-col space-y-4 p-6 md:w-5/6 md:flex-row md:items-center md:space-x-8 lg:w-4/6 2xl:w-3/6">
        <div className="relative h-56 w-full rounded-xl md:h-72 lg:h-80">
          <ImageWithFallback
            src={`${imageArticle ? imageArticle : "/images/" + image}`}
            fallBackSrc={`/images/image-error.jpg`}
            alt={`${imageAlt}`}
            style={"rounded-xl"}
          />
          <div className="relative h-56 w-full rounded-xl bg-black/40 md:h-72 lg:h-80">
            <div className="absolute bottom-0 flex items-center justify-center space-x-2 p-4">
              <CalendarIcon style="text-white" />
              <p className="font-medium text-white">{date}</p>
            </div>
            <div className="absolute bottom-0 right-0 flex flex-wrap items-center space-x-2 p-4 font-medium text-white">
              <span>
                <div className="relative h-7 w-7 rounded-full">
                  <Image
                    src={`${avatarURL}`}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={`${avatarURL}`}
                    className="rounded-full"
                    alt={""}
                  />
                </div>
              </span>
              <span>{author}</span>
            </div>
          </div>
        </div>
        <span className="flex flex-col space-y-4">
          <p className="h4__responsive font-semibold">{heading}</p>
          <p className="p__default">{description}</p>
          <ButtonLink
            text={locale === "hr" ? "Pročitaj više" : "Read more"}
            ariaLabel="Read more"
            href={href}
            type={"button"}
            icon={"arrowRight"}
          />
        </span>
      </div>
    </motion.article>
  );
}
