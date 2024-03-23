import mainPhotoOne from "../assets/Main/2X6A3665.jpg";
import mainPhotoTwo from "../assets/Main/2X6A2841.jpg";
import mainPhotoThree from "../assets/Main/2X6A2797.jpg";
import mainPhotoFour from "../assets/Main/2X6A2908.jpg";
import mainPhotoFive from "../assets/Main/2X6A2929.jpg";
import mainPhotoSix from "../assets/Main/2X6A3023.jpg";
import mainPhotoSeven from "../assets/Main/2X6A3442.jpg";
import mainPhotoEight from "../assets/Main/2X6A3540.jpg";
import mainPhotoNine from "../assets/Main/2X6A3500.jpg";

import mainPhotoOneMini from "../assets/Main/2X6A3665_mini.jpg";
import mainPhotoTwoMini from "../assets/Main/2X6A2841_mini.jpg";
import mainPhotoThreeMini from "../assets/Main/2X6A2797_mini.jpg";
import mainPhotoFourMini from "../assets/Main/2X6A2908_mini.jpg";
import mainPhotoFiveMini from "../assets/Main/2X6A2929_mini.jpg";
import mainPhotoSixMini from "../assets/Main/2X6A3023_mini.jpg";
import mainPhotoSevenMini from "../assets/Main/2X6A3442_mini.jpg";
import mainPhotoEightMini from "../assets/Main/2X6A3540_mini.jpg";
import mainPhotoNineMini from "../assets/Main/2X6A3500_mini.jpg";

import MyApplication from "../Main/MyApplication";
import MyBlog from "../Main/MyBlog";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {

  return (
    <div className="main-container">
      <Carousel fade={true} controls={false} indicators={false} pause={false}>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoOne} className="d-none d-lg-block" alt="photo"/>
          <img src={mainPhotoOneMini} className="d-lg-none" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoTwo} className="d-none d-lg-block" alt="photo"/>
          <img src={mainPhotoTwoMini} className="d-lg-none" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoThree} className="d-none d-lg-block" alt="photo"/>
          <img src={mainPhotoThreeMini} className="d-lg-none" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoFour} className="d-none d-lg-block" alt="photo"/>
          <img src={mainPhotoFourMini} className="d-lg-none" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoFive} className="d-none d-lg-block" alt="photo"/>
          <img src={mainPhotoFiveMini} className="d-lg-none" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoSix} className="d-none d-lg-block" alt="photo"/>
          <img src={mainPhotoSixMini} className="d-lg-none" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoSeven} className="d-none d-lg-block" alt="photo"/>
          <img src={mainPhotoSevenMini} className="d-lg-none" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoEight} className="d-none d-lg-block" alt="photo"/>
          <img src={mainPhotoEightMini} className="d-lg-none" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoNine} className="d-none d-lg-block" alt="photo"/>
          <img src={mainPhotoNineMini} className="d-lg-none" alt="photo"/>
        </Carousel.Item>
      </Carousel>
      <MyApplication />
      <MyBlog />
    </div>
  );
}

export default Main;


