import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Navigation from "../Navigation/Navigation";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { t } = useTranslation("heroSection");

  const animation = {
    initial: {
      scale: 0.8,
    },
    animate: {
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
      },
    },
  };

  return (
    <ErrorBoundary moduleName="ButtonLink">
      <div className="relative h-screen w-full">
        <Image
          src="/images/hero-image.jpg"
          alt="Hero image"
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          priority
        />
        <div className="relative h-full w-full bg-black/40">
          <Navigation />

          <div className="m-auto flex w-full flex-col space-y-4 p-6 md:w-5/6 lg:w-4/6">
            <h1 className="flex flex-col space-y-2 text-4xl font-semibold text-yellow-special md:text-5xl lg:text-6xl xl:text-7xl">
              <span>Looks</span>
              <span>Expensive.</span>
            </h1>
            <h1 className="flex flex-col space-y-2 text-4xl font-semibold text-white md:text-5xl lg:text-6xl xl:text-7xl">
              <span>Feels</span>
              <span>Expensive.</span>
            </h1>
            <p className="p__responsive mb-36 text-white md:mb-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="absolute bottom-8 left-0 right-0 m-auto flex w-full justify-center p-8 sm:w-3/6 md:w-4/6 xl:w-3/6 2xl:w-2/6">
              <ButtonLink
                text={t("button")}
                ariaLabel={t("button")}
                href="/products"
                icon="arrowRight"
                type="button"
                style=""
                locale={true}
              />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
