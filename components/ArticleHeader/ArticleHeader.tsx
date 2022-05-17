import Image from "next/image";
import useLocale from "../../hooks/useLocale";
import CalendarIcon from "../Icons/CalendarIcon";

interface Props {
  title: string;
  image?: string;
  imageURL?: string;
  avatarURL: string;
  alt: string;
  key?: number;
  author: string;
  date: string;
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
}: Props) {
  const locale = useLocale();

  return (
    <>
      <div className="relative h-48 w-full">
        <Image
          src={`${imageURL ? imageURL : `/images/${image}`}`}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          priority={true}
        />

        <div className="relative h-48 w-full bg-black/40">
          <h1 className="h1__white absolute p-4">{title}</h1>

          <div className="absolute bottom-0 flex items-center justify-center space-x-2 p-4">
            <CalendarIcon style="text-white" />
            <p className="font-medium text-white">{date}</p>
          </div>
          <div className="absolute bottom-0 right-0 flex items-center space-x-2 p-4 font-medium text-white">
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
            <span className="">{author}</span>
          </div>
        </div>
      </div>
    </>
  );
}
