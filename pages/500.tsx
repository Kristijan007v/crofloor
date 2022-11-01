import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ButtonDefault from "../components/Buttons/ButtonDefault";
import Skeleton from "../components/Skeleton/Skeleton";
import nextI18NextConfig from "../next-i18next.config.js";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "menu",
        "cookieBanner",
        "footer",
        "Custom500",
      ])),
      nextI18NextConfig,
    },
  };
}

export default function Custom500() {
  const { t } = useTranslation("Custom500");

  return (
    <Skeleton title="404" navigation={true}>
      <div className="m-6 flex h-screen flex-col items-center justify-center space-y-4 text-center">
        <p>
          <span className="text-8xl font-extrabold lg:text-9xl">5</span>
          <span className="text-8xl font-extrabold text-yellow-special lg:text-9xl">
            0
          </span>
          <span className="text-8xl font-extrabold lg:text-9xl">0</span>
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
