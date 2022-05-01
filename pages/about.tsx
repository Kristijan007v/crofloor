import React from "react";
import Skeleton from "../components/Skeleton/Skeleton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { useTranslation } from "next-i18next";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Image from "next/image";
import Tag from "../components/Tag/Tag";
import LocationContainer from "../components/LocationContainer/LocationContainer";

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
        <h2 className="text-xl font-semibold uppercase">LOCATIONS</h2>
        <p className="paragraph">
          We have offices in Zagreb, Varaždin, Rijeka and Split.
        </p>
        <div></div>
      </div>
      <LocationContainer
        image="zagreb-location.jpg"
        cityName="Zagreb"
        address="Lokacija"
        href="https://goo.gl/maps/DyaoKQmL34nuvJ8B7"
        cityPosition="right"
      />
      <LocationContainer
        image="split-location.jpg"
        cityName="Split"
        address="Lokacija"
        href="https://goo.gl/maps/DyaoKQmL34nuvJ8B7"
        tagPosition="right"
      />
      <LocationContainer
        image="varazdin-location.jpg"
        cityName="Varaždin"
        address="Lokacija"
        href="https://goo.gl/maps/DyaoKQmL34nuvJ8B7"
        cityPosition="right"
      />
      <div className="flex flex-col space-y-4 bg-primary-yellow p-6">
        <h2 className="text-xl font-semibold uppercase">OUR MOTIVATION</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          nobis optio consectetur debitis exercitationem obcaecati placeat animi
          repellat officiis laboriosam.
        </p>
        <p className="font-semibold text-gray-600">
          POŽGAJ GROUP CEO - Name Surname
        </p>
      </div>
      <div className="flex flex-col space-y-4 bg-white p-6">
        <h2 className="text-xl font-semibold uppercase">FACTORY</h2>
      </div>
      <div className="flex flex-col space-y-4 bg-white p-6">
        <h2 className="text-xl font-semibold uppercase">OUR CERTIFICATES</h2>
      </div>
    </Skeleton>
  );
}
