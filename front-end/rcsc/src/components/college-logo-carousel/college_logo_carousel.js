import React from "react";
import { Container } from "react-bootstrap";
import InfiniteCarousel from "react-leaf-carousel";
import "./college_logo_carousel.css";

// images
import CST from "../../images/college/CST.jpeg";
import RTC from "../../images/college/RTC.png";
import AMITY from "../../images/college/amity.png";
// import AUW from "../../images/college/auw-logo.png";
import CNR from "../../images/college/CNR.gif";
import GEDU from "../../images/college/Gedu.jpeg";
import KHESAR from "../../images/college/khesar.png";
import KIIT from "../../images/college/KIIT.png";
import LPU from "../../images/college/LPU.png";
import RANGSIT from "../../images/college/rangsit.jpeg";
import SAMTSE from "../../images/college/samtse.jpg";
import SHARDA from "../../images/college/sharda.png";
import SHERUBTSE from "../../images/college/sherubtse.png";
import SRM from "../../images/college/SRM.png";
import SYMBIOSIS from "../../images/college/symbiosis.jpeg";

function CollegeLogoCarousel() {
  return (
    <React.Fragment>
      <Container fluid={"true"} className={"logo-carousel-holder"}>
        <h6 className={"college-logo-tagline"}>
          {" "}
          Our users come from <b>different </b> colleges. Follwing are just a few!
        </h6>
        <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
              },
            },
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          sideSize={0.1}
          slidesToScroll={1}
          slidesToShow={6}
          scrollOnDevice={true}
        >
          {/* <div>
            <img alt='AUW' src={AUW} className={"college-logo"} />
          </div> */}
          <div>
            <img alt='CST' src={CST} className={"college-logo"} />
          </div>
          <div>
            <img alt='RTC' src={RTC} className={"college-logo"} />
          </div>
          <div>
            <img alt='AMITY' src={AMITY} className={"college-logo"} />
          </div>

          <div>
            <img alt='CNR' src={CNR} className={"college-logo"} />
          </div>
          <div>
            <img alt='GEDU' src={GEDU} className={"college-logo"} />
          </div>
          <div>
            <img alt='KHESAR' src={KHESAR} className={"college-logo"} />
          </div>
          <div>
            <img alt='KIIT' src={KIIT} className={"college-logo"} />
          </div>

          <div>
            <img alt='LPU' src={LPU} className={"college-logo"} />
          </div>
          <div>
            <img alt='RANGSIT' src={RANGSIT} className={"college-logo"} />
          </div>
          <div>
            <img alt='SAMTSE' src={SAMTSE} className={"college-logo"} />
          </div>
          <div>
            <img alt='SHARDA' src={SHARDA} className={"college-logo"} />
          </div>
          <div>
            <img alt='SHERUBTSE' src={SHERUBTSE} className={"college-logo"} />
          </div>
          <div>
            <img alt='SRM' src={SRM} className={"college-logo"} />
          </div>
          <div>
            <img alt='SYMBIOSIS' src={SYMBIOSIS} className={"college-logo"} />
          </div>
        </InfiniteCarousel>
      </Container>
    </React.Fragment>
  );
}

export default CollegeLogoCarousel;
