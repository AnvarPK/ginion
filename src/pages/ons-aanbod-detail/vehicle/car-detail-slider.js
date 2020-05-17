import React, { useState, useEffect, useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

const CarDetailSlider = ({ veh }) => {
    const [csldr1, setCsldr1] = useState(null),
        [csldr2, setCsldr2] = useState(null),
        slider_1 = useRef(null),
        slider_2 = useRef(null);
    useEffect(() => {
        setCsldr1(slider_1.current);
        setCsldr2(slider_2.current);
    }, [veh])

    var CSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
    };
    var NSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        centerMode: true,
        arrows: false,
        focusOnSelect: true
    };


    return (
        <div className="car-detail-slider">
            <div className="div-block-54">
                <Slider
                    {...CSettings}
                    className="car-detail-carousal"
                    ref={slider_1}
                    asNavFor={csldr2}
                >
                    {veh.images.map((slide, i) => (
                        <img src={slide} alt="" key={i} className="image-11 div-block-55" />
                    ))
                    }
                </Slider>
                <Slider
                    {...NSettings}
                    className="car-detail-carousal-nav"
                    asNavFor={csldr1}
                    ref={slider_2}
                >
                    {veh.images.map((slide, i) => (
                        <img src={slide} alt="" key={i} className="image-11 div-block-56" />
                    ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default CarDetailSlider;