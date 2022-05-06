import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import PostCard from "../components/PostCard/PostCard";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Skeleton from "../components/Skeleton/Skeleton";
import useLocale from "../hooks/useLocale";
import { getPosts } from "../lib/backend/api";
import nextI18NextConfig from "../next-i18next.config.js";
import formatDate from "../lib/utilities/formatDate";

interface Props {
  posts: any;
}

export default function Blog({ posts }: Props) {
  const { t } = useTranslation("blog");

  const locale = useLocale();

  const [showRecommended, setShowRecommended] = React.useState(false);
  const [showFeatured, setShowFeatured] = React.useState(false);

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
      {/* <div>
        <p>Search results:</p>
        <p>{search}</p>
      </div> */}
      <div
        className={`${
          showFeatured ? "bg-black text-white" : "bg-primary-bg text-black "
        } p-3 text-right font-medium`}
        onClick={toogleFeatured}
      >
        <p>{t("section.featured")}</p>
      </div>

      {showFeatured && (
        <ArticleCard
          sectionType={t("section.featured-article")}
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
        <p>{t("section.recommended")}</p>
      </div>

      {showRecommended && (
        <ArticleCard
          sectionType={t("section.recommended-article")}
          heading="Article heading"
          image="about.jpg"
          imageAlt="About picture"
          href="/articles/post"
        />
      )}

      {/* Latest articles */}
      <h3 className="pt-10 pl-6 pr-6 text-left text-xl font-semibold uppercase">
        {t("section.latest")}
      </h3>
      <div className="flex flex-col space-y-8 pr-6 pl-6 pt-6 pb-20">
        {posts.map((post: any) => (
          <PostCard
            key={post.id}
            heading={post.title}
            image={post.featuredImage.node.sourceUrl}
            href={`/articles/${post.slug}`}
            createdAt={formatDate(post.date)}
            author={post.author.node.name}
            tagName={post.tags.nodes.map((tag: any) => tag.name)}
          />
        ))}
      </div>
    </Skeleton>
  );
}

export async function getStaticProps({ locale }: any) {
  const { posts } = (await getPosts(3)) || [];

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
        "blog",
      ])),
      nextI18NextConfig,
    },
    revalidate: 60,
  };
}
