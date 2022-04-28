import React from "react";
import CookieBanner from "../CookieBanner/CookieBanner";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import { Toaster } from "react-hot-toast";

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

      {/* Notification toaster */}
      <div>
        <Toaster />
      </div>
    </>
  );
};

export default Skeleton;
