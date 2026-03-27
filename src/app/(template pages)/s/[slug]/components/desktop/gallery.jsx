"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import FloatingIcons from "./FloatingIcons";

export default function GallerySection({ invitation }) {
    const { bride, groom } = invitation?.weddingDetails || {};

    const preWeddingPhotos = invitation?.mainDetails?.preWeddingPhotos || [];
    const showPreWeddingPhotos = invitation?.mainDetails?.showPreWeddingPhotos ?? true;
    const weddingVideo = invitation?.mainDetails?.weddingVideo;
    const showWeddingVideo = invitation?.mainDetails?.showWeddingVideo ?? true;

    const defaultImages = [
        "/templates/sikh/couple1.jpeg",
        "/templates/sikh/couple2.jpeg",
        "/templates/sikh/couple3.jpeg",
    ];

    const images = preWeddingPhotos.length > 0 ? preWeddingPhotos : defaultImages;

    const getYouTubeId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeId(weddingVideo);

    return (
        <section className="relative w-full overflow-visible font-serif">
            {/* Background */}
            <div
                className="pt-55 pb-24 bg-cover bg-center bg-no-repeat text-center"
                style={{
                    backgroundImage: "url('/bg/darkBlue.png')",
                }}
            >

                {showPreWeddingPhotos && (
                    <>
                        {/* ===== Bride & Groom ===== */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-white text-2xl italic">
                                Meet the
                            </p>

                            <h2 className="text-white text-6xl font-script mt-5">
                                Bride & Groom
                            </h2>
                        </motion.div>

                        <div className="mt-10">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={1.3}
                                centeredSlides={true}
                                grabCursor={true}
                                loop={images.length > 1}
                            >
                                {images.map((img, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="flex justify-center">
                                            <img
                                                src={img}
                                                alt="couple"
                                                className="w-[300px] h-[520px] object-cover rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </>
                )}

                {showWeddingVideo && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-20 px-6"
                    >

                        <p className="text-white text-2xl italic">
                            Watch our
                        </p>

                        <h2 className="text-white text-6xl font-script mt-5">
                            Pre Wedding
                        </h2>

                        {/* Video Card */}
                        <div className="mt-8 flex justify-center">
                            <div className="w-[300px] h-[520px] rounded-[28px] overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-black">
                                {videoId ? (
                                    <iframe
                                        className="w-full h-full border-0"
                                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                                        title="Pre Wedding Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <>
                                        {/* Thumbnail (Fallback) */}
                                        <img
                                            src={images[0] || "/templates/sikh/couple2.jpeg"}
                                            alt="pre wedding"
                                            className="w-full h-full object-cover opacity-60"
                                        />
                                        {/* Play Button Icon (Fallback) */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center text-white/40">
                                                ?
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}

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
                        className="w-46 mx-auto mb-6"
                    />

                    <p className="text-white text-2xl italic">
                        With the blessings of
                    </p>

                    <p className="text-white text-2xl mt-1">
                        Waheguru Ji
                    </p>

                    <h2 className="text-white text-6xl font-script mt-6 leading-tight">
                        {bride?.name?.split(' ')[0] || 'Bride'}
                    </h2>

                    <p className="text-white text-2xl">&</p>

                    <h2 className="text-white text-6xl font-script leading-tight">
                        {groom?.name?.split(' ')[0] || 'Groom'}
                    </h2>

                    <p className="text-white text-2xl mt-6 italic">
                        begin their forever...
                    </p>

                </motion.div>

            </div>
            {/* Sticker */}
            <motion.div
                initial={{ opacity: 0, x: 50, rotate: 20 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute bottom-[-170px] left-1/2 -translate-x-1/2 z-10 w-full"
            >
                <img
                    src="/templates/sikh/scooter.png"
                    alt="sticker"
                    className="w-full"
                />
            </motion.div>
        </section>
    );
}