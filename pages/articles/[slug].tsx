import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import ArticleHeader from "../../components/ArticleHeader/ArticleHeader";
import Skeleton from "../../components/Skeleton/Skeleton";
import SocialShare from "../../components/SocialShare/SocialShare";
import { getAllPostsWithSlug, getPostBySlug } from "../../lib/backend/api";
import formatDate from "../../lib/utilities/formatDate";
import nextI18nextConfig from "../../next-i18next.config";

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
    <Skeleton
      title={`${post?.title}`}
      metaDescription={`${post?.posts.opis}`}
      navigation={true}
      metaTitle={`${post?.title} - by ${post?.author.node.firstName}`}
      metaShareDescription={`Read this article on ${MAIN_DOMAIN}`}
      metaImageURL={`${post?.featuredImage.node.sourceUrl}`}
    >
      {router.isFallback ? (
        <p className="p-6 text-center">Loading article…</p>
      ) : (
        <>
          <ArticleHeader
            title={post.title}
            imageURL={post.featuredImage?.node.sourceUrl}
            avatarURL={post.author.node.avatar.url}
            alt={post.featuredImage?.node.altText}
            author={post.author.node.firstName}
            date={formatDate(post.date)}
            url={`https://${MAIN_DOMAIN}/articles/${post.slug}`}
          />

          {/* Article content */}
          <div className="md: flex flex-col space-y-4 bg-primary-yellow p-6 md:bg-white md:p-10">
            <div
              className="p__responsive m-auto w-full md:w-5/6 lg:w-4/6"
              dangerouslySetInnerHTML={createMarkup(`${post.content}`)}
            />
          </div>
          <SocialShare
            text="Podijeli članak"
            url={`https://${MAIN_DOMAIN}/articles/${post.slug}`}
            iconSize={"md"}
            style="block md:hidden"
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
