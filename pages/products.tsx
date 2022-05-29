import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card/Card";
import Dropdown from "../components/Dropdown/Dropdown";
import DropdownItem from "../components/DropdownItem/DropdownItem";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import TagIcon from "../components/Icons/TagIcon";
import LinkDefault from "../components/LinkDefault/LinkDefault";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import SectionSearch from "../components/SectionSearch/SectionSearch";
import Skeleton from "../components/Skeleton/Skeleton";
import { getProducts } from "../lib/backend/api";
import nextI18NextConfig from "../next-i18next.config.js";

interface Props {
  parket: any;
  kategorija: "hrast" | "jasen" | "jela";
}

export default function Products({ parket, kategorija }: Props) {
  const { t } = useTranslation("products");

  const [searchTerm, setSearchTerm] = useState("");

  const [results, setResults] = useState(parket);

  const searchProducts = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    const result = parket.filter((product: any) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(result);
  };

  //Tab switching
  const [activeTab, setActiveTab] = useState("hrast");

  return (
    <Skeleton
      title="Products"
      metaDescription="Požgaj Grupa, the leading Croatian flooring manufacturer, presents its latest collection of parquet floors."
      navigation={true}
    >
      <ErrorBoundary moduleName="SectionHeader">
        <SectionHeader
          title={t("section-header.title")}
          image="products.jpg"
          alt={t("section-header.image.alt")}
          description={t("section-header.description")}
        />

        <div id="section-top" className="scroll-mt-32"></div>
        {/* Current products names displayed by choosen category */}
        <div className=" sticky top-0 z-20 border-b bg-white">
          <div className="hide-scrollbar flex space-x-2 overflow-x-auto whitespace-nowrap pt-4 pb-4 pr-2 pl-2 font-medium">
            {parket
              .filter((product: any) =>
                product.parket.kategorija
                  .toLowerCase()
                  .includes(`${activeTab}`.toLowerCase())
              )
              .map((product: any) => (
                <LinkDefault
                  key={product.id}
                  text={product.title}
                  href={`#${product.slug}`}
                  style="tab__special"
                />
              ))}
          </div>
        </div>
        {/* Fixed product navbar */}
        <div className="tab__responsive flex flex-wrap justify-center space-x-6 border-b bg-primary-yellow p-3 font-medium text-black">
          <button
            className={`${activeTab === "hrast" && "active__tab__special"}`}
            onClick={() => setActiveTab("hrast")}
          >
            Hrast
          </button>
          <button
            className={`${activeTab === "jasen" && "active__tab__special"}`}
            onClick={() => setActiveTab("jasen")}
          >
            Jasen
          </button>
          <button
            className={`${activeTab === "jela" && "active__tab__special"}`}
            onClick={() => setActiveTab("jela")}
          >
            Jela
          </button>
        </div>
      </ErrorBoundary>

      {parket.length > 0 && (
        <>
          {/* PRODUCTS */}
          <div className="m-auto mt-4 flex flex-col space-y-2 p-8 md:space-y-12 lg:w-5/6 2xl:w-4/6">
            {/* Hrast Products */}
            {parket
              .filter((product: any) =>
                product.parket.kategorija
                  .toLowerCase()
                  .includes(`${activeTab}`.toLowerCase())
              )
              .map((product: any, index: number) => (
                <Card
                  index={index}
                  key={product.id}
                  id={product.slug}
                  title={product.title}
                  imageURL={product.featuredImage.node.sourceUrl}
                  imageAlt={product.featuredImage.node.altText}
                  href={`products/${product.slug}`}
                  tagText={product.tags.nodes[0].name}
                  description={product.parket.opis}
                  showButton={true}
                />
              ))}

            <LinkDefault
              href="#section-top"
              style="flex justify-end"
              text={t("body.scroll-to-top")}
            />
          </div>
        </>
      )}
      <h3 className="h3__responsive pt-10 pl-6 pr-6 text-left font-semibold uppercase md:text-center">
        Lokacije trgovina
      </h3>
      <div className="m-auto flex flex-col md:mb-16 md:mt-8 md:flex-row md:space-x-6 lg:mb-16 lg:mt-6 lg:w-5/6 2xl:w-4/6">
        <div className="m-4 flex-grow rounded-2xl border border-black">
          <iframe
            title="Crofloor store locations"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2777.4923100866913!2d16.17125381574605!3d45.88146601352417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476676c82e1c57a5%3A0x16294928bda8e9b6!2sBOHOR%20d.o.o.!5e0!3m2!1sen!2shr!4v1651139897150!5m2!1sen!2shr"
            className="rounded-2xl"
            width={"100%"}
            height={"300"}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="m-6 flex flex-grow flex-col space-y-2 rounded-2xl">
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
      </div>
    </Skeleton>
  );
}

export async function getStaticProps({ locale }: any) {
  const { parket } = (await getProducts(10)) || [];
  return {
    props: {
      parket,
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
