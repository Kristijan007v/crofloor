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
      <div className="m-6 flex h-screen flex-col items-center justify-center space-y-4 text-center">
        <p>
          <span className="text-8xl font-extrabold">4</span>
          <span className="text-8xl font-extrabold text-yellow-special">0</span>
          <span className="text-8xl font-extrabold">4</span>
        </p>
        <p className="h2">{t("title")}</p>
        <p className="paragraph">{t("description")}</p>
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
