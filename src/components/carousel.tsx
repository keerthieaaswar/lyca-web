import Image from "next/image";
import React from "react";

import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Carousel.module.css";

const images = [
  "https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2022/06/01065615/Uk_web.jpg",
  "https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2022/06/29091408/UK_Festive_banner_Validity_extension_web.webp",
  "https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2022/06/02062541/Auto-renewal-offer.webp",
];
const CarouselBar = () => {
  return (
    <div className={styles.box}>
      <Carousel
        autoPlay
        stopOnHover={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        interval={2000}
        transitionTime={1000}
        showThumbs={false}
      >
        {images.map((URL, index) => (
          <div className={styles.slide} key={index}>
            <Image alt="sample_file" src={URL} width={500} height={500} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselBar;
