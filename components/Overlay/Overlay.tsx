import React, { useState } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

interface OverlayProps {
  children: React.ReactNode;
  onclick?: () => void;
  type?: "primary";
  close?: boolean;
}

export default function Overlay({ children, onclick, type }: OverlayProps) {
  return (
    <>
      <ErrorBoundary>
        <div
          onClick={onclick}
          className={`${
            type === "primary" ? "overlay__primary" : "overlay__default"
          }`}
        >
          {children}
        </div>
      </ErrorBoundary>
    </>
  );
}
