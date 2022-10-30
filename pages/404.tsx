import React from "react";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import Skeleton from "../components/Skeleton/Skeleton";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from "../next-i18next.config.js";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
        "Custom404",
      ])),
      nextI18NextConfig,
    },
  };
}

export default function Custom404() {
  const { t } = useTranslation("Custom404");

  return (
    <Skeleton title="404" navigation={true}>
      <div className="height__100vh__special m-6 flex flex-col items-center justify-center space-y-4 text-center">
        <p>
          <span className="text-8xl font-extrabold lg:text-9xl">4</span>
          <span className="text-8xl font-extrabold text-yellow-special lg:text-9xl">
            0
          </span>
          <span className="text-8xl  font-extrabold lg:text-9xl">4</span>
        </p>
        <p className="h2 h2__responsive">{t("title")}</p>
        <p className="paragraph p__responsive">{t("description")}</p>
        <ButtonDefault
          text={t("button")}
          ariaLabel={t("button")}
          onclick={() => (window.location.href = "/")}
          icon="arrowLeft"
        />
      </div>
    </Skeleton>
  );
}
