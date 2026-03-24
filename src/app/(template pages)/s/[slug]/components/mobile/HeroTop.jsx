"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroTop({ bride, groom }) {
    const { scrollY } = useScroll();

    const textY = useTransform(scrollY, [0, 500], [0, 80]);

    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const item = {
        hidden: {
            y: 60,
            opacity: 0,
            rotate: -5,
        },
        show: {
            y: 0,
            opacity: 1,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="relative h-[90vh] flex items-start justify-center text-center pt-24">

            <motion.div
                style={{ y: textY }}
                variants={container}
                initial="hidden"
                animate="show"
                className="z-10"
            >
                <motion.h1 variants={item} className="text-white text-7xl font-script">
                    {bride?.name?.split(' ')[0] || 'Bride'}
                </motion.h1>

                <motion.p variants={item} className="text-white text-2xl mt-2 font-script">
                    weds
                </motion.p>

                <motion.h2 variants={item} className="text-white text-7xl mt-2 font-script">
                    {groom?.name?.split(' ')[0] || 'Groom'}
                </motion.h2>
            </motion.div>

        </section>
    );
}