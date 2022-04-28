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
    x: "100vw",
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.6,
      type: "spring",
      damping: 40,
      stiffness: 200,
    },
  },
};

export default dropInRight;
