"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { VerticalSliderSlides } from "@/src/shared/data/VerlicalSliderSlides";

import './VerticalSlide.scss'

const VerticalSlider = () => {
    const [progress, setProgress] = useState(0);
    const duration = 5000;
    const slides = VerticalSliderSlides

    return (
        <div className="vertical-slider">
            <Swiper 
                direction="vertical"
                modules={[Autoplay]}
                autoplay={{ delay: duration }}
                loop={true}
                className="vertical-slider__content hidden-mobile" 
                onSlideChange={(swiper) => {
                    const progressValue = ((swiper.realIndex + 1) / slides.length) * 100;
                    setProgress(progressValue);
                  }}          
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="vertical-slider__slide">
                        <div className="vertical-slider__slide-text">
                            <div className="vertical-slider__slide-heading">{slide.title}</div>
                            <h2 className="vertical-slider__slide-title">{slide.text}</h2>
                        </div>
                        <Image className="vertical-slider__slide-image" src={slide.img} alt="image" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper 
                modules={[Autoplay]}
                autoplay={{ delay: duration }}
                loop={true}
                className="vertical-slider__content visible-mobile" 
                onSlideChange={(swiper) => {
                    const progressValue = ((swiper.realIndex + 1) / slides.length) * 100;
                    setProgress(progressValue);
                  }}          
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index} className="vertical-slider__slide">
                        <div className="vertical-slider__slide-text">
                            <div className="vertical-slider__slide-heading">{slide.title}</div>
                            <h2 className="vertical-slider__slide-title">{slide.text}</h2>
                        </div>
                        <Image className="vertical-slider__slide-image" src={slide.img} alt="image" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="vertical-slider__progress-wrapper hidden-mobile">
                <span className="vertical-slider__progress-number">01</span>
                <div className="vertical-slider__progress-bar">
                    <div className="vertical-slider__toggle" style={{height: `${progress}%`}}></div>
                </div>
                <span className="vertical-slider__progress-number">05</span>
            </div>
            <div className="vertical-slider__progress-wrapper visible-mobile">
                <span className="vertical-slider__progress-number">01</span>
                <div className="vertical-slider__progress-bar">
                    <div className="vertical-slider__toggle" style={{width: `${progress}%`}}></div>
                </div>
                <span className="vertical-slider__progress-number">05</span>
            </div>
        </div>
    )
}

export default VerticalSlider