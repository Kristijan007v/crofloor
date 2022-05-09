import Image from "next/image";
import CalendarIcon from "../Icons/CalendarIcon";
import SectionSearch from "../SectionSearch/SectionSearch";
import Textbox from "../Textbox/Textbox";

interface Props {
  title: string;
  image?: string;
  imageURL?: string;
  alt: string;
  key?: number;
}

export default function ArticleHeader({
  title,
  image,
  imageURL,
  alt,
  key,
}: Props) {
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
          <h1 className="h1__white absolute bottom-0 p-4">{title}</h1>

          {/* <div className="absolute bottom-0 flex items-center justify-center space-x-2 p-4">
            <CalendarIcon />
            <p className="font-medium text-white">20 May 2022</p>
          </div>
          <p className="absolute bottom-0 right-0 p-4 font-medium text-white">
            Author: admin
          </p> */}
        </div>
      </div>
    </>
  );
}
