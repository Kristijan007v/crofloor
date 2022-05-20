import Image from "next/image";
import useLocale from "../../hooks/useLocale";
import ButtonLink from "../ButtonLink/ButtonLink";
import CalendarIcon from "../Icons/CalendarIcon";
import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";

interface Props {
  sectionType: "recommended" | "featured";
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
    <article
      className={`flex flex-col space-y-4 p-6 ${
        type === "secondary" ? "bg-primary-bg" : "bg-primary-yellow "
      }`}
    >
      <h2 className="text-center text-lg font-semibold uppercase">
        {sectionType}
      </h2>
      <div className="relative h-56 w-full rounded-xl">
        <ImageWithFallback
          src={`${imageArticle ? imageArticle : "/images/" + image}`}
          fallBackSrc={`/images/image-error.jpg`}
          alt={`${imageAlt}`}
          style={"rounded-xl"}
        />
        <div className="relative h-56 w-full rounded-xl bg-black/40">
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
                  alt={""}
                />
              </div>
            </span>
            <span>{author}</span>
          </div>
        </div>
      </div>
      <h3 className="heading__3">{heading}</h3>
      <p className="p__default">{description}</p>
      <ButtonLink
        text={locale === "hr" ? "Pročitaj više" : "Read more"}
        ariaLabel="Read more"
        href={href}
        type={"button"}
        icon={"arrowRight"}
      />
    </article>
  );
}
