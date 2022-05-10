import React from "react";
import useLocale from "../../hooks/useLocale";
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
  const lang = useLocale();

  const localeLink = `/${href}`;

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
              ? "border border-black bg-transparent text-black hover:bg-black hover:text-white"
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
