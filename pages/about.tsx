import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Gallery from "../components/Gallery/Gallery";
import LocationContainer from "../components/LocationContainer/LocationContainer";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Skeleton from "../components/Skeleton/Skeleton";
import nextI18NextConfig from "../next-i18next.config.js";
import "react-image-gallery/styles/css/image-gallery.css";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
        "about",
      ])),
      nextI18NextConfig,
    },
  };
}

export default function About() {
  const { t } = useTranslation("about");

  return (
    <Skeleton title="" metaDescription="" navigation={true}>
      <ErrorBoundary moduleName="SectionHeader">
        <SectionHeader
          title={t("section-header.title")}
          image="about.jpg"
          alt={t("section-header.image.alt")}
          description={t("section-header.description")}
        />
      </ErrorBoundary>
      <div className="mt-4 flex flex-col space-y-4 bg-primary-bg p-6">
        <h2 className="text-xl font-semibold uppercase">
          {t("section.locations.heading")}
        </h2>
        <p className="paragraph">{t("section.locations.description")}</p>
        <div></div>
      </div>
      <LocationContainer
        image="zagreb-location.jpg"
        cityName="Zagreb"
        address={t("section.locations.tag")}
        href="https://goo.gl/maps/DyaoKQmL34nuvJ8B7"
        cityPosition="right"
      />
      <LocationContainer
        image="split-location.jpg"
        cityName="Split"
        address={t("section.locations.tag")}
        href="https://goo.gl/maps/DyaoKQmL34nuvJ8B7"
        tagPosition="right"
      />
      <LocationContainer
        image="varazdin-location.jpg"
        cityName="Varaždin"
        address={t("section.locations.tag")}
        href="https://goo.gl/maps/DyaoKQmL34nuvJ8B7"
        cityPosition="right"
      />
      <div className="flex flex-col space-y-2 bg-primary-yellow p-6">
        <h2 className="text-xl font-semibold uppercase">
          {t("section.our-motivation.heading")}
        </h2>
        <p className="paragraph">{t("section.our-motivation.description")}</p>
        <p className="font-semibold text-gray-600">
          {t("section.our-motivation.ceo")}
        </p>
      </div>
      <div className="flex flex-col space-y-2 bg-white p-6">
        <h2 className="text-xl font-semibold uppercase">
          {t("section.factory.heading")}
        </h2>
      </div>
      <Gallery />
      <div className="flex flex-col space-y-2 bg-white p-6">
        <h2 className="text-xl font-semibold uppercase">
          {t("section.certificate.heading")}
        </h2>
      </div>
    </Skeleton>
  );
}
