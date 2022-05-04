import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
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
      <h3 className="pt-10 pl-6 pr-6 text-left text-xl font-semibold uppercase">
        Lokacije trgovina
      </h3>
      <div className="m-4 rounded-2xl border border-black">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.4923100866913!2d16.17125381574605!3d45.88146601352417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476676c82e1c57a5%3A0x16294928bda8e9b6!2sBOHOR%20d.o.o.!5e0!3m2!1sen!2shr!4v1651139897150!5m2!1sen!2shr"
          className="rounded-2xl"
          width={"100%"}
          height={"300"}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="p-6">
        <Dropdown title="Zagreb"></Dropdown>
      </div>
    </Skeleton>
  );
}
