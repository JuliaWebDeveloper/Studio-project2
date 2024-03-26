import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { dataSmallCarousel } from "./dataCarousel";


function SmallCarousel() {
return(
    <div>
        <Carousel fade={true} controls={false} indicators={false} pause={false}>
         {dataSmallCarousel.map((item) => {
            const {id, photo} = item;
            return (            
            <Carousel.Item interval={4000} key={id}>
                <img
                className="d-lg-none"
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
export default SmallCarousel;