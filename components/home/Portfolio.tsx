"use client"
import { FC } from "react"
import ChevronRight from "../common/ChevronRight"
import ChevronLeft from "../common/ChevronLeft"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import img from "@/assets/images/slider.png"

interface IProps {
    number: number,
    title: string,
    start: boolean
}

const Portfolio: FC<IProps> = ({ number, start, title }) => {
    return (
        <section className="relative w-full mb-[100px] sm:mb-5">
            <div className="mb-8 overflow-hidden">
                <div className={`relative flex gap-4 items-center ${start ? "" : "items-end flex-row-reverse"}`}>
                    <div className={`w-20 aspect-square rounded-full bg-primary ${start ? "-ms-10" : "-me-10"}`}></div>
                    <p className={`absolute z-10 -top-1 text-5xl text-whitePrimary opacity-60 ${start ? "start-6" : "end-6"}`}>{number}</p>
                    <h2 className="font-normal text-sm text-whitePrimary">{title}</h2>
                </div>
            </div>
            <div className={`!w-10/12 aspect-[3/1] relative overflow-hidden ${start ? "me-auto" : "ms-auto"}`}>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    className={` Swiper${number}`}
                    autoplay={true}
                    loop={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                >
                    {
                        [1, 2].map(item => <SwiperSlide
                        // key={item?.id}
                        >
                            <img
                                className={`!w-full h-full`}
                                src={img.src}
                                alt={title}
                            />
                        </SwiperSlide>)
                    }

                </Swiper>
                <div
                    className="swiper-button-next items-center justify-center sm:w-7 w-11 !h-full px-1.5 sm:hidden flex bg-whiteSecondary/50 !top-[12.5%] sm:!top-[6.7%] !start-0 rounded-l-full after:hidden">
                    <ChevronRight className="w-full aspect-square fill-whitePrimary" />
                </div>
                <div
                    className="swiper-button-prev items-center justify-center sm:w-7 w-11 !h-full px-1 sm:hidden flex bg-whiteSecondary/50 !top-[12.5%] sm:!top-[6.7%] !end-0 rounded-r-full after:hidden">
                    <ChevronLeft className="h-full fill-whitePrimary me-1.5" />
                </div>s
            </div>
        </section>
    )
}
export default Portfolio