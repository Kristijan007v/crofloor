import { AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import React from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import CalendarIcon from "../components/Icons/CalendarIcon";
import SearchIcon from "../components/Icons/SearchIcon";
import OverlayNew from "../components/OverlayNew/OverlayNew";
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

  const [showSearch, setShowSearch] = React.useState(false);

  const searchBlog = (searchTerm: string) => {
    setSearchTerm(searchTerm);

    const result = posts.filter(
      (post: any) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.posts.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(result);
  };

  return (
    <Skeleton
      title="Blog"
      metaDescription="See latest news about Požgaj Grupa company, products updates and our donations."
      navigation={true}
    >
      <ErrorBoundary moduleName="SectionHeader">
        <SectionHeader
          title={t("section-header.title")}
          image="blog.jpg"
          alt={t("section-header.image.alt")}
          description={t("section-header.description")}
          search={true}
          searchOnclick={() => setShowSearch(!showSearch)}
        />
      </ErrorBoundary>

      {/* Featured ARTICLES */}
      {featuredArticle.featuredPost.length > 0 && (
        <div className="block md:hidden">
          <div
            className={`${
              showFeatured ? "bg-black text-white" : "bg-primary-bg text-black "
            } p-3 text-right font-medium`}
            onClick={toogleFeatured}
          >
            <p className="p__responsive">{t("section.featured")}</p>
          </div>

          {showFeatured && (
            <ArticleCard
              key={featuredArticle.featuredPost[0].id}
              sectionType={t("section.featured-article")}
              heading={featuredArticle.featuredPost[0].title}
              description={featuredArticle.featuredPost[0].posts.opis}
              imageArticle={
                featuredArticle.featuredPost[0].posts.naslovnaslika.sourceUrl
              }
              avatarURL={featuredArticle.featuredPost[0].author.node.avatar.url}
              date={formatDate(featuredArticle.featuredPost[0].date)}
              author={featuredArticle.featuredPost[0].author.node.firstName}
              imageAlt={featuredArticle.featuredPost[0].title}
              href={`/articles/${featuredArticle.featuredPost[0].slug}`}
              type={"recommended"}
            />
          )}
        </div>
      )}

      {/* RECOMMENDED ARTICLES */}
      {recommendedArticle.featuredPost.length > 0 && (
        <div className="block md:hidden">
          <div
            className={`${
              showRecommended
                ? "bg-black text-white"
                : "bg-primary-yellow text-black"
            } p-3 text-left font-medium`}
            onClick={toogleRecommended}
          >
            <p className="p__responsive">{t("section.recommended")}</p>
          </div>

          {showRecommended && (
            <ArticleCard
              key={recommendedArticle.featuredPost[0].id}
              sectionType={t("section.recommended-article")}
              heading={recommendedArticle.featuredPost[0].title}
              description={recommendedArticle.featuredPost[0].posts.opis}
              imageArticle={
                recommendedArticle.featuredPost[0].posts.naslovnaslika.sourceUrl
              }
              avatarURL={
                recommendedArticle.featuredPost[0].author.node.avatar.url
              }
              date={formatDate(recommendedArticle.featuredPost[0].date)}
              author={recommendedArticle.featuredPost[0].author.node.firstName}
              imageAlt={recommendedArticle.featuredPost[0].title}
              href={`/articles/${recommendedArticle.featuredPost[0].slug}`}
            />
          )}
        </div>
      )}

      {/* Latest articles */}
      {posts.length > 0 ? (
        <>
          <div className="mt-6 flex w-full items-center justify-between border-b bg-white pt-3 pb-3 pl-6 pr-6 md:mt-14 md:pt-4 md:pb-4">
            <h2 className="h3__responsive text-xl font-semibold uppercase">
              {t("section.latest")}
            </h2>
            <button
              aria-label="Search for articles"
              className="rounded-xl bg-black pt-2 pb-2 pr-2 pl-2 text-white shadow-lg md:rounded-xl md:pl-6 md:pr-6"
              onClick={() => setShowSearch(!showSearch)}
            >
              <span className="flex items-center space-x-2">
                <SearchIcon style="hover:cursor-pointer text-2xl" />
                <span className="hidden md:block">
                  {t("section-header.search.button-text")}
                </span>
              </span>
            </button>
          </div>
          <div className="grid grid-cols-1 gap-8 p-6 pr-6 pl-6 pt-12 pb-32 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {posts.map((post: any) => (
              <PostCard
                type={"secondary"}
                key={post.id}
                heading={post.title}
                description={post.posts.opis}
                image={post.posts.naslovnaslika.sourceUrl}
                avatarURL={post.author.node.avatar.url}
                alt={`${post.title}`}
                href={`/articles/${post.slug}`}
                createdAt={formatDate(post.date)}
                author={post.author.node.firstName}
                tagName={post.tags.nodes.map((tag: any) => tag.name)}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="pb-96">
          <h3 className="h2__responsive pt-10 pl-6 pr-6 text-center font-medium">
            {t("section.latest-empty")}
          </h3>
        </div>
      )}

      <AnimatePresence mode="wait">
        {showSearch && (
          <>
            {/* Desktop search overlay */}
            <OverlayNew
              closeOverlay={() => {
                setShowSearch(false);
              }}
            >
              {/* Search results */}
              <div className="m-auto mt-6 w-full rounded-xl bg-white md:mt-12 md:w-4/6 lg:w-3/6 xl:w-2/6">
                <SectionSearch
                  searchPlaceholder={t("section-header.search.placeholder")}
                  onchange={(e) => searchBlog(e.target.value)}
                  searchHistory={searchTerm}
                />

                {searchTerm && (
                  <div className="flex max-h-56 flex-col space-y-4 pb-3 pr-6 pl-6 pt-2 text-left md:max-h-64 lg:max-h-72 xl:max-h-80 2xl:max-h-96">
                    {results.length > 0 ? (
                      <div className="hide-scrollbar flex flex-col space-y-3 overflow-y-auto border-b border-gray-400 pb-6">
                        {results.map((post) => (
                          <Link key={post.id} href={`/articles/${post.slug}`}>
                            <div className="flex items-center justify-between rounded-lg bg-primary-bg p-3 shadow-sm hover:cursor-pointer">
                              <p className="font-medium">{post.title}</p>
                              <div className="flex items-center space-x-2">
                                <CalendarIcon />
                                <span>{formatDate(post.date)}</span>
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
                      className="rounded-xl p-3 focus:outline-none"
                      onClick={() => setShowSearch(!showSearch)}
                    >
                      {t("section-header.search.close-btn")}
                    </button>
                  </div>
                )}
              </div>
            </OverlayNew>
          </>
        )}
      </AnimatePresence>

      {/* Fixed buttons */}
      {/* <button
        aria-label="Search for articles"
        className="fixed right-4 bottom-4 rounded-xl bg-black pt-2 pb-2 pr-2 pl-2 text-white shadow-lg md:rounded-xl md:pl-6 md:pr-6"
        onClick={() => setShowSearch(!showSearch)}
      >
        <span className="flex items-center space-x-2">
          <SearchIcon style="hover:cursor-pointer text-3xl" />
          <span className="hidden md:block">Search</span>
        </span>
      </button> */}
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
