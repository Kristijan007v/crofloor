import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Gallery from "../../../components/Gallery/Gallery";
import PageHeader from "../../../components/PageHeader/PageHeader";
import Skeleton from "../../../components/Skeleton/Skeleton";
import nextI18nextConfig from "../../../next-i18next.config";

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
export default function MorreloRicco() {
  const MAIN_DOMAIN = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

  return (
    <Skeleton
      title=""
      metaDescription=""
      navigation={false}
      metaTitle={"Crofloor"}
      metaShareDescription={`See this amazing product on ${MAIN_DOMAIN}`}
      metaImageURL={"/icons/icon-192x192.png"}
    >
      <PageHeader />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
        exercitationem dicta voluptatum deserunt, dolorum corporis velit
        cupiditate eligendi nostrum nisi delectus error quisquam ipsa autem
        numquam, consectetur unde dignissimos labore beatae perspiciatis dolor
        sit obcaecati hic totam! Amet dolorem similique quod, repudiandae, quam
        consequatur delectus facere illo, iste corrupti excepturi molestias
        velit earum voluptatem. Adipisci, maiores similique facere eligendi
        laboriosam architecto? Repudiandae deleniti inventore at animi aperiam
        mollitia, fugiat ratione sapiente culpa doloribus corrupti tempora rem
        placeat commodi dolorem. Ipsum delectus recusandae temporibus aliquam,
        dolores magnam at harum, molestias quos ex labore molestiae similique
        numquam reiciendis soluta quisquam? Ut, numquam!
      </p>

      <h2 className="p-4 text-2xl font-semibold">Product Gallery</h2>
      <Gallery images={images} />
      <h2 className="p-4 text-2xl font-semibold">Product Certificates</h2>
      <div className="p-6"></div>
    </Skeleton>
  );
}

export async function getStaticProps({ locale, params }: any) {
  return {
    props: {
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
