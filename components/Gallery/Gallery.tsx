import ImageGallery from "react-image-gallery";

interface Props {
  images: any[];
}

export default function Gallery({ images }: Props) {
  return (
    <ImageGallery
      items={images}
      lazyLoad={true}
      onErrorImageURL={"/images/image-error.jpg"}
    />
  );
}
