import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useState } from "react";
import Card from "../components/Card/Card";
import Dropdown from "../components/Dropdown/Dropdown";
import DropdownItem from "../components/DropdownItem/DropdownItem";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import SearchIcon from "../components/Icons/SearchIcon";
import TagIcon from "../components/Icons/TagIcon";
import LinkDefault from "../components/LinkDefault/LinkDefault";
import Overlay from "../components/Overlay/Overlay";
import OverlayNew from "../components/OverlayNew/OverlayNew";
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

  const [showSearch, setShowSearch] = useState(false);

  const searchProducts = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    const result = parket.filter(
      (product: any) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.parket.kategorija
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
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
        {/* Fixed product navbar */}
        <div className="tab__responsive flex flex-wrap items-center justify-center space-x-4 bg-primary-yellow p-4 font-medium md:p-6">
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
        {/* Current products names displayed by choosen category */}
        <div className=" sticky top-0 z-20 flex items-center justify-between border-b bg-white">
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
          <div className="border-l border-gray-500 bg-white pr-3 pl-3">
            <button
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Search for articles"
              className="rounded-xl bg-black pt-2 pb-2 pr-2 pl-2 text-white shadow-lg md:rounded-xl md:pl-6 md:pr-6"
            >
              <span className="flex items-center space-x-2">
                <SearchIcon style="hover:cursor-pointer text-2xl" />
                <span className="hidden md:block">
                  {t("section-header.search.button-text")}
                </span>
              </span>
            </button>
          </div>
        </div>
      </ErrorBoundary>

      {parket.length > 0 && (
        <>
          {/* PRODUCTS */}
          <div className="m-auto mt-4 flex flex-col space-y-2 p-8 md:space-y-24 lg:w-5/6 xl:w-4/6 2xl:w-3/6">
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
                  imageURL={product.parket.naslovnaslika.sourceUrl}
                  imageAlt={product.parket.naslovnaslika.altText}
                  href={`products/${product.slug}`}
                  tagText={product.tags.nodes[0].name}
                  description={product.parket.opis}
                  showButton={true}
                />
              ))}

            <LinkDefault
              href="#section-top"
              style="flex justify-end h4__responsive"
              text={t("body.scroll-to-top")}
            />
          </div>
        </>
      )}
      <p className="h3__responsive pt-10 pl-6 pr-6 text-left font-semibold uppercase md:text-center">
        Lokacije trgovina
      </p>
      <div className="m-auto flex flex-col md:mb-16 md:mt-8 md:flex-row md:space-x-6 lg:mb-32 lg:mt-6 lg:w-5/6 2xl:w-4/6">
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

      {/* Search overlay */}
      <AnimatePresence exitBeforeEnter>
        {showSearch && (
          <OverlayNew
            closeOverlay={() => {
              setShowSearch(false);
            }}
          >
            {/* Search results */}
            <div className="sticky top-0 left-0 right-0 z-20 m-auto mt-6 w-full rounded-xl border-b bg-white md:mt-12 md:w-4/6 lg:w-3/6 xl:w-2/6">
              <div>
                <SectionSearch
                  searchHistory={searchTerm}
                  searchPlaceholder={t("section-header.search.placeholder")}
                  onchange={(e) => searchProducts(e.target.value)}
                />
                {searchTerm && (
                  <div className="flex max-h-56 flex-col space-y-4 rounded-xl bg-white pb-3 pr-6 pl-6 pt-2 text-left md:max-h-64 lg:max-h-72 xl:max-h-80 2xl:max-h-96">
                    {results.length > 0 ? (
                      <div className="hide-scrollbar  flex flex-col space-y-3 overflow-y-auto border-b border-gray-400 pb-6">
                        {results.map((product: any) => (
                          <Link
                            key={product.id}
                            href={`/products/${product.slug}`}
                          >
                            <div className="flex items-center justify-between rounded-xl bg-primary-bg font-medium shadow-sm hover:cursor-pointer">
                              <a className="ml-3">{product.title}</a>
                              <div className="flex items-center space-x-2 p-3">
                                <TagIcon />
                                <span>{product.parket.kategorija}</span>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <p className="rounded-xl bg-primary-bg p-3 text-center font-medium shadow-sm">
                        {t("section-header.search.noresult")}
                      </p>
                    )}
                    <button
                      className="rounded-xl p-3"
                      onClick={() => {
                        setShowSearch(false);
                      }}
                    >
                      {t("section-header.search.close-btn")}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </OverlayNew>
        )}
      </AnimatePresence>
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
