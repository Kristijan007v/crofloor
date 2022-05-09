import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import React from "react";
import CalendarIcon from "../../components/Icons/CalendarIcon";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Skeleton from "../../components/Skeleton/Skeleton";
import SocialShare from "../../components/SocialShare/SocialShare";
import { getAllPostsWithSlug, getPostBySlug } from "../../lib/backend/api";
import formatDate from "../../lib/utilities/formatDate";
import nextI18nextConfig from "../../next-i18next.config";
import ErrorPage from "next/error";

interface Props {
  post: any;
}

export default function Article({ post }: Props) {
  const router = useRouter();

  const MAIN_DOMAIN = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

  function createMarkup(content: any) {
    return { __html: `${content}` };
  }

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Skeleton title="" metaDescription="" navigation={true}>
      {router.isFallback ? (
        <p>Loading…</p>
      ) : (
        <>
          <SectionHeader
            title={post.title}
            imageURL={post.featuredImage?.node.sourceUrl}
            alt="Article image"
          />

          {/* Article content */}
          <div className="flex flex-col space-y-4 bg-primary-yellow p-6">
            <div className="flex justify-between">
              <div className="flex items-center justify-center space-x-4">
                <CalendarIcon />
                <p>{formatDate(post.date)}</p>
              </div>
              <p>Author: {post.author.node.name}</p>
            </div>
            <div dangerouslySetInnerHTML={createMarkup(`${post.content}`)} />
          </div>
          <SocialShare
            url={`https://${MAIN_DOMAIN}/articles/${post.slug}`}
            iconSize="lg"
          />
        </>
      )}
    </Skeleton>
  );
}
export async function getStaticPaths() {
  const paths = await getAllPostsWithSlug();
  return {
    paths: paths.posts.map((path: any) => ({
      params: {
        slug: path.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ locale, params }: any) {
  const { data } = (await getPostBySlug(params.slug)) || {};

  return {
    props: {
      post: data.data.post,
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
      ])),
      nextI18nextConfig,
    },
  };
}
