import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Gallery from "../../components/Gallery/Gallery";
import PageHeader from "../../components/PageHeader/PageHeader";
import Skeleton from "../../components/Skeleton/Skeleton";
import {
  getAllProductsWithSlug,
  getProductBySlug,
} from "../../lib/backend/api";
import nextI18nextConfig from "../../next-i18next.config";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import SocialShare from "../../components/SocialShare/SocialShare";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import FileIcon from "../../components/Icons/FileIcon";
import DownloadIcon from "../../components/Icons/DownloadIcon";

interface Props {
  product: any;
}

export default function MorreloRicco({ product }: Props) {
  const router = useRouter();

  const MAIN_DOMAIN = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

  const { t } = useTranslation("productPage");

  const [tab, setTab] = useState("hrast");

  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const gallery = product.parket.galerija.map((image: any) => {
    return {
      original: image.sourceUrl,
      thumbnail: image.sourceUrl,
      originalAlt: image.altText,
    };
  });

  return (
    <Skeleton
      title=""
      metaDescription=""
      navigation={false}
      metaTitle={"Crofloor"}
      metaShareDescription={`See this amazing product on ${MAIN_DOMAIN}`}
      metaImageURL={"/icons/icon-192x192.png"}
    >
      {router.isFallback ? (
        <p className="p-6 text-center">Loading product...</p>
      ) : (
        <>
          <PageHeader
            title={product.title}
            alt=""
            description={product.parket.opis}
            backgroundImage={product.parket.pozadinskaSlika?.sourceUrl}
            featuredImage={product.featuredImage?.node.sourceUrl}
          />

          {/* <div className="flex justify-center p-4">
            <div className="mb-6 flex justify-center space-x-4 text-lg font-medium">
              <button
                className={`${
                  tab === "hrast" ? "active__tab" : "tab__default"
                }`}
                onClick={() => {
                  setTab("hrast");
                }}
              >
                {t("content-section.tabs.description")}
              </button>
              <button
                className={`${
                  tab === "jasen" ? "active__tab" : "tab__default"
                }`}
                onClick={() => {
                  setTab("jasen");
                }}
              >
                {t("content-section.tabs.gallery")}
              </button>
              <button
                className={`${tab === "jela" ? "active__tab" : "tab__default"}`}
                onClick={() => {
                  setTab("jela");
                }}
              >
                {t("content-section.tabs.specifications")}
              </button>
            </div>
          </div> */}
          <p>{product.content}</p>

          {/* Product Gallery */}
          <h2 className="p-4 text-2xl font-semibold">
            {t("product-gallery.title")}
          </h2>
          <Gallery images={gallery} />

          {/* Product specifications */}
          <h2 className="p-4 text-2xl font-semibold">
            {t("product-certificates.title")}
          </h2>
          <div className="p-4">
            <div className="flex items-center justify-between rounded-xl bg-primary-bg p-3">
              <div className="flex items-center space-x-4">
                <FileIcon />
                <p>Product specifications</p>
              </div>
              <DownloadIcon />
            </div>
          </div>

          <SocialShare
            text={t("social-share.text")}
            url={`https://${MAIN_DOMAIN}/products/${product.slug}`}
            iconSize={"md"}
          />
        </>
      )}
    </Skeleton>
  );
}

export async function getStaticPaths() {
  const paths = await getAllProductsWithSlug();
  return {
    paths: paths.products.map((path: any) => ({
      params: {
        slug: path.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ locale, params }: any) {
  const { data } = (await getProductBySlug(params.slug)) || {};
  return {
    props: {
      product: data.data.product,
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
        "productPage",
      ])),
      nextI18nextConfig,
    },
  };
}
