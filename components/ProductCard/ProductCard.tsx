import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  heading: string;
  type?: "primary" | "secondary";
  image: string;
}

export default function ProductCard({ heading, type, image }: Props) {
  const animation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={animation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`flex flex-col space-y-4 rounded-xl text-center shadow-sm ${
        type === "primary"
          ? "bg-primary-yellow"
          : type === "secondary"
          ? "bg-primary-bg"
          : "bg-white"
      }`}
    >
      <div className="relative h-72 w-full">
        <Image
          src={`/images/${image}`}
          layout="fill"
          objectFit="cover"
          priority={true}
          placeholder="blur"
          blurDataURL={`/images/${image}`}
          className="rounded-tr-xl rounded-tl-xl"
        />
      </div>
      <div className="flex flex-col space-y-4 pt-2 pb-10">
        <Link href={`/products/hrast/${heading}`}>
          <a className="text-xl font-semibold">{heading}</a>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          enim.
        </p>
      </div>
    </motion.div>
  );
}
