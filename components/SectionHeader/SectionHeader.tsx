import Image from "next/image";
import SearchIcon from "../Icons/SearchIcon";
import SectionSearch from "../SectionSearch/SectionSearch";
import Textbox from "../Textbox/Textbox";

interface Props {
  title: string;
  image?: string;
  imageURL?: string;
  alt: string;
  key?: number;
  description?: string;
  search?: boolean;
  searchPlaceholder?: string;
  stickySearch?: boolean;
  onchange?: (e: any) => void;
  searchOnclick?: () => void;
}

export default function SectionHeader({
  title,
  image,
  imageURL,
  alt,
  key,
  description,
  search,
  searchPlaceholder,
  stickySearch,
  onchange,
  searchOnclick,
}: Props) {
  return (
    <>
      <div className="relative h-48 w-full md:h-60 lg:h-72 xl:h-80 2xl:h-96">
        <Image
          src={`${imageURL ? imageURL : `/images/${image}`}`}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          priority
        />

        <div className="relative h-48 w-full bg-black/40 md:h-60 lg:h-72 xl:h-80 2xl:h-96">
          <div className="flex space-x-4">
            <div className="absolute bottom-0 flex flex-col space-y-4 p-4  text-white">
              <h1 className="h1__responsive font-semibold">{title}</h1>
              {description && <Textbox>{description}</Textbox>}
            </div>
            {search && (
              <div className="absolute bottom-0 right-0 hidden p-4 md:block">
                <SearchIcon
                  style="text-white hover:cursor-pointer text-4xl md:text-5xl"
                  onclick={searchOnclick}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
