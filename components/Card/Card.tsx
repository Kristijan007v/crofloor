import Image from "next/image";
import ButtonLink from "../ButtonLink/ButtonLink";
import Tag from "../Tag/Tag";

interface Props {
  id?: string;
  key?: number;
  title: string;
  imageURL?: string;
  imageAlt?: string;
  description?: string;
  tagText?: string;
  href: string;
  showButton?: boolean;
}

export default function Card({
  id,
  key,
  title,
  imageURL,
  imageAlt,
  description,
  tagText,
  href,
  showButton,
}: Props) {
  return (
    <div key={key}>
      <div id={id} className="scroll-mt-32"></div>
      <div className="flex flex-col items-center justify-center md:flex-row">
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
        <div className="flex w-full -translate-y-8 -translate-x-0 flex-col space-y-4 rounded-2xl bg-primary-yellow/60 p-6 text-left backdrop-blur-md md:-translate-y-0 md:-translate-x-10">
          <h3 className="heading__3">{title}</h3>
          <p className="paragraph">{description}</p>
          {showButton && (
            <ButtonLink
              text="Find out more"
              ariaLabel=""
              icon={"arrowRight"}
              href={href}
              type={"button"}
              locale={true}
            />
          )}
        </div>
      </div>
    </div>
  );
}
