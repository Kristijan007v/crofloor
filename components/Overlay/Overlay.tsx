import React, { useEffect } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { AnimatePresence, motion } from "framer-motion";
import dropInRight from "../../lib/animations/dropInRight";

interface OverlayProps {
  children: React.ReactNode;
  onclick?: () => void;
  type?: "primary";
  close?: boolean;
}

export default function Overlay({ children, onclick, type }: OverlayProps) {
  //Disable body scroll when overlay is open and enable when closed
  useEffect(() => {
    disableBodyScroll(document.body);

    return () => {
      enableBodyScroll(document.body);
    };
  }, []);

  return (
    <>
      <ErrorBoundary>
        {type === "primary" ? (
          <motion.div
            variants={dropInRight}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onclick}
            className="overlay__primary"
          >
            <div>{children}</div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0.9 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onclick}
            className={`${
              type === "primary" ? "overlay__primary" : "overlay__default"
            }`}
          >
            <AnimatePresence>
              <div>{children}</div>
            </AnimatePresence>
          </motion.div>
        )}
      </ErrorBoundary>
    </>
  );
}
