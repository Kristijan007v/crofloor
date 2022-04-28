import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import CookieBanner from "../CookieBanner/CookieBanner";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";

interface SkeletonProps {
  children?: React.ReactNode;
  title: string;
  metaDescription?: string;
}

const Skeleton = ({ children, title, metaDescription }: SkeletonProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaDescription} />
      </Head>

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
        <Toaster />
      </div>
    </>
  );
};

export default Skeleton;
