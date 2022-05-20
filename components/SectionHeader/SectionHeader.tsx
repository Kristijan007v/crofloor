import Image from "next/image";
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
          priority
        />

        <div className="relative h-48 w-full bg-black/40">
          <h1 className="h1__white absolute bottom-0 p-4">{title}</h1>
        </div>
      </div>
      {description && (
        <Textbox style="pt-6 pl-6 pr-6 pb-2">{description}</Textbox>
      )}
      {search && (
        <SectionSearch
          searchPlaceholder={`${searchPlaceholder}`}
          sticky={stickySearch}
          onchange={onchange}
        />
      )}
    </>
  );
}
