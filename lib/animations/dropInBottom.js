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

export default dropInBottom;
