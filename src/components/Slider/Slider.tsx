'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.scss'

import { Navigation } from 'swiper/modules';
import { ArrowIcon, ArrowRightUpIcon } from '../UI/svg';
import { Reviews } from '@/src/shared/data/Reviews';
import Image from 'next/image';
import Link from 'next/link';
import ButtonLink from '@/src/shared/data/mainPageText';

const Slider = () => {
    return (
        <div className='slider__wrapper'>
            <div className='slider__heading'>
                <h3 className='slider__heading-title'>Reviews our users</h3>
                <div className='slider__buttons hidden-mobile'>
                    <div
                        className='custom-prev-button'
                        style={{ transform: 'rotate(180deg)' }}
                    >
                        <button className='slider__button icon'><ArrowIcon /></button>
                    </div>
                    <div className='custom-next-button'>
                        <button className='slider__button icon'><ArrowIcon /></button>
                    </div>
                </div>
            </div>
            <Swiper
                loop={true}
                modules={[Navigation]}
                navigation={{ nextEl: '.custom-next-button', prevEl: '.custom-prev-button' }}
                spaceBetween={16}
                slidesPerView='auto'
                className="slider__content"
            >
                {Reviews.map((review, index) => (
                    <SwiperSlide key={index} className='slider__slide'>
                        <div className='slider__slide-user'>
                            <div className='slider__slide-user-avatar icon'>
                                <Image className='slider__slide-user-avatar-image' src={review.icon} alt="avatar" />
                            </div>
                            <div className='slider__slide-user-name'>
                                <p className='slider__slide-user-name-title'>{review.name}</p>
                                <p className='slider__slide-user-name-date'>{review.date}</p>
                            </div>
                        </div>
                        <p className='slider__slide-text'>{review.text}</p>  
                        <Link href={ButtonLink}>
                            <button className='slider__slide-button'><p className='slider__slide-button-text'>READ ALL</p><ArrowRightUpIcon /></button>
                        </Link> 
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        
    )
}

export default Slider