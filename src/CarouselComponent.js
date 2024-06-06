import React from 'react';
import Slider from 'react-slick';

const CarouselComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <div style={{fontSize: '24px', color: 'black'}}>➡️</div>,
        prevArrow: <div style={{fontSize: '24px', color: 'black'}}>⬅️</div>
    };

    return (
        <Slider {...settings}>
            <div>
                <h1>HOW TO USE OTH?</h1>
                <a href="/tutorial"><p>Click here</p></a>
                <div className="hero-icon">😊</div>
            </div>
            <div>
                <h1>Another Slide</h1>
                <p>More content here</p>
            </div>
            {/* 你可以添加更多的幻灯片 */}
        </Slider>
    );
};

export default CarouselComponent;
