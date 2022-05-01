const dropInLeft = {
  hidden: {
    x: "-100vw",
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
      duration: 0.8,
      type: "spring",
      damping: 40,
      stiffness: 250,
    },
  },
  exit: {
    x: -100,
    y: 0,
    scale: 1,
    rotate: 0,
  },
};

export default dropInLeft;
