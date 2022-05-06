import type { NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import HeroSection from "../components/HeroSection/HeroSection";
import Skeleton from "../components/Skeleton/Skeleton";
import nextI18NextConfig from "../next-i18next.config.js";
import { useTranslation } from "next-i18next";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import Image from "next/image";
import ProductCard from "../components/ProductCard/ProductCard";
import { useState } from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import PostCard from "../components/PostCard/PostCard";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "home",
        "menu",
        "heroSection",
        "cookieBanner",
        "footer",
      ])),
      nextI18NextConfig,
    },
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation("common");

  const [tab, setTab] = useState("hrast");
  return (
    <Skeleton
      title={t("pages.homepage.title")}
      metaDescription={t("pages.homepage.meta-description")}
    >
      {/* HERO SECTIOn */}
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>

      {/* Product collection SECTION */}
      <div className="flex flex-col space-y-6 p-6">
        <h2 className="mt-8 text-2xl font-semibold">
          {t("product-collection.heading")}
        </h2>

        <div className="mb-6 flex justify-center space-x-4 text-lg font-medium">
          <p
            className={`${tab === "hrast" ? "active__tab" : "tab__default"}`}
            onClick={() => {
              setTab("hrast");
            }}
          >
            {t("product-collection.tabs.hrast")}
          </p>
          <p
            className={`${tab === "jasen" ? "active__tab" : "tab__default"}`}
            onClick={() => {
              setTab("jasen");
            }}
          >
            {t("product-collection.tabs.jasen")}
          </p>
          <p
            className={`${tab === "jela" ? "active__tab" : "tab__default"}`}
            onClick={() => {
              setTab("jela");
            }}
          >
            {t("product-collection.tabs.jela")}
          </p>
        </div>

        {/* Hrast SECTION */}
        {tab === "hrast" && (
          <div>
            <ProductCard
              type={"primary"}
              heading="Morello Ricco"
              image="morello-floor.jpg"
            />
          </div>
        )}

        {/* Jasen SECTION */}
        {tab === "jasen" && (
          <div>
            <ProductCard
              type={"primary"}
              heading="Jasen"
              image="castro-floor.jpg"
            />
          </div>
        )}

        {/* Jela SECTION */}
        {tab === "jela" && (
          <div>
            <ProductCard
              type={"primary"}
              heading="Jela"
              image="morello-floor.jpg"
            />
          </div>
        )}

        <ButtonDefault
          text={t("product-collection.button")}
          ariaLabel={t("product-collection.button")}
          icon="arrowRight"
          style=""
        />
      </div>

      {/* BLOG SECTION */}
      <h2 className="p-4 text-2xl font-semibold">{t("blog.heading")}</h2>
      {/* <h3 className="p-4 text-center text-xl font-semibold uppercase">
        FEATURED ARTICLE
      </h3> */}

      <div>
        <ArticleCard
          sectionType={"featured"}
          heading="Article heading"
          image="about.jpg"
          imageAlt="About picture"
          href="/articles/post"
        />
      </div>

      <h3 className="pt-10 pl-6 pr-6 text-left text-xl font-semibold uppercase">
        {t("blog.latest-articles")}
      </h3>

      <div className="p-6">
        <PostCard
          tagName="News"
          heading="Article heading"
          type="secondary"
          image="about.jpg"
          href="/articles/post"
        />
      </div>

      {/* About SECTION */}
      <div className="relative h-80 w-full">
        <Image
          src="/images/about-us.jpg"
          layout="fill"
          objectFit="cover"
          className="opacity-85"
          placeholder="blur"
          blurDataURL="/images/about-us.jpg"
        />
        <div className="absolute flex h-80 w-full flex-col space-y-2 bg-gray-500/60 p-6">
          <h2 className="text-2xl font-semibold text-yellow-special">
            {t("about-section.heading")}
          </h2>
          <p className="font-medium text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            assumenda sed, iste voluptates quo voluptatum, nulla sint maxime
            repellendus quia laboriosam! Cupiditate totam dolores eligendi ab
            ullam accusantium minima autem consectetur, molestiae ipsam culpa
            voluptatum?
          </p>
          <p className="font-bold text-yellow-special">
            Pozgaj Group CEO - Name Surname
          </p>
        </div>
      </div>
    </Skeleton>
  );
};

export default Home;
