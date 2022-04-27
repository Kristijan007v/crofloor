import React from "react";
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
    </>
  );
};

export default Skeleton;
