import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import PDFViewer from "../components/PDFViewer/PDFViewer";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Skeleton from "../components/Skeleton/Skeleton";
import nextI18NextConfig from "../next-i18next.config.js";

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
    <Skeleton title="" metaDescription="" navigation={true}>
      <ErrorBoundary moduleName="SectionHeader">
        <SectionHeader
          title={t("section-header.title")}
          image="products.jpg"
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
