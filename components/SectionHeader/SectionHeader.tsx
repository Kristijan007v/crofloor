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
          <h1 className="h1__responsive absolute bottom-0 p-4 font-semibold text-white">
            {title}
          </h1>
          {search && (
            <div className="absolute bottom-0 right-0 p-4">
              <SearchIcon
                style="text-white hover:cursor-pointer text-4xl md:text-5xl"
                onclick={searchOnclick}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        {description && (
          <Textbox style="pt-6 pl-6 pr-6 pb-6">{description}</Textbox>
        )}
        {/* {search && (
          <SectionSearch
            searchPlaceholder={`${searchPlaceholder}`}
            sticky={stickySearch}
            onchange={onchange}
          />
        )} */}
      </div>
    </>
  );
}
