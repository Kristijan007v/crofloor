import React from "react";
import Skeleton from "../components/Skeleton/Skeleton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import { useTranslation } from "next-i18next";
import Navigation from "../components/Navigation/Navigation";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
        "blog",
      ])),
      nextI18NextConfig,
    },
  };
}

export default function Blog() {
  const { t } = useTranslation("blog");
  return (
    <Skeleton title="" metaDescription="">
      <Navigation style="bg-black" />
      <ErrorBoundary moduleName="SectionHeader">
        <SectionHeader
          title={t("section-header.title")}
          image="blog.jpg"
          alt={t("section-header.image.alt")}
          description={t("section-header.description")}
          search={true}
          searchPlaceholder={t("section-header.search.placeholder")}
        />
      </ErrorBoundary>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        sapiente facilis qui ad perferendis ab eos dolorem, iste laudantium
        soluta earum repellendus blanditiis pariatur. Ipsa at dolores aperiam
        repudiandae placeat expedita, doloribus labore vero ipsam sed eum
        pariatur facilis. Voluptate praesentium inventore harum quis aut ex nam
        totam qui sint a repellendus eveniet quae quia consectetur optio
        provident, ab voluptas eligendi corrupti. A exercitationem ipsum
        laboriosam temporibus sunt. Deserunt quos blanditiis cumque? Molestiae,
        ullam nobis fuga inventore saepe ut explicabo beatae cupiditate
        provident eos natus similique corrupti expedita, quo ad libero
        doloremque doloribus quidem at dolor possimus! Distinctio, repellendus
        deserunt!
      </p>
    </Skeleton>
  );
}
