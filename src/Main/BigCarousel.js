import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { dataBigCarousel } from "./dataCarousel";


function BigCarousel() {
return(
    <div>
        <Carousel fade={true} controls={false} indicators={false} pause={false}>
         {dataBigCarousel.map((item) => {
            const {id, photo} = item;
            return (
            <Carousel.Item interval={4000} key={id}>
                <img
                className="d-none d-lg-block"
                src={photo}
                alt="photo"
                />
            </Carousel.Item>
            )
         })}
        </Carousel>
    </div>
)

}
export default BigCarousel;