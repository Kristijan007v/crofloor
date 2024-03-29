import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";
import { useState } from "react";
import ArticleCard from "../components/ArticleCard/ArticleCard";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import Card from "../components/Card/Card";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import HeroSection from "../components/HeroSection/HeroSection";
import LinkDefault from "../components/LinkDefault/LinkDefault";
import PostCard from "../components/PostCard/PostCard";
import Skeleton from "../components/Skeleton/Skeleton";
import useLocale from "../hooks/useLocale";
import { getPostByCategory, getPosts, getProducts } from "../lib/backend/api";
import formatDate from "../lib/utilities/formatDate";
import nextI18NextConfig from "../next-i18next.config.js";

interface Props {
  posts: any;
  parket: any;
  featuredArticle: any;
}

const Home: NextPage<Props> = ({ posts, parket, featuredArticle }) => {
  const { t } = useTranslation("common");

  const [tab, setTab] = useState("hrast");

  const lang = useLocale();

  // console.log(parket);

  // parket.map((item: any) => {
  //   console.log(`Url od parketa je ${item.parket.naslovnaslika.sourceUrl}`);
  //   console.log(`Alt tekst od parketa je ${item.parket.naslovnaslikaaltText}`);
  // });

  return (
    <Skeleton
      title={t("pages.homepage.title")}
      metaDescription={t("pages.homepage.meta-description")}
    >
      {/* HERO SECTION */}
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>

      {/* Product collection SECTION */}
      <div className="flex flex-col space-y-6 p-6">
        <h2 className="h2s__responsive mt-8 text-left font-semibold md:text-center">
          {t("product-collection.heading")}
        </h2>

        <div className="tab__responsive mb-6 flex flex-wrap items-center justify-center space-x-4 font-medium">
          <button
            className={`${tab === "hrast" ? "active__tab" : "tab__default"}`}
            onClick={() => {
              setTab("hrast");
            }}
          >
            {t("product-collection.tabs.hrast")}
          </button>
          <button
            className={`${tab === "jasen" ? "active__tab" : "tab__default"}`}
            onClick={() => {
              setTab("jasen");
            }}
          >
            {t("product-collection.tabs.jasen")}
          </button>
          <button
            className={`${tab === "jela" ? "active__tab" : "tab__default"}`}
            onClick={() => {
              setTab("jela");
            }}
          >
            {t("product-collection.tabs.jela")}
          </button>
        </div>

        {/* Products SECTION */}
        {parket.length > 0 && (
          <div className="m-auto flex w-full flex-col space-y-2 md:space-y-24 lg:w-5/6 xl:w-4/6 2xl:w-3/6">
            {parket
              .filter((product: any) =>
                product.parket.kategorija
                  .toLowerCase()
                  .includes(`${tab}`.toLowerCase())
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
                />
              ))}
            <div className="m-auto flex w-full justify-center sm:w-3/6 md:w-4/6">
              <ButtonLink
                text={t("product-collection.button")}
                ariaLabel={t("product-collection.button")}
                icon="arrowRight"
                type="button"
                href="/products"
                locale={true}
              />
            </div>
          </div>
        )}
      </div>

      {/* BLOG SECTION */}
      {posts.length > 0 ? (
        <h2 className="h2s__responsive p-4 font-semibold">
          {t("blog.heading")}
        </h2>
      ) : (
        <div className="pb-24"></div>
      )}

      {/* Featured ARTICLES */}
      {featuredArticle.featuredPost.length > 0 && (
        <>
          <div className="">
            <ArticleCard
              sectionType={`${
                lang === "en" ? "featured article" : "istaknuti članak"
              }`}
              heading={featuredArticle.featuredPost[0].title}
              description={featuredArticle.featuredPost[0].posts.opis}
              imageArticle={
                featuredArticle.featuredPost[0].posts.naslovnaslika.sourceUrl
              }
              avatarURL={featuredArticle.featuredPost[0].author.node.avatar.url}
              date={formatDate(featuredArticle.featuredPost[0].date)}
              author={featuredArticle.featuredPost[0].author.node.firstName}
              imageAlt={`${featuredArticle.featuredPost[0].title}`}
              href={`/articles/${featuredArticle.featuredPost[0].slug}`}
            />
          </div>
        </>
      )}

      {/* ARTICLES SECTION */}
      {posts.length > 0 && (
        <div className="mt-4 mb-8 md:mb-28 md:mr-10 md:ml-10 md:mt-10">
          <h3 className="h3__responsive pt-10 pl-6 pr-6 text-left text-xl font-semibold uppercase">
            {t("blog.latest-articles")}
          </h3>
          <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {posts.map((post: any) => (
              <PostCard
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
                type={"secondary"}
              />
            ))}
            <LinkDefault
              href="/blog"
              text={t("blog.view-all")}
              style="flex justify-center items-center h4__responsive hover:border border-black p-3 rounded-xl bg-primary-bg"
            />
          </div>
        </div>
      )}

      {/* About SECTION */}
      <div className="relative h-80 w-full md:h-96">
        <Image
          src="/images/about-us.jpg"
          layout="fill"
          objectFit="cover"
          loading="lazy"
          className="opacity-85"
          alt="Team photo"
        />
        <div className="absolute flex h-80 w-full flex-col space-y-2 bg-gray-500/60 p-6 md:h-96">
          <div className="m-auto flex w-full flex-col space-y-4 overflow-y-auto md:w-5/6 lg:w-4/6 xl:w-3/6">
            <h2 className="h2__responsive font-semibold text-yellow-special">
              {t("about-section.heading")}
            </h2>
            <p className="p__responsive text-justify font-medium text-white">
              {t("about-section.description")}
            </p>
            <p className="p__responsive font-bold text-yellow-special">
              {t("about-section.ceo")}
            </p>
          </div>
        </div>
      </div>
    </Skeleton>
  );
};

export default Home;

export async function getStaticProps({ locale }: any) {
  const { posts } = (await getPosts(3)) || [];
  const { parket } = (await getProducts(100)) || [];
  const featuredArticle = (await getPostByCategory("Featured")) || [];

  return {
    props: {
      posts,
      featuredArticle,
      parket,
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
    revalidate: 60,
  };
}
