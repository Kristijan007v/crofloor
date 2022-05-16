import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import PostCard from "../components/PostCard/PostCard";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import Skeleton from "../components/Skeleton/Skeleton";
import { getPostByCategory, getPosts, getSearch } from "../lib/backend/api";
import formatDate from "../lib/utilities/formatDate";
import nextI18NextConfig from "../next-i18next.config.js";
import Link from "next/link";
import SectionSearch from "../components/SectionSearch/SectionSearch";
import Image from "next/image";
import CalendarIcon from "../components/Icons/CalendarIcon";

interface Props {
  posts: any;
  featuredArticle: any;
  recommendedArticle: any;
}

export default function Blog({
  posts,
  featuredArticle,
  recommendedArticle,
}: Props) {
  const { t } = useTranslation("blog");

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

  const [searchTerm, setSearchTerm] = React.useState("");

  const [results, setResults] = React.useState<any[]>([]);

  const searchBlog = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    const result = posts.filter((post: any) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(result);
    console.log(result);
  };

  return (
    <Skeleton title="" metaDescription="" navigation={true}>
      <ErrorBoundary moduleName="SectionHeader">
        <SectionHeader
          title={t("section-header.title")}
          image="blog.jpg"
          alt={t("section-header.image.alt")}
          description={t("section-header.description")}
          /* search={true}
          searchPlaceholder={t("section-header.search.placeholder")}
          stickySearch={true}
          onchange={(e) => searchBlog(e.target.value)} */
        />
      </ErrorBoundary>

      {/* Search results */}
      <div className="sticky top-0 z-20 bg-white">
        <SectionSearch
          searchPlaceholder="Search for articles"
          onchange={(e) => searchBlog(e.target.value)}
        />
        {searchTerm && (
          <>
            {results.length > 0 ? (
              <div className="flex flex-col space-y-2 border-b p-6 text-center">
                {results.map((post) => (
                  <div className="flex items-center rounded-md bg-primary-bg">
                    <div className="relative h-16 w-16">
                      <Image
                        src={`${post.featuredImage.node.sourceUrl}`}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={`${post.featuredImage.node.sourceUrl}`}
                        className="rounded-md"
                        alt={post.alt}
                      />
                    </div>
                    <div className="flex flex-col space-y-2 p-2">
                      <div className="flex items-center space-x-2">
                        <CalendarIcon />
                        <p>{formatDate(post.date)}</p>
                      </div>
                      <Link
                        key={post.key}
                        href={`/articles/${post.slug}`}
                        className=""
                      >
                        <a>{post.title}</a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="border-b p-6">
                <p className="tab__special">No results</p>
              </div>
            )}
          </>
        )}
      </div>

      {/* Featured ARTICLES */}
      {featuredArticle.featuredPost.length > 0 && (
        <>
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
              heading={featuredArticle.featuredPost[0].title}
              imageArticle={
                featuredArticle.featuredPost[0].featuredImage.node.sourceUrl
              }
              date={formatDate(featuredArticle.featuredPost[0].date)}
              author={featuredArticle.featuredPost[0].author.node.name}
              imageAlt="About picture"
              href={`/articles/${featuredArticle.featuredPost[0].slug}`}
              type={"secondary"}
            />
          )}
        </>
      )}

      {/* RECOMMENDED ARTICLES */}
      {recommendedArticle.featuredPost.length > 0 && (
        <>
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
              heading={recommendedArticle.featuredPost[0].title}
              imageArticle={
                recommendedArticle.featuredPost[0].featuredImage.node.sourceUrl
              }
              date={formatDate(recommendedArticle.featuredPost[0].date)}
              author={recommendedArticle.featuredPost[0].author.node.name}
              imageAlt="About picture"
              href={`/articles/${recommendedArticle.featuredPost[0].slug}`}
            />
          )}
        </>
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
            alt={post.featuredImage.node.altText}
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
  const { posts } = (await getPosts(10)) || [];
  const featuredArticle = (await getPostByCategory("Featured")) || [];
  const recommendedArticle = (await getPostByCategory("Recommended")) || [];

  return {
    props: {
      posts,
      featuredArticle,
      recommendedArticle,
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
