import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { useState } from "react";
import DownloadCard from "../../components/DownloadCard/DownloadCard";
import Gallery from "../../components/Gallery/Gallery";
import PageHeader from "../../components/PageHeader/PageHeader";
import Skeleton from "../../components/Skeleton/Skeleton";
import SocialShare from "../../components/SocialShare/SocialShare";
import useLocale from "../../hooks/useLocale";
import {
  getAllProductsWithSlug,
  getProductBySlug,
} from "../../lib/backend/api";
import nextI18nextConfig from "../../next-i18next.config";

interface Props {
  product: any;
}

export default function MorreloRicco({ product }: Props) {
  const router = useRouter();

  const lang = useLocale();

  const MAIN_DOMAIN = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

  const { t } = useTranslation("productPage");

  const [activeTab, setActiveTab] = useState("description");

  function createMarkup(content: any) {
    return { __html: `${content}` };
  }

  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const gallery = product?.parket.galerija.map((image: any) => {
    return {
      original: image.sourceUrl,
      thumbnail: image.sourceUrl,
      originalAlt: image.altText,
    };
  });

  return (
    <Skeleton
      title={`${product?.title} - ${product?.parket.kategorija}`}
      metaDescription={`${product?.parket.opis}`}
      navigation={false}
      metaTitle={`${product?.title} - ${product?.parket.kategorija}`}
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
            galleryAnchor={`gallery-${product.slug}`}
            detailsAnchor={product.id}
          />

          {/* Main content */}
          <div id={`${product.id}`} className=""></div>
          <div className="mt-4 pl-4 pt-4 pr-4">
            <div className="flex flex-wrap items-center justify-center space-x-4 text-xl font-medium text-black">
              <button
                className={`${
                  activeTab === "description" && "active__tab__special"
                }`}
                onClick={() => setActiveTab("description")}
              >
                {t("content-section.tabs.description")}
              </button>
              <button
                className={`${
                  activeTab === "specifications" && "active__tab__special"
                }`}
                onClick={() => setActiveTab("specifications")}
              >
                {t("content-section.tabs.specifications")}
              </button>
              <button
                className={`${
                  activeTab === "certificates " && "active__tab__special"
                }`}
                onClick={() => setActiveTab("certificates ")}
              >
                {t("content-section.tabs.certificates")}
              </button>
            </div>
          </div>

          {/* Description */}
          {activeTab === "description" && (
            <div className="flex justify-center pt-4 pb-6 pr-6 pl-6">
              <div
                className="p__default rounded-xl bg-primary-bg p-6"
                dangerouslySetInnerHTML={createMarkup(`${product.content}`)}
              />
            </div>
          )}

          {/* Product specifications */}
          {activeTab === "specifications" && (
            <>
              <div className="flex flex-col space-y-4 pt-4 pb-6 pr-6 pl-6">
                <p className="p__default">
                  {lang === "en"
                    ? "Download the product specifications in PDF format."
                    : "Preuzmite specifikacije proizvoda u PDF formatu."}
                </p>
                <DownloadCard
                  text={
                    lang === "en"
                      ? "Product specifications"
                      : "Specifikacije proizvoda"
                  }
                  downloadURL={`${product?.parket.specifikacije.mediaItemUrl}`}
                />
              </div>
            </>
          )}

          {/* Product certificates */}
          {activeTab === "certificates " && (
            <>
              <div className="flex flex-col space-y-4 pt-4 pb-6 pr-6 pl-6">
                <p className="p__default">
                  {lang === "en"
                    ? "See all the certificates our products have by downloading the PDF file."
                    : "Pogledajte koje sve certifikate naši proizvodi imaju preuzimanjem PDF datoteke."}
                </p>
                <DownloadCard
                  text={
                    lang === "en"
                      ? "Product certificates"
                      : "Certifikati proizvoda"
                  }
                  downloadURL={`${product?.parket.specifikacije.mediaItemUrl}`}
                />
              </div>
            </>
          )}

          {/* Product Gallery */}
          <div id={`gallery-${product.slug}`} className="scroll-mt-4"></div>
          <div className="mb-8 flex flex-col space-y-4 p-6">
            <h2 className="text-2xl font-semibold">
              {t("product-gallery.title")}
            </h2>
            <Gallery images={gallery} />
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
