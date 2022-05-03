import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import CookieBanner from "../CookieBanner/CookieBanner";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

interface SkeletonProps {
  children?: React.ReactNode;
  title: string;
  metaDescription?: string;
  navigation?: boolean;
}

const Skeleton = ({
  children,
  title,
  metaDescription,
  navigation,
}: SkeletonProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaDescription} />
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
        <CookieBanner />
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
              border: "0.5px solid white",
            },
          }}
        />
      </div>
    </>
  );
};

export default Skeleton;
