import React from "react";
import "../../css/imageGallery/imageGallery.scss";
import { AutomotiveImages, TravelImages } from "./images";

const ImageGallery = ({ scrollPosition }) => {
  const mapImgs = (colNum, type) => {
    let iterator = 0;
    let returnArr = [];
    let currentPhotos = [];
    if (type === "automotive") {
      currentPhotos = AutomotiveImages;
    } else if (type === "travel") {
      currentPhotos = TravelImages;
    }

    currentPhotos.forEach((img, i) => {
      if (i === colNum || iterator === colNum) {
        returnArr.push(
          <ImgNextGen
            srcWebp={img.thumbWebp}
            fallback={img.thumbSrc}
            alt={img.alt}
            className="galleryImage"
            key={i}
            loading="lazy"
          />,
        );
      }
      if (iterator === 2) {
        iterator = 0;
      } else {
        iterator++;
      }
    });

    return returnArr.map((el) => {
      return el;
    });
  };

  const ImgNextGen = ({ srcWebp, fallback, alt, ...props }) => {
    return (
      <picture>
        <source srcSet={srcWebp} type="image/webp" />
        <source srcSet={fallback} type="image/jpeg" />
        <img src={fallback} alt={alt} {...props} />
      </picture>
    );
  };

  return (
    <div id="ImageGallery">
      <h2>Automotive</h2>
      <div className="box">
        <div className="col">{mapImgs(0, "automotive")}</div>
        <div className="col">{mapImgs(1, "automotive")}</div>
        <div className="col">{mapImgs(2, "automotive")}</div>
      </div>

      <h2>Travel</h2>
      <div className="box">
        <div className="col">{mapImgs(0, "travel")}</div>
        <div className="col">{mapImgs(1, "travel")}</div>
        <div className="col">{mapImgs(2, "travel")}</div>
      </div>
    </div>
  );
};

export default ImageGallery;
