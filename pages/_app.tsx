import { appWithTranslation, useTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation("cookieBanner");

  // for subsequent page visits
  useEffect(() => {
    console.log(checkConsented());
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

  function handleDecline() {
    (window as any).gtag("consent", "update", {
      ad_storage: "denied",
      analytics_storage: "denied",
    });
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
          onAccept={() => {
            handleAccept();
          }}
          onDecline={() => {
            handleDecline();
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

function checkConsented() {
  if (document.cookie) {
    if (document.cookie.includes("CookieConsent=true")) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

export default appWithTranslation(MyApp);
