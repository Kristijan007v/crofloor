import React, { useRef, useState } from "react";
import { useDimensions } from "../../hooks/useDimensions";
import ArrowDown from "../Icons/ArrowDown";
import ArrowUp from "../Icons/ArrowUp";
import { motion, useCycle } from "framer-motion";

interface Props {
  question: string;
  answer: string;
}

export default function Faq({ question, answer }: Props) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const containerRef = useRef<HTMLDivElement>(null);

  const { height } = useDimensions(containerRef);

  /* const toogleAnswer = () => {
    setIsOpen(!isOpen);
  }; */

  const sidebar = {
    open: (height = 1000) => ({
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      variants={sidebar}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      layoutId={question}
      ref={containerRef}
      className="flex flex-col space-y-2"
    >
      <div
        className="flex items-center justify-between"
        onClick={() => toggleOpen()}
      >
        <p className="text-lg">{question}</p>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </div>

      {isOpen && (
        <motion.div className="rounded-2xl bg-primary-gray p-4">
          <p>{answer}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
