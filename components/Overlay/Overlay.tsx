import React, { useEffect } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { AnimatePresence, motion } from "framer-motion";

interface OverlayProps {
  children: React.ReactNode;
  onclick?: () => void;
  type?: "primary";
  close?: boolean;
}

export default function Overlay({ children, onclick, type }: OverlayProps) {
  //Animations
  const dropInBottom = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
    exit: {
      x: "100vh",
      opacity: 0,
    },
  };

  const dropInLeft = {
    hidden: {
      x: -100,
      y: 0,
      scale: 1,
      rotate: 0,
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
    exit: {
      x: -100,
      y: 0,
      scale: 1,
      rotate: 0,
    },
  };

  const dropInRight = {
    hidden: {
      x: 200,
      y: 0,
      scale: 1,
      rotate: 0,
    },
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        damping: 40,
        stiffness: 200,
      },
    },
    exit: {
      x: 100,
      y: 0,
      scale: 1,
      rotate: 0,
    },
  };

  const dropIn = {
    hidden: {
      y: "100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

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
