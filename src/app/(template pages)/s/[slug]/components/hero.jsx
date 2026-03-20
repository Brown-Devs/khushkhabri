"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FloatingIcons from "./FloatingIcons";

export default function Hero({ invitation }) {
    const { bride, groom, side } = invitation?.weddingDetails || {};
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section ref={containerRef} className="relative w-full overflow-hidden">
            <FloatingIcons sectionId="hero" count={12} icons={[1, 2, 3, 4, 11, 12, 13, 22, 23, 29]} />
            
            {/* Background Image with Parallax */}
            <motion.img
                style={{ y }}
                src="/templates/sikh/hero.png"
                alt="invitation background"
                className="w-full h-auto scale-110"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center text-center px-4 z-10">

                {/* Top spacing */}
                <div className="mt-10" />

                {/* Names */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-5xl font-light tracking-wide font-script"
                >
                    {bride?.name?.split(' ')[0] || 'Bride'}
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white text-xl mt-2 font-script"
                >
                    weds
                </motion.p>

                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-white text-6xl mt-2 font-script"
                >
                    {groom?.name?.split(' ')[0] || 'Groom'}
                </motion.h2>

                {/* Spacer to push content down */}
                <div className="h-[25%]" />

                {/* Khanda Icon */}
                <motion.img
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.8 }}
                    src="/templates/sikh/khanda.png"
                    alt="khanda"
                    className="w-16 h-16 mb-2"
                />

                {/* Bottom Invite Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="w-full px-6 text-center text-white"
                >

                    <p className="text-sm tracking-wide">
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

                    <h2 className="text-3xl mt-4 font-light italic">
                        Invites you
                    </h2>

                    <p className="text-xs mt-3 leading-relaxed">
                        to join the wedding celebration of<br />
                        their {side === 'groom' ? 'son' : 'daughter'}
                    </p>

                    <h3 className="text-4xl mt-5 font-light font-script">
                        {side === 'groom' ? groom?.name : bride?.name}
                    </h3>

                    <p className="text-sm mt-2">with</p>

                    <h3 className="text-4xl font-semibold mt-1 font-script">
                        {side === 'groom' ? bride?.name : groom?.name}
                    </h3>

                    <p className="text-xs mt-4">
                        {side === 'groom' ? 'daughter of' : 'son of'}
                    </p>

                    <p className="text-xs mt-1 leading-relaxed">
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