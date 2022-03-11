import React from "react";
import { Carousel } from "react-carousel-minimal";

const Caroussel = () => {
  const data = [
    {
      image: "/assets/im1.png",
    },
    {
      image: "/assets/im2.png",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    color: "rgb(109, 101, 101)",
    marginBottom: "200px",
    width: "300px",
    paddingLeft: "200px",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="Caroussel">
      <div style={{ textAlign: "center" }}>
        <div
        //   style={{
        //     padding: "0 20px",
        //   }}
        >
          <Carousel
            data={data}
            time={2000}
            width="100vw"
            height="500px"
            captionStyle={captionStyle}
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            // style={{
            //   textAlign: "center",
            //   width: "700px",
            //   height: "500px",
            // }}
            className="carrousel-dimension"
            style={{
              textAlign: "center",
              width: "50vw",
              height: "500px",
            }}
          />

        </div>
      </div>
    </div>
  );
};

export default Caroussel;
