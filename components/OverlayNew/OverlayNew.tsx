import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  closeOverlay?: () => void;
  style?: string;
}

export default function OverlayNew({ children, closeOverlay, style }: Props) {
  //Disable body scroll when overlay is open and enable when closed
  useEffect(() => {
    disableBodyScroll(document.body);

    return () => {
      enableBodyScroll(document.body);
    };
  }, []);
  return (
    <div
      className="fixed top-0 bottom-0 right-0 left-0 z-30 bg-black/60 backdrop-blur-md"
      onClick={closeOverlay}
    >
      <motion.div
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.4 },
        }}
        initial={{ opacity: 0, scale: 0.6 }}
        exit={{ y: "-100vh", transition: { duration: 0.4 } }}
        className="z-40 m-2"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </div>
  );
}