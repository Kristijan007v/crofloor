import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Dropdown from "../components/Dropdown/Dropdown";
import DropdownItem from "../components/DropdownItem/DropdownItem";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import ArrowDown from "../components/Icons/ArrowDown";
import ArrowUp from "../components/Icons/ArrowUp";
import ImageWithFallback from "../components/ImageWithFallback/ImageWithFallback";
import LinkDefault from "../components/LinkDefault/LinkDefault";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import SectionSearch from "../components/SectionSearch/SectionSearch";
import Skeleton from "../components/Skeleton/Skeleton";
import nextI18NextConfig from "../next-i18next.config.js";
import Image from "next/image";
import Card from "../components/Card/Card";

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
        {/* Fixed product navbar */}
        <div className="sticky top-0 left-0 right-0 z-20 flex flex-col border-t">
          {/* <SectionSearch searchPlaceholder="Search for products" /> */}
          <div className="flex justify-center space-x-6 border-b bg-primary-yellow p-3 text-xl font-medium text-black">
            <LinkDefault
              text="Hrast"
              href=""
              style="border-b-2 border-black font-semibold"
            />
            <LinkDefault text="Jasen" href="" />
            <LinkDefault text="Jela" href="" />
          </div>
          {/* <div className="flex flex-wrap justify-center space-x-6">
          <LinkDefault text="Morello Ricco" href="" />
          <LinkDefault text="Castro" href="" />
          <LinkDefault text="Morello Ottimo" href="" />
          <LinkDefault text="Morello Ottimo" href="" />
          <LinkDefault text="Morello Ottimo" href="" />
        </div> */}

          {/* <ArrowUp /> */}
        </div>
      </ErrorBoundary>
      <div className="p-6">
        <Card />
      </div>
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
      <div className="m-6 flex flex-col space-y-2 rounded-2xl">
        <Dropdown title="Zagreb" open={true}>
          <DropdownItem item="Varaždinska ul. 22, 10363, Belovar" />
          <DropdownItem item="bistrička ul. 7, 10360, Sesvete" />
        </Dropdown>
        <Dropdown title="Varaždin" open={false}>
          <DropdownItem item="Varaždinska ul. 22, 10363, Belovar" />
        </Dropdown>
        <Dropdown title="Split" open={false}>
          <DropdownItem item="Varaždinska ul. 22, 10363, Belovar" />
        </Dropdown>
      </div>
    </Skeleton>
  );
}
