import { ArrowDown, ArrowUp } from "@/assets/icons";
import { useEffect, useState } from "react";

import { combineClassNames } from "@/utils/common";
import { nanoid } from "nanoid";
import { IconButton } from "../common";
import "./ImageCarousel.scss";

type TOwnProps = {
  images: string[];
};

const ImageCarousel = (props: TOwnProps) => {
  const { images } = props;
  const [imageList, setImageList] = useState<
    {
      id: string;
      src: string;
      selected: boolean;
    }[]
  >([]);

  const selectedImage = imageList.find((img) => img.selected);

  const onSelectImage = (selectedImage: string) => {
    setImageList((prev) =>
      prev.map((img) => ({ ...img, selected: img.id === selectedImage }))
    );
  };

  const onNavigateImage = (isUp: boolean) => {
    // get current selected index
    const currentIndex = imageList.findIndex((e) => e.selected);

    const newList = imageList.map((img, index) => {
      let newSelectedIndex = currentIndex + (isUp ? -1 : +1);

      // Validate the new index is
      if (newSelectedIndex < 0) {
        newSelectedIndex = imageList.length - 1;
      }
      if (newSelectedIndex === imageList.length) {
        newSelectedIndex = 0;
      }

      if (index === newSelectedIndex) {
        return { ...img, selected: true };
      }
      return { ...img, selected: false };
    });

    setImageList(newList);
  };

  useEffect(() => {
    const newImageList = images.map((img, index) => ({
      src: img,
      selected: !index ? true : false,
      id: nanoid(),
    }));

    setImageList(newImageList);
  }, []);

  const renderImageList = () => {
    return imageList.map((img) => (
      <div
        key={img.id}
        className={combineClassNames(
          "image-swiper",
          `__image-wrapper image-swiper__image-wrapper${
            img.selected ? "--selected" : ""
          }`
        )}
        onClick={() => onSelectImage(img.id)}
      >
        <img
          src={img.src}
          alt={img.id}
          onError={(e) => {
            e.currentTarget.src = "images/no_image.png"; // Handle Error image fallback
          }}
        />
      </div>
    ));
  };

  return (
    <div className="carousel-wrapper">
      <div className="image-swiper">
        <IconButton onClick={() => onNavigateImage(true)}>
          <ArrowUp size={32} />
        </IconButton>
        <div className={"image-swiper__container"}>{renderImageList()}</div>
        <IconButton
          onClick={() => {
            onNavigateImage(false);
          }}
        >
          <ArrowDown size={32} />
        </IconButton>
      </div>
      <div className="carousel-image">
        <img
          src={selectedImage?.src}
          onError={(e) => {
            e.currentTarget.src = "images/no_image.png"; // Handle Error image fallback
          }}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
