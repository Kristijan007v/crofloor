import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Gallery from "../../components/Gallery/Gallery";
import PageHeader from "../../components/PageHeader/PageHeader";
import Skeleton from "../../components/Skeleton/Skeleton";
import {
  getAllProductsWithSlug,
  getProductBySlug,
} from "../../lib/backend/api";
import nextI18nextConfig from "../../next-i18next.config";

const images = [
  {
    original: "/images/factory_1.jpg",
    thumbnail: "/images/factory_1.jpg",
    originalAlt: "Factory",
  },
  {
    original: "/images/factory_2.jpg",
    thumbnail: "/images/factory_2.jpg",
    originalAlt: "Factory",
  },
  {
    original: "/images/factory_3.jpg",
    thumbnail: "/images/factory_3.jpg",
    originalAlt: "Factory",
  },
  {
    original: "/images/factory_5.jpg",
    thumbnail: "/images/factory_5.jpg",
    originalAlt: "Factory",
  },
];

interface Props {
  product: any;
}

export default function MorreloRicco({ product }: Props) {
  const MAIN_DOMAIN = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

  console.log(product);

  return (
    <Skeleton
      title=""
      metaDescription=""
      navigation={false}
      metaTitle={"Crofloor"}
      metaShareDescription={`See this amazing product on ${MAIN_DOMAIN}`}
      metaImageURL={"/icons/icon-192x192.png"}
    >
      <PageHeader
        title={product.title}
        alt=""
        description={product.parket.opis}
        backgroundImage={product.parket.pozadinskaSlika?.sourceUrl}
        featuredImage={product.featuredImage?.node.sourceUrl}
      />

      <p>{product.content}</p>

      <h2 className="p-4 text-2xl font-semibold">Product Gallery</h2>
      <Gallery images={images} />
      <h2 className="p-4 text-2xl font-semibold">Product Certificates</h2>
      <div className="p-6"></div>
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
  console.log(data);
  return {
    props: {
      product: data.data.product,
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
