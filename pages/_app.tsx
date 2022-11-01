import "../styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import Maintenance from "./maintenance";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import CookieConsent from "react-cookie-consent";
import Script from "next/script";
import { useEffect } from "react";
import process from "process";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation("cookieBanner");

  // for subsequent page visits
  useEffect(() => {
    if (checkConsented() === true) {
      (window as any).gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  }, []);

  function handleAccept() {
    (window as any).gtag("consent", "update", {
      ad_storage: "granted",
      analytics_storage: "granted",
    });
  }
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-SSKWFYDDEF`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
            gtag('js', new Date());
            gtag('config', 'G-SSKWFYDDEF', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      {/* Cookies banner */}
      <ErrorBoundary>
        {/* <CookieBanner /> */}
        <CookieConsent
          debug={true}
          onAccept={() => {
            handleAccept();
          }}
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
      <Component {...pageProps} />
    </>
  );
}

// function for checking whether visitor has consented before
function checkConsented() {
  //cookie is called CookieConsent
  if (document.cookie) {
    return document.cookie.includes("CookieConsent=true");
  }
  return false;
  //if cookie is not undefined, visitor has consented before
}

export default appWithTranslation(MyApp);
