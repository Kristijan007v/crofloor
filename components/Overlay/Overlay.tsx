import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface OverlayProps {
  children: React.ReactNode;
  type: "default" | "primary";
  close?: boolean;
}

export default function Overlay({ children, type }: OverlayProps) {
  const [show, setshow] = useState(true);

  return (
    <>
      {show && (
        <ErrorBoundary>
          <div
            className={`${
              type == "primary" ? "overlay__primary" : "overlay_default"
            }`}
          >
            {children}
          </div>
        </ErrorBoundary>
      )}
    </>
  );
}
