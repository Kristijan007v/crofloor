import React from "react";
import CookieBanner from "../CookieBanner/CookieBanner";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

interface SkeletonProps {
  children?: React.ReactNode;
}

const Skeleton = ({ children }: SkeletonProps) => {
  return (
    <>
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
    </>
  );
};

export default Skeleton;
