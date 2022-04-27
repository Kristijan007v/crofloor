import React from "react";
import CookieBanner from "../CookieBanner/CookieBanner";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Navigation from "../Navigation/Navigation";

interface SkeletonProps {
  children?: React.ReactNode;
}

const Skeleton = ({ children }: SkeletonProps) => {
  return (
    <>
      <ErrorBoundary>
        <Navigation />
      </ErrorBoundary>

      <ErrorBoundary>
        <CookieBanner />
      </ErrorBoundary>
    </>
  );
};

export default Skeleton;
