import ImageGallery from "react-image-gallery";

interface Props {
  images: any[];
}

const images = [
  {
    original: "/images/factory_1.jpg",
    thumbnail: "/images/factory_1.jpg",
  },
  {
    original: "/images/factory_2.jpg",
    thumbnail: "/images/factory_2.jpg",
  },
  {
    original: "/images/factory_3.jpg",
    thumbnail: "/images/factory_3.jpg",
  },
  {
    original: "/images/factory_5.jpg",
    thumbnail: "/images/factory_5.jpg",
  },
];

export default function Gallery() {
  return <ImageGallery items={images} />;
}
