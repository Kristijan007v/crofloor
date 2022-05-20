import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import CalendarIcon from "../components/Icons/CalendarIcon";
import PostCard from "../components/PostCard/PostCard";
import SectionHeader from "../components/SectionHeader/SectionHeader";
import SectionSearch from "../components/SectionSearch/SectionSearch";
import Skeleton from "../components/Skeleton/Skeleton";
import { getPostByCategory, getPosts } from "../lib/backend/api";
import formatDate from "../lib/utilities/formatDate";
import nextI18NextConfig from "../next-i18next.config.js";

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
  };

  return (
    <Skeleton title="" metaDescription="" navigation={true}>
      <ErrorBoundary moduleName="SectionHeader">
        <SectionHeader
          title={t("section-header.title")}
          image="blog.jpg"
          alt={t("section-header.image.alt")}
          description={t("section-header.description")}
        />
      </ErrorBoundary>

      {/* Search results */}
      <div className="sticky top-0 z-20 border-b bg-white">
        <SectionSearch
          searchPlaceholder={t("section-header.search.placeholder")}
          onchange={(e) => searchBlog(e.target.value)}
        />
        <AnimatePresence exitBeforeEnter>
          {searchTerm && (
            <div className="flex flex-col space-y-4 pb-3 pr-6 pl-6 pt-2 text-left">
              {results.length > 0 ? (
                <motion.div
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4 },
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  className="flex flex-col space-y-4"
                >
                  {results.map((post) => (
                    <Link key={post.id} href={`/articles/${post.slug}`}>
                      <motion.div className="flex items-center justify-between rounded-lg bg-primary-bg p-3 shadow-sm">
                        <p className="font-medium">{post.title}</p>
                        <div className="flex items-center space-x-2">
                          <CalendarIcon />
                          <span>{formatDate(post.date)}</span>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </motion.div>
              ) : (
                <motion.p
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.4 },
                  }}
                  initial={{ opacity: 0, scale: 0.6 }}
                  layout
                  className="rounded-xl bg-primary-bg p-3 text-center font-medium shadow-sm"
                >
                  {t("section-header.search.noresult")}
                </motion.p>
              )}
              <button
                className="rounded-xl border-black p-3 hover:border"
                onClick={() => setSearchTerm("")}
              >
                {t("section-header.search.close-btn")}
              </button>
            </div>
          )}
        </AnimatePresence>
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
              key={featuredArticle.featuredPost[0].id}
              sectionType={t("section.featured-article")}
              heading={featuredArticle.featuredPost[0].title}
              description={featuredArticle.featuredPost[0].posts.opis}
              imageArticle={
                featuredArticle.featuredPost[0].featuredImage?.node.sourceUrl
              }
              avatarURL={featuredArticle.featuredPost[0].author.node.avatar.url}
              date={formatDate(featuredArticle.featuredPost[0].date)}
              author={featuredArticle.featuredPost[0].author.node.firstName}
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
              key={recommendedArticle.featuredPost[0].id}
              sectionType={t("section.recommended-article")}
              heading={recommendedArticle.featuredPost[0].title}
              description={recommendedArticle.featuredPost[0].posts.opis}
              imageArticle={
                recommendedArticle.featuredPost[0].featuredImage?.node.sourceUrl
              }
              avatarURL={
                recommendedArticle.featuredPost[0].author.node.avatar.url
              }
              date={formatDate(recommendedArticle.featuredPost[0].date)}
              author={recommendedArticle.featuredPost[0].author.node.firstName}
              imageAlt="About picture"
              href={`/articles/${recommendedArticle.featuredPost[0].slug}`}
            />
          )}
        </>
      )}

      {/* Latest articles */}
      {posts.length > 0 ? (
        <>
          <h3 className="pt-10 pl-6 pr-6 text-left text-xl font-semibold uppercase">
            {t("section.latest")}
          </h3>
          <div className="flex flex-col space-y-8 pr-6 pl-6 pt-6 pb-20">
            {posts.map((post: any) => (
              <PostCard
                type={"secondary"}
                key={post.id}
                heading={post.title}
                description={post.posts.opis}
                image={post.featuredImage?.node.sourceUrl}
                avatarURL={post.author.node.avatar.url}
                alt={post.featuredImage?.node.altText}
                href={`/articles/${post.slug}`}
                createdAt={formatDate(post.date)}
                author={post.author.node.firstName}
                tagName={post.tags.nodes.map((tag: any) => tag.name)}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h3 className="pt-10 pl-6 pr-6 text-center text-xl font-semibold uppercase">
            {t("section.latest-empty")}
          </h3>
        </>
      )}
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
