import Image from "next/image";
import ButtonLink from "../ButtonLink/ButtonLink";
import ButtonDefault from "../Buttons/ButtonDefault";
import Tag from "../Tag/Tag";

interface Props {
  key?: number;
  title: string;
  imageURL: string;
  imageAlt: string;
  description: string;
  tagText?: string;
  href: string;
}

export default function Card({
  key,
  title,
  imageURL,
  imageAlt,
  description,
  tagText,
  href,
}: Props) {
  return (
    <div className="" key={key}>
      <div className="relative h-72 w-full">
        <Image
          src={`${imageURL}`}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={`${imageURL}`}
          className="rounded-2xl"
          alt={imageAlt}
        />
        {tagText && (
          <div className="absolute top-0 p-4">
            <Tag text={tagText} />
          </div>
        )}
      </div>
      <div className="flex -translate-y-8 flex-col space-y-4 rounded-2xl bg-primary-yellow/60 p-6 text-left backdrop-blur-md">
        <h3 className="heading__3">{title}</h3>
        <p className="paragraph">{description}</p>
        <ButtonLink
          text="Find out more"
          ariaLabel=""
          icon={"arrowRight"}
          href={href}
          type={"button"}
          locale={true}
        />
      </div>
    </div>
  );
}
