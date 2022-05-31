import Image from "next/image";
import useLocale from "../../hooks/useLocale";
import CalendarIcon from "../Icons/CalendarIcon";
import SocialShare from "../SocialShare/SocialShare";

interface Props {
  title: string;
  image?: string;
  imageURL?: string;
  avatarURL: string;
  alt: string;
  key?: number;
  author: string;
  date: string;
  url: string;
}

export default function ArticleHeader({
  title,
  image,
  imageURL,
  avatarURL,
  alt,
  key,
  author,
  date,
  url,
}: Props) {
  const locale = useLocale();

  return (
    <>
      <div className="relative h-56 w-full md:h-60 lg:h-72 xl:h-80 2xl:h-96">
        <Image
          src={`${imageURL ? imageURL : `/images/${image}`}`}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          priority
        />

        <div className="relative h-56 w-full bg-black/40 md:h-60 lg:h-72 xl:h-80 2xl:h-96">
          <div className="absolute bottom-0 flex w-full items-end justify-between">
            <h1 className="h1a__responsive p-4 font-semibold text-white ">
              {title}
            </h1>
            <div className="right-0 hidden md:block">
              <SocialShare
                text={`${
                  locale === "en" ? "Share the article" : "Podijeli članak"
                }`}
                iconSize="lg"
                url={`${url}`}
                bgColor="bg-transparent"
                style="text-white"
              />
            </div>
          </div>

          <div className="absolute top-0 right-0 flex items-center justify-center space-x-2 p-4">
            <CalendarIcon style="text-white" />
            <p className="p__responsive font-medium text-white">{date}</p>
          </div>
          <div className="absolute top-0 left-0 flex items-center space-x-2 p-4 font-medium text-white">
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
            <span className="p__responsive">{author}</span>
          </div>
        </div>
      </div>
    </>
  );
}
