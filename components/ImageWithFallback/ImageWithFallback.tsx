import React, { useState } from "react";
import Image from "next/image";

interface Props {
  style?: string;
  src: string;
  fallBackSrc: string;
  alt: string;
  props?: any;
}

const ImageWithFallback = ({ style, src, fallBackSrc, alt, props }: Props) => {
  const [imageError, setImageError] = useState(false);

  return (
    <Image
      className={`${style}`}
      src={imageError ? fallBackSrc : src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
      blurDataURL={`${src}`}
      onError={() => setImageError(true)}
    />
  );
};

export default ImageWithFallback;
