import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import InfiniteCarousel from "react-leaf-carousel";

function CollegeLogoCarousel() {
  return (
    <React.Fragment>
      <Container fluid={"true"}>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              },
            },
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          <div>
            <img alt='' />
          </div>
        </InfiniteCarousel>
      </Container>
    </React.Fragment>
  );
}

export default CollegeLogoCarousel;
