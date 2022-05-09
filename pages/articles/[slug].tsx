import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import CalendarIcon from "../../components/Icons/CalendarIcon";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Skeleton from "../../components/Skeleton/Skeleton";
import SocialShare from "../../components/SocialShare/SocialShare";
import { getAllPostsWithSlug, getPostBySlug } from "../../lib/backend/api";
import formatDate from "../../lib/utilities/formatDate";
import nextI18nextConfig from "../../next-i18next.config";

interface Props {
  post: any;
}

export default function Article({ post }: Props) {
  function createMarkup(content: any) {
    return { __html: `${content}` };
  }

  return (
    <Skeleton title="" metaDescription="" navigation={true}>
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
        url="https://crofloor.kristijan007v.vercel.app/articles/post"
        iconSize="lg"
      />
    </Skeleton>
  );
}
export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.posts.map((post: any) => `/articles/${post.slug}`) || [],
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
