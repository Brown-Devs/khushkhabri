"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Grid, Pagination, Autoplay } from "swiper/modules";
import { OUR_SERVICES } from "@/lib/constants/constantData";
import Link from "next/link";

function OurServices() {
    return (
        <section className="pt-20 pb-28 px-6 mx-auto hidden lg:block">
            <div className="mb-8 text-center">
                <h2 className="text-4xl sm:text-6xl font-medium text-center">
                    Our Services
                </h2>
                <p className="text-lg sm:text-xl mt-4 text-gray-600">
                    Premium digital solutions tailored to elevate your business
                </p>
            </div>

            <Swiper
                modules={[Grid, Pagination, Autoplay]}
                slidesPerView={4}
                spaceBetween={20}
                speed={1500}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                loop={true}
                breakpoints={{
                    1024: {
                        slidesPerView: 3,
                    },
                    1440: {
                        slidesPerView: 4.5,
                    },
                }}
                className="h-[300px] sm:h-[400px] pb-40"
            >
                {OUR_SERVICES.map((service, i) => {
                    const videoSrc = service.img
                        .replace("/animated/", "/vids/")
                        .replace(".gif", ".mp4");

                    return (
                        <SwiperSlide key={i}>
                            <Link href={`/services/${service.slug}`}>
                                <div
                                    className={`${service.color} p-6 rounded-2xl shadow-md h-full flex flex-col mb-3 cursor-pointer`}
                                >
                                    <video
                                        src={videoSrc}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-36 h-36 mb-5 rounded-full shadow-sm bg-white p-3 object-cover"
                                    />

                                    <h3 className="text-xl font-semibold mb-2">
                                        {service.heading}
                                    </h3>
                                    <p className="text-base text-gray-700">
                                        {service.content}
                                    </p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default OurServices;