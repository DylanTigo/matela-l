import "../../css/main.scss";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/SliderImg/salon1.jpeg";
import img2 from "../../assets/SliderImg/salon2.jpg";
import img3 from "../../assets/SliderImg/salle-a-mage.jpg";
import img4 from "../../assets/SliderImg/bureau.jpg";

export function Slider() {
  return (
      <Carousel>
        <Carousel.Item interval={300000}>
          <img
            src={img1}
            alt="Salon avec chaise et sofa"
            className="d-block w-100 imgSlider"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src={img2}
            alt="Salon avec chaise et sofa"
            className="d-block w-100 imgSlider"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src={img3}
            alt="Salon avec chaise et sofa"
            className="d-block w-100 imgSlider"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            src={img4}
            alt="Salon avec chaise et sofa"
            className="d-block w-100 imgSlider"
          />
        </Carousel.Item>
      </Carousel>
  );
}
