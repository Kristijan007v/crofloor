import React from "react";
import { useRouter } from "next/router";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";

interface Props {
  children?: React.ReactNode;
  type?: "button" | "link";
  style?: string;
  ariaLabel?: string;
  icon?: "arrowLeft" | "arrowRight";
  color?: "special";
  href: string;
  newTab?: boolean;
  text?: string;
  locale?: boolean;
}

export default function ButtonLink({
  children,
  type,
  style,
  ariaLabel,
  icon,
  color,
  href,
  newTab,
  text,
  locale,
}: Props) {
  const router = useRouter();

  const localeLink = `${router.locale}/${href}`;

  const visitLink = () => {
    {
      newTab
        ? window.open(locale ? localeLink : href, "_blank")
        : (window.location.href = `${locale ? localeLink : href}`);
    }
  };
  return (
    <>
      {type === "button" ? (
        <button
          className={`btn__basic flex items-center justify-center ${
            color === "special"
              ? "bg-primary-yellow text-black"
              : "bg-black text-white"
          } ${style}`}
          onClick={visitLink}
          aria-label={ariaLabel}
        >
          {icon == "arrowLeft" ? <ArrowLeft /> : null}
          {text}
          {icon == "arrowRight" ? <ArrowRight /> : null}
        </button>
      ) : (
        <button className={`${style}`} onClick={visitLink}>
          {children}
        </button>
      )}
    </>
  );
}
