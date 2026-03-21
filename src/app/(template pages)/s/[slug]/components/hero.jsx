"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import FloatingIcons from "./FloatingIcons";

export default function Hero({ invitation }) {
    const { bride, groom, side } = invitation?.weddingDetails || {};
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden font-serif">
            <FloatingIcons sectionId="hero" count={12} icons={[1, 2, 3, 4, 11, 12, 13, 22, 23, 29]} />

            {/* Background Image WITHOUT Parallax */}
            <div className="w-full  h-full overflow-hidden">
                <img
                    src="/templates/sikh/hero.png"
                    alt="invitation background"
                    className="w-full h-full object-cover object-top scale-100 md:scale-110"
                />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center text-center px-4 z-10 ">

                <div className="mt-10" />

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-6xl md:text-8xl font-light tracking-wide font-script"
                >
                    {bride?.name?.split(' ')[0] || 'Bride'}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white text-xl md:text-3xl mt-2 font-script"
                >
                    weds
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-white text-6xl md:text-8xl mt-2 font-script"
                >
                    {groom?.name?.split(' ')[0] || 'Groom'}
                </motion.h2>

                <div className="h-[25%]" />

                <img
                    src="/templates/sikh/khanda.png"
                    alt="khanda"
                    className="w-auto h-45 mb-12"
                />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full px-6 text-center text-white space-y-5"
                >

                    <p className="text-2xl tracking-wide">
                        {side === 'groom' ? (
                            <>
                                Sardar {groom?.father || 'Father'} &<br />
                                Sardami {groom?.mother || 'Mother'}
                            </>
                        ) : (
                            <>
                                Sardar {bride?.father || 'Father'} &<br />
                                Sardami {bride?.mother || 'Mother'}
                            </>
                        )}
                    </p>

                    <h2 className="text-6xl my-9 font-script italic">
                        Invites you
                    </h2>

                    <p className="text-lg mb-8">
                        to join the wedding celebration of<br />
                        their {side === 'groom' ? 'son' : 'daughter'}
                    </p>

                    <h3 className="text-6xl mt-5 font-light font-script">
                        {side === 'groom' ? groom?.name : bride?.name}
                    </h3>

                    <p className="text-lg mt-0">with</p>

                    <h3 className="text-6xl mt-1 font-script">
                        {side === 'groom' ? bride?.name : groom?.name}
                    </h3>

                    <p className="text-lg mt-4">
                        {side === 'groom' ? 'daughter of' : 'son of'}
                    </p>

                    <p className="text-2xl mt-1 ">
                        {side === 'groom' ? (
                            <>
                                Sardar {bride?.father || 'Father'} &<br />
                                Sardami {bride?.mother || 'Mother'}
                            </>
                        ) : (
                            <>
                                Sardar {groom?.father || 'Father'} &<br />
                                Sardami {groom?.mother || 'Mother'}
                            </>
                        )}
                    </p>

                </motion.div>
            </div>
        </section>
    );
}