"use client"

import { useRef} from "react";

import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation} from 'swiper/modules';
import imageSlider from "@/assets/images/slider.png"

import Link from 'next/link';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperController from "@/components/common/SwiperController";


const Archive = () => {
    // variables
    const swiperRef = useRef<SwiperRef>()
    const slideNext = (): boolean | undefined => swiperRef?.current?.swiper.slideNext();

    const slidePrev = (): boolean | undefined => swiperRef?.current?.swiper.slidePrev();
    return (
        <section id="gallery" className="w-full flex-center mb-[200px] sm:mb-[100px]">
            <div className="inside flex-col ">
                <div
                    className="mb-5 sm:mb-3 w-full flex flex-row sm:flex-col sm:h-[350px]  bg-whiteSecondary rounded-2xl overflow-hidden">
                    <div
                        className=" w-1/2 sm:w-full sm:h-1/2 flex flex-col items-center justify-center gap-4 p-4 text-blackPrimary">
                        <p>آرشیو رویدادها و فعالیت‌ها</p>
                        <Link href="/"
                              className="bg-primary text-whitePrimary hover:bg-secondary rounded px-6 py-2 transition-all">
                            مشاهده
                        </Link>
                    </div>
                    <div className="w-1/2 sm:w-full sm:h-1/2">
                        <Swiper
                            loop={true}
                            onSwiper={(swiper) => {
                                // @ts-ignore
                                swiperRef.current = swiper
                            }}
                            modules={[Autoplay, Navigation]}
                            pagination={{
                                clickable: true,
                            }}

                            autoplay={true}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                        >
                            {
                                [1, 2].map((item, index) => <SwiperSlide
                                    key={index}
                                >
                                    <img src={imageSlider.src} className='w-full h-full' alt="zagros"/>
                                </SwiperSlide>)
                            }
                        </Swiper>


                    </div>
                </div>
                <SwiperController nextFunction={() => slideNext()} prevFunction={() => slidePrev()}/>
            </div>
        </section>
    )
}


export default Archive