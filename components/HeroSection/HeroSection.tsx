import { useTranslation } from "next-i18next";
import Image from "next/image";
import React from "react";
import ButtonLink from "../ButtonLink/ButtonLink";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Navigation from "../Navigation/Navigation";

export default function HeroSection() {
  const { t } = useTranslation("heroSection");

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

          <div className="flex flex-col space-y-4 p-6">
            <h1 className="flex flex-col space-y-2 text-4xl font-semibold text-yellow-special">
              <span>Looks</span>
              <span>Expensive.</span>
            </h1>
            <h1 className="flex flex-col space-y-2 text-4xl font-semibold text-white">
              <span>Feels</span>
              <span>Expensive.</span>
            </h1>
            <p className="p__white pb-32">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ButtonLink
              text={t("button")}
              ariaLabel={t("button")}
              href="/products"
              icon="arrowRight"
              type="button"
              locale={true}
            />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
