import { useTranslation } from "next-i18next";
import Head from "next/head";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { Toaster } from "react-hot-toast";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

interface SkeletonProps {
  children?: React.ReactNode;
  title: string;
  metaDescription?: string;
  metaTitle?: string;
  metaShareDescription?: string;
  metaImageURL?: string;
  navigation?: boolean;
}

const Skeleton = ({
  children,
  title,
  metaDescription,
  metaTitle,
  metaShareDescription,
  metaImageURL,
  navigation,
}: SkeletonProps) => {
  const { t } = useTranslation("cookieBanner");
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaShareDescription} />
        <meta property="og:image" content={metaImageURL} />
      </Head>

      {/* Navigation */}
      {navigation && <Navigation style="bg-black items-center" />}

      {/* Here goes the MAIN CONTENT */}
      <div>{children}</div>

      {/* Footer */}
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>

      {/* Cookies banner */}
      <ErrorBoundary>
        {/* <CookieBanner /> */}
        <CookieConsent
          flipButtons={true}
          overlay
          expires={90}
          acceptOnScroll={true}
          enableDeclineButton
          ariaAcceptLabel={t("aria-accept")}
          ariaDeclineLabel={t("aria-decline")}
          buttonText={t("button-accept")}
          declineButtonText={t("button-decline")}
          declineButtonStyle={{
            color: "#000",
            backgroundColor: "#fff",
            border: "dashed 2px black",
          }}
          style={{
            background: "#fff",
            color: "#000",
          }}
          buttonStyle={{
            color: "#fff",
            backgroundColor: "#000",
            border: "solid 2px black",
          }}
        >
          {t("description")}
        </CookieConsent>
      </ErrorBoundary>

      {/* Notification toaster */}
      <div>
        <Toaster
          toastOptions={{
            position: "top-center",
            style: {
              borderRadius: "10px",
              background: "rgb(0, 0, 0)",
              color: "#fff",
              border: "1px solid white",
            },
          }}
        />
      </div>
    </>
  );
};

export default Skeleton;
