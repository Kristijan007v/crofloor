import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useLocale from "../../hooks/useLocale";
import CalendarIcon from "../Icons/CalendarIcon";
import LinkIcon from "../Icons/LinkIcon";
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
  description: string;
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
  description,
}: Props) {
  const locale = useLocale();

  const animation = {
    initial: {
      scale: 0.8,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <motion.div
      variants={animation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`flex flex-col space-y-4 rounded-xl shadow-sm ${
        type === "primary"
          ? "bg-primary-yellow"
          : type === "secondary"
          ? "bg-primary-bg"
          : "bg-white"
      }`}
    >
      <div className="relative h-64 w-full rounded-xl">
        <Image
          src={`${image}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`${image}`}
          className="rounded-tr-xl rounded-tl-xl"
          alt={alt}
        />
        <div className="relative h-64 w-full rounded-tr-xl rounded-tl-xl bg-black/40">
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
          <div className="flex items-center">
            <span>
              <div className="relative h-7 w-7 rounded-full">
                <Image
                  src={`${avatarURL}`}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={`${avatarURL}`}
                  className="rounded-full"
                  alt={alt}
                />
              </div>
            </span>
            <span className="p-2 text-black">{author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarIcon />
            <p>{createdAt}</p>
          </div>
        </div>
        <Link href={`${href}`}>
          <a className="text-center text-xl font-semibold">{heading}</a>
        </Link>
        {/* <ReadMore maxLength={150} text={description} style={"pl-4 pr-4"} /> */}

        <p className="p__default pl-4 pr-4">{description}</p>
      </div>
    </motion.div>
  );
}
