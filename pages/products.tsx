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
    <Skeleton title="" metaDescription="" navigation={true}>
      <ErrorBoundary moduleName="SectionHeader">
        <SectionHeader
          title={t("section-header.title")}
          image="products.jpg"
          alt={t("section-header.image.alt")}
          description={t("section-header.description")}
        />

        {/* Search results */}
        <div className="sticky top-0 left-0 right-0 z-20 bg-white">
          <SectionSearch
            searchPlaceholder={t("section-header.search.placeholder")}
            onchange={(e) => searchProducts(e.target.value)}
          />
          {searchTerm && (
            <div className="flex flex-col space-y-2 border-b pb-6 pr-6 pl-6 pt-2 text-left">
              {results.length > 0 ? (
                <>
                  {results.map((product: any) => (
                    <Link key={product.id} href={`#${product.slug}`}>
                      <div className="flex items-center justify-between rounded-xl bg-primary-bg font-medium shadow-sm">
                        <a className="ml-3">{product.title}</a>
                        <div className="flex items-center space-x-2 p-3">
                          <TagIcon />
                          <span>{product.parket.kategorija}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </>
              ) : (
                <p className="rounded-xl bg-primary-bg p-3 text-center font-medium shadow-sm">
                  {t("section-header.search.noresult")}
                </p>
              )}
            </div>
          )}
        </div>

        <div id="section-top" className="scroll-mt-32"></div>
        {/* Fixed product navbar */}
        <div className="flex flex-col border-b">
          <div className="flex justify-center space-x-6 border-b bg-primary-yellow p-3 text-xl font-medium text-black">
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
          <div className="bg-white">
            <div className="hide-scrollbar flex space-x-2 overflow-x-auto whitespace-nowrap pt-3 pb-3 pr-2 pl-2 font-medium">
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
        </div>
      </ErrorBoundary>

      {/* PRODUCTS */}
      <div className="p-6">
        {/* Hrast Products */}

        {parket
          .filter((product: any) =>
            product.parket.kategorija
              .toLowerCase()
              .includes(`${activeTab}`.toLowerCase())
          )
          .map((product: any) => (
            <Card
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
