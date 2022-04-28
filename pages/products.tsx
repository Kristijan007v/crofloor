import React from "react";
import Skeleton from "../components/Skeleton/Skeleton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
        "products",
      ])),
      nextI18NextConfig,
    },
  };
}

export default function Products() {
  const { t } = useTranslation("products");
  return (
    <Skeleton title="" metaDescription="">
      <SectionHeader
        title={t("section-header.title")}
        image="products.jpg"
        alt={t("section-header.image.alt")}
      />
    </Skeleton>
  );
}
