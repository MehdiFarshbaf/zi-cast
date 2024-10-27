

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

import imageSlider from "@/assets/images/slider.png"

import ArrowLeft from '../icons/ArrowLeft';
import ArrowRight from '../icons/ArrowRight';
import Link from 'next/link';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Archive = () => {
    return (
        <section id="gallery" className="w-full flex-center mb-[200px] sm:mb-[100px]">
            <div className="inside">
                <div className="flex flex-col md:flex-row bg-whiteSecondary rounded-2xl overflow-hidden">
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-4 p-4 text-blackPrimary">
                        <p>آرشیو رویدادها و فعالیت‌ها</p>
                        <Link href="/" className="bg-primary text-whitePrimary hover:bg-secondary rounded px-6 py-2 transition-all">
                            مشاهده
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        pagination={{
                            clickable: true,
                        }}

                        // className="archiveSwiper"
                        autoplay={true}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {/* {
                            [1, 2].map((item,index) => <SwiperSlide
                            key={index}
                            >
                                <img src={imageSlider.src} className='w-full h-full' alt="zagros" />
                            </SwiperSlide>)
                        } */}
                    </Swiper>
                    {/* <div
                        className="swiper-button-next flex items-center justify-center !w-8 md:!w-11 !h-8 md:!h-11 rounded-full border border-color3 !top-auto bottom-0 !ms-[calc(50%-50px)] md:!ms-[calc(50%-60px)] p-2 after:hidden">
                        <ArrowRight className="w-full aspect-square fill-color32" />
                    </div>
                    <div
                        className="swiper-button-prev flex items-center justify-center !w-8 md:!w-11 !h-8 md:!h-11 rounded-full border border-color3 !top-auto bottom-0 !me-[calc(50%-50px)] md:!me-[calc(50%-60px)] py-2 pe-2.5 after:hidden">
                        <ArrowLeft className="h-full fill-whitePrimary" />
                    </div> */}
                </div>
            </div>
        </section>
    )
}


export default Archive