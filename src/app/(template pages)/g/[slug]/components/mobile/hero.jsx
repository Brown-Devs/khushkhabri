"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative w-full font-serif h-[125vh] overflow-hidden">

            {/* ✅ MAIN IMAGE (NOT BACKGROUND) */}
            <img
                src="/templates/guruji/hero.png"
                alt="bg"
                className="w-full h-full object-cover"
            />

            {/* ✅ PILLOWS - Pair 1 (Left) */}
            <motion.img
                src="/templates/guruji/pillow2.png"
                className="absolute -left-26 bottom-[20%] w-[150px] h-auto drop-shadow-2xl z-20"
                initial={{ opacity: 0, x: -100, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8 }}
            />
            <motion.img
                src="/templates/guruji/pillow2.png"
                className="absolute -left-15 bottom-[32%] w-[150px] h-auto drop-shadow-2xl z-10 opacity-90"
                initial={{ opacity: 0, x: -100, rotate: 0 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* ✅ PILLOWS - Pair 2 (Right) */}
            <motion.img
                src="/templates/guruji/pillow.png"
                className="absolute -right-26 bottom-[20%] w-[150px] h-auto drop-shadow-2xl z-20"
                initial={{ opacity: 0, x: 100, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            />
            <motion.img
                src="/templates/guruji/pillow.png"
                className="absolute -right-15 bottom-[32%] w-[150px] h-auto drop-shadow-2xl z-10 opacity-90"
                initial={{ opacity: 0, x: 100, rotate: 0 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />

            <motion.img
                src="/templates/guruji/whitevase.png"
                className="absolute -left-[5%] bottom-[4%] w-[40%] h-auto z-[35]"
                initial={{ opacity: 0, scale: 1.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            />
            <motion.img
                src="/templates/guruji/pinkvase.png"
                className="absolute left-[8%] bottom-[10%] w-[28%] h-auto z-[34]"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            />
            <motion.img
                src="/templates/guruji/whitevase.png"
                className="absolute left-[16%] bottom-[25%] w-[25%] h-auto z-[33]"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            />
            <motion.img
                src="/templates/guruji/pinkvase.png"
                className="absolute left-[24%] bottom-[30%] w-[18%] h-auto z-[32]"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            />
            <motion.img
                src="/templates/guruji/peacock.png"
                className="absolute left-[28%] bottom-[37%] w-[14%] h-auto z-[31] scale-x-[-1]"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            />

            {/* Right Side (Bottom to Top) */}
            <motion.img
                src="/templates/guruji/whitevase.png"
                className="absolute -right-[5%] bottom-[4%] w-[40%] h-auto z-[35] scale-x-[-1]"
                initial={{ opacity: 0, scale: 1.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            />
            <motion.img
                src="/templates/guruji/pinkvase.png"
                className="absolute right-[8%] bottom-[10%] w-[28%] h-auto z-[34] scale-x-[-1]"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            />
            <motion.img
                src="/templates/guruji/whitevase.png"
                className="absolute right-[16%] bottom-[25%] w-[25%] h-auto z-[33] scale-x-[-1]"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            />
            <motion.img
                src="/templates/guruji/pinkvase.png"
                className="absolute right-[24%] bottom-[30%] w-[18%] h-auto z-[32] scale-x-[-1]"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
            />
            <motion.img
                src="/templates/guruji/peacock.png"
                className="absolute right-[28%] bottom-[37%] w-[14%] h-auto z-[31]"
                initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
            />


        </section>
    );
}