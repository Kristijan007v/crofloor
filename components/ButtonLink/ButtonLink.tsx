import React from "react";
import useLocale from "../../hooks/useLocale";
import ArrowLeft from "../Icons/ArrowLeft";
import ArrowRight from "../Icons/ArrowRight";
import { motion } from "framer-motion";

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

  const visitLink = () => {
    {
      newTab
        ? window.open(locale ? `/${lang}/${href}` : href, "_blank")
        : (window.location.href = `${locale ? `/${lang}/${href}` : href}`);
    }
  };
  return (
    <>
      {type === "button" ? (
        <motion.button
          whileHover={{
            scale: 1.05,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          whileTap={{
            scale: 0.9,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          className={`btn-wide btn flex items-center justify-center rounded-full bg-black text-lg text-white`}
          onClick={visitLink}
          aria-label={ariaLabel}
        >
          <span>{icon == "arrowLeft" ? <ArrowLeft /> : null}</span>
          <span>{text}</span>
          <span>{icon == "arrowRight" ? <ArrowRight /> : null}</span>
        </motion.button>
      ) : (
        <button
          className={`${style}`}
          onClick={visitLink}
          aria-label={ariaLabel}
        >
          <span aria-hidden="true">{children}</span>
        </button>
      )}
    </>
  );
}
