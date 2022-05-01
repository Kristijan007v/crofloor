import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Skeleton from "../../components/Skeleton/Skeleton";
import SocialShare from "../../components/SocialShare/SocialShare";
import nextI18nextConfig from "../../next-i18next.config";

export async function getStaticProps({ locale }: any) {
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

export default function Article() {
  return (
    <Skeleton title="" metaDescription="" navigation={true}>
      <SectionHeader
        title="Article heading"
        image="varazdin-location.jpg"
        alt="Article image"
      />

      {/* Article content */}
      <div className="bg-primary-yellow p-6">
        <p className="paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, at
          inventore ipsa porro facere incidunt sint quisquam cupiditate ab
          molestias natus voluptates amet! Eum cum, dolores temporibus
          voluptatum earum ipsum cumque veniam. Odit aspernatur cupiditate
          reiciendis odio tempore harum nesciunt perferendis incidunt optio rem
          voluptates quas quam nisi officiis animi, ea deserunt omnis. Facere
          laborum commodi animi, nisi dignissimos rem totam debitis expedita
          dolores suscipit sapiente hic minus distinctio architecto accusantium
          soluta at reiciendis impedit odit saepe quisquam. Molestiae rem
          distinctio eveniet sit quidem similique incidunt aliquam blanditiis
          neque aut! Eligendi eaque doloribus optio distinctio neque iste
          tempore ipsum atque?
        </p>
      </div>
      <SocialShare />
    </Skeleton>
  );
}
