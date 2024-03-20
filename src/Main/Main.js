import mainPhotoOne from "../assets/Main/right/2X6A3665_1.jpg";
import mainPhotoTwo from "../assets/Main/center/2X6A2841_1.jpg";
import mainPhotoThree from "../assets/Main/left/2X6A2797_1.jpg";
import mainPhotoFour from "../assets/Main/left/2X6A2908_1.jpg";
import mainPhotoFive from "../assets/Main/left/2X6A2929_1.jpg";
import mainPhotoSix from "../assets/Main/right/2X6A3023_1.jpg";
import mainPhotoSeven from "../assets/Main/left/2X6A3442_1.jpg";
import mainPhotoEight from "../assets/Main/left/2X6A3540_1.jpg";
import mainPhotoNine from "../assets/Main/left/2X6A3500_1.jpg";
import MyApplication from "../Main/MyApplication";
import MyBlog from "../Main/MyBlog";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

function Main() {

  return (
    <div className="main-container">
      <Carousel fade={true} controls={false} indicators={false} pause={false}>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoOne} className="d-block one" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoTwo} className="d-block two" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoThree} className="d-block three" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoFour} className="d-block four" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoFive} className="d-block five" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoSix} className="d-block six" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoSeven} className="d-block seven" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoEight} className="d-block eight" alt="photo"/>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img src={mainPhotoNine} className="d-block nine" alt="photo"/>
        </Carousel.Item>
      </Carousel>
        <MyApplication />
        <MyBlog />
    </div>
  );
}

export default Main;


