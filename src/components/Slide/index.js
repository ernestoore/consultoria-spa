import React from "react";
import Slider from "react-slick";
import slide4 from '../../images/slide4.jpg';
import slide2 from '../../images/slide2.jpg';
import slide3 from '../../images/slide3.jpg';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} className="slider">
        <div className="slider1">
          <img src={slide4} alt="slide 1"/>
        </div>
        <div className="slider2">
          <img src={slide2} alt="slide 3"/>
        </div>
        <div className="slider3" >
          <img src={slide3} alt="slide 2"/>
        </div>

      </Slider>
    );
  }
}

export default SimpleSlider;
