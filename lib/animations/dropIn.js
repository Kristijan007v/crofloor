const dropInBottom = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      damping: 40,
      stiffness: 400,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      damping: 40,
      stiffness: 200,
    },
  },
};

export default dropInBottom;
