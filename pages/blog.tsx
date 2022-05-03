import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import PostCard from "../components/PostCard/PostCard";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Skeleton from "../components/Skeleton/Skeleton";
import useLocale from "../hooks/useLocale";
import nextI18NextConfig from "../next-i18next.config.js";

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

  const locale = useLocale();

  const [showRecommended, setShowRecommended] = React.useState(false);
  const [showFeatured, setShowFeatured] = React.useState(true);

  const toogleRecommended = () => {
    setShowRecommended(!showRecommended);
    setShowFeatured(false);
  };

  const toogleFeatured = () => {
    setShowFeatured(!showFeatured);
    setShowRecommended(false);
  };

  return (
    <Skeleton title="" metaDescription="" navigation={true}>
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
      <div
        className={`${
          showFeatured ? "bg-black text-white" : "bg-primary-bg text-black "
        } p-3 text-right font-medium`}
        onClick={toogleFeatured}
      >
        <p>Featured</p>
      </div>

      {showFeatured && (
        <ArticleCard
          sectionType={"featured"}
          heading="Article heading"
          image="about.jpg"
          imageAlt="About picture"
          href="/articles/post"
          type={"secondary"}
        />
      )}

      <div
        className={`${
          showRecommended
            ? "bg-black text-white"
            : "bg-primary-yellow text-black"
        } p-3 text-left font-medium`}
        onClick={toogleRecommended}
      >
        <p>Recommended</p>
      </div>

      {showRecommended && (
        <ArticleCard
          sectionType={"recommended"}
          heading="Article heading"
          image="about.jpg"
          imageAlt="About picture"
          href="/articles/post"
        />
      )}

      {/* Latest articles */}
      <h3 className="pt-10 pl-6 pr-6 text-left text-xl font-semibold uppercase">
        latest articles
      </h3>
      <div className="flex flex-col space-y-8 pr-6 pl-6 pt-6 pb-20">
        <PostCard
          heading="Article heading"
          type="secondary"
          image="about.jpg"
          href="/articles/post"
        />
        <PostCard
          heading="Article heading"
          type="secondary"
          image="factory_1.jpg"
          href="/articles/post"
        />
        <PostCard
          heading="Article heading"
          type="secondary"
          image="products.jpg"
          href="/articles/post"
        />
      </div>
    </Skeleton>
  );
}
