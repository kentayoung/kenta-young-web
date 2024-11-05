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
      <h2>Automotive Photography</h2>
      <h3 className="gallery-description">
        My love for photography spawned from my passion for cars. From just
        wanting to take pictures my friends cars to traveling across the US to
        shoot automotive events, it&apos;s been a fun journey. I&apos;m proud to
        have had my work featured in magazines and across the web.
      </h3>
      <div className="box">
        <div className="col">{mapImgs(0, "automotive")}</div>
        <div className="col">{mapImgs(1, "automotive")}</div>
        <div className="col">{mapImgs(2, "automotive")}</div>
      </div>

      <h2>Travel Photography</h2>
      <h3 className="gallery-description">
        I have had the opportunity to travel to many places around the world and
        have been able to capture a lot of interesting moments. These are some
        of my favorite photos from my travels.
      </h3>
      <div className="box">
        <div className="col">{mapImgs(0, "travel")}</div>
        <div className="col">{mapImgs(1, "travel")}</div>
        <div className="col">{mapImgs(2, "travel")}</div>
      </div>
    </div>
  );
};

export default ImageGallery;
