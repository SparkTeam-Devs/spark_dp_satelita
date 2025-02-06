'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './Slider.scss'

import { Navigation } from 'swiper/modules';
import Image from 'next/image'
import { ArrowIcon, ArrowRightUpIcon } from '../UI/svg';

const Slider = () => {
    return (
        <div className='slider__wrapper'>
            <div className='slider__heading'>
                <h3 className='slider__heading-title'>Reviews our users</h3>
                <div className='slider__buttons'>
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
                <SwiperSlide className='slider__slide'>
                    <div className='slider__slide-user'>
                        <div className='slider__slide-user-avatar'>
                            {/* <Image src="/images/avatar.png" alt="avatar" width={40} height={40} /> */}
                        </div>
                        <div className='slider__slide-user-name'>
                            <p className='slider__slide-user-name-title'>Name Lastname</p>
                            <p className='slider__slide-user-name-date'>25.12.2023</p>
                        </div>
                    </div>
                    <p className='slider__slide-text'>With its help, you can realistically change photos and look at the most intimate. The program works automatically and generates photos based on the images you provided.</p>  
                    <button className='slider__slide-button'><p className='slider__slide-button-text'>READ ALL</p><ArrowRightUpIcon /></button>
                </SwiperSlide>
                <SwiperSlide className='slider__slide'>
                    <div className='slider__slide-user'>
                        <div className='slider__slide-user-avatar'>
                            {/* <Image src="/images/avatar.png" alt="avatar" width={40} height={40} /> */}
                        </div>
                        <div className='slider__slide-user-name'>
                            <p className='slider__slide-user-name-title'>Name Lastname</p>
                            <p className='slider__slide-user-name-date'>25.12.2023</p>
                        </div>
                    </div>
                    <p className='slider__slide-text'>With its help, you can realistically change photos and look at the most intimate. The program works automatically and generates photos based on the images you provided.</p>  
                    <button className='slider__slide-button'><p className='slider__slide-button-text'>READ ALL</p><ArrowRightUpIcon /></button>
                </SwiperSlide>
                <SwiperSlide className='slider__slide'>
                    <div className='slider__slide-user'>
                        <div className='slider__slide-user-avatar'>
                            {/* <Image src="/images/avatar.png" alt="avatar" width={40} height={40} /> */}
                        </div>
                        <div className='slider__slide-user-name'>
                            <p className='slider__slide-user-name-title'>Name Lastname</p>
                            <p className='slider__slide-user-name-date'>25.12.2023</p>
                        </div>
                    </div>
                    <p className='slider__slide-text'>With its help, you can realistically change photos and look at the most intimate. The program works automatically and generates photos based on the images you provided.</p>  
                    <button className='slider__slide-button'><p className='slider__slide-button-text'>READ ALL</p><ArrowRightUpIcon /></button>
                </SwiperSlide>
                <SwiperSlide className='slider__slide'>
                    <div className='slider__slide-user'>
                        <div className='slider__slide-user-avatar'>
                            {/* <Image src="/images/avatar.png" alt="avatar" width={40} height={40} /> */}
                        </div>
                        <div className='slider__slide-user-name'>
                            <p className='slider__slide-user-name-title'>Name Lastname</p>
                            <p className='slider__slide-user-name-date'>25.12.2023</p>
                        </div>
                    </div>
                    <p className='slider__slide-text'>With its help, you can realistically change photos and look at the most intimate. The program works automatically and generates photos based on the images you provided.</p>  
                    <button className='slider__slide-button'><p className='slider__slide-button-text'>READ ALL</p><ArrowRightUpIcon /></button>
                </SwiperSlide>
                <SwiperSlide className='slider__slide'>
                    <div className='slider__slide-user'>
                        <div className='slider__slide-user-avatar'>
                            {/* <Image src="/images/avatar.png" alt="avatar" width={40} height={40} /> */}
                        </div>
                        <div className='slider__slide-user-name'>
                            <p className='slider__slide-user-name-title'>Name Lastname</p>
                            <p className='slider__slide-user-name-date'>25.12.2023</p>
                        </div>
                    </div>
                    <p className='slider__slide-text'>With its help, you can realistically change photos and look at the most intimate. The program works automatically and generates photos based on the images you provided.</p>  
                    <button className='slider__slide-button'><p className='slider__slide-button-text'>READ ALL</p><ArrowRightUpIcon /></button>
                </SwiperSlide>
                <SwiperSlide className='slider__slide'>
                    <div className='slider__slide-user'>
                        <div className='slider__slide-user-avatar'>
                            {/* <Image src="/images/avatar.png" alt="avatar" width={40} height={40} /> */}
                        </div>
                        <div className='slider__slide-user-name'>
                            <p className='slider__slide-user-name-title'>Name Lastname</p>
                            <p className='slider__slide-user-name-date'>25.12.2023</p>
                        </div>
                    </div>
                    <p className='slider__slide-text'>With its help, you can realistically change photos and look at the most intimate. The program works automatically and generates photos based on the images you provided.</p>  
                    <button className='slider__slide-button'><p className='slider__slide-button-text'>READ ALL</p><ArrowRightUpIcon /></button>
                </SwiperSlide>
                <SwiperSlide className='slider__slide'>
                    <div className='slider__slide-user'>
                        <div className='slider__slide-user-avatar'>
                            {/* <Image src="/images/avatar.png" alt="avatar" width={40} height={40} /> */}
                        </div>
                        <div className='slider__slide-user-name'>
                            <p className='slider__slide-user-name-title'>Name Lastname</p>
                            <p className='slider__slide-user-name-date'>25.12.2023</p>
                        </div>
                    </div>
                    <p className='slider__slide-text'>With its help, you can realistically change photos and look at the most intimate. The program works automatically and generates photos based on the images you provided.</p>  
                    <button className='slider__slide-button'><p className='slider__slide-button-text'>READ ALL</p><ArrowRightUpIcon /></button>
                </SwiperSlide>
                <SwiperSlide className='slider__slide'>
                    <div className='slider__slide-user'>
                        <div className='slider__slide-user-avatar'>
                            {/* <Image src="/images/avatar.png" alt="avatar" width={40} height={40} /> */}
                        </div>
                        <div className='slider__slide-user-name'>
                            <p className='slider__slide-user-name-title'>Name Lastname</p>
                            <p className='slider__slide-user-name-date'>25.12.2023</p>
                        </div>
                    </div>
                    <p className='slider__slide-text'>With its help, you can realistically change photos and look at the most intimate. The program works automatically and generates photos based on the images you provided.</p>  
                    <button className='slider__slide-button'><p className='slider__slide-button-text'>READ ALL</p><ArrowRightUpIcon /></button>
                </SwiperSlide>
            </Swiper>
        </div>
        
    )
}

export default Slider