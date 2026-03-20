"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FloatingIcons from "./FloatingIcons";

export default function GallerySection({ invitation }) {
    const { bride, groom } = invitation?.weddingDetails || {};

    const images = [
        "/templates/sikh/couple1.jpeg",
        "/templates/sikh/couple2.jpeg",
        "/templates/sikh/couple3.jpeg",
    ];

    return (
        <section className="relative w-full overflow-hidden">
            <FloatingIcons sectionId="gallery" count={12} icons={[8, 9, 10, 17, 18, 19, 20]} />

            {/* 🔥 Sticker */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="absolute -top-45 left-1/2 -translate-x-1/2 z-10 w-full"
            >
                <img
                    src="/templates/sikh/routeSticker.png"
                    alt="route"
                    className=" w-full"
                />
            </motion.div>

            {/* Background */}
            <div
                className="pt-28 pb-24 bg-cover bg-center bg-no-repeat text-center"
                style={{
                    backgroundImage: "url('/bg/darkBlue.png')",
                }}
            >

                {/* ===== Bride & Groom ===== */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-white text-sm italic">
                        Meet the
                    </p>

                    <h2 className="text-white text-3xl font-script mt-1">
                        Bride & Groom
                    </h2>
                </motion.div>

                <div className="mt-10">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1.3}
                        centeredSlides={true}
                        grabCursor={true}
                    >
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex justify-center">
                                    <img
                                        src={img}
                                        alt="couple"
                                        className="w-[260px] h-[460px] object-cover rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* ===== Pre Wedding Section ===== */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 px-6"
                >

                    <p className="text-white text-sm italic">
                        Watch our
                    </p>

                    <h2 className="text-white text-3xl font-script mt-1">
                        Pre Wedding
                    </h2>

                    {/* Video Card */}
                    <div className="mt-8 flex justify-center">
                        <div className="w-[260px] h-[460px] rounded-[28px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

                            {/* Thumbnail */}
                            <img
                                src="/templates/sikh/couple2.jpeg"
                                alt="pre wedding"
                                className="w-full h-full object-cover"
                            />

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-14 h-14 bg-white/80 rounded-full flex items-center justify-center">
                                    ▶
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* ===== Final Blessing Section ===== */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-24 px-6 text-center"
                >

                    {/* Logo / Symbol */}
                    <motion.img
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        src="/templates/sikh/onkar.png"
                        alt="symbol"
                        className="w-16 mx-auto mb-6"
                    />

                    <p className="text-white text-sm italic">
                        With the blessings of
                    </p>

                    <p className="text-white text-lg mt-1">
                        Waheguru Ji
                    </p>

                    <h2 className="text-white text-4xl font-script mt-6 leading-tight">
                        {bride?.name?.split(' ')[0] || 'Bride'}
                    </h2>

                    <p className="text-white text-lg">&</p>

                    <h2 className="text-white text-4xl font-script leading-tight">
                        {groom?.name?.split(' ')[0] || 'Groom'}
                    </h2>

                    <p className="text-white text-sm mt-6 italic">
                        begin their forever...
                    </p>

                </motion.div>

            </div>
        </section>
    );
}