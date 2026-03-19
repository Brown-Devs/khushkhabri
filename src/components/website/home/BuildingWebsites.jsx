'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

function BuildingWebsites() {
    return (
        <section className="relative w-full bg-white overflow-hidden pt-40 md:pt-52 lg:pt-66">
            {/* Image with Heading & Overlay */}
            <motion.div
                className="relative w-[90vw] h-[250px] md:h-[350px] mx-auto rounded-2xl overflow-hidden shadow-lg mb-8"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.4 }}
            >
                <Image
                    src="/homeMarquee.jpg"
                    alt="Website Development"
                    width={1500}
                    height={1500}
                    className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <motion.div
                    className="absolute inset-0 bg-black/50"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.4 }}
                ></motion.div>

                {/* Heading on top of image */}
                <motion.div
                    className="absolute inset-0 flex items-center justify-center text-center px-4"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.5 }}
                >
                    <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-snug text-white drop-shadow-lg">
                        Building <span className="text-[#8EC5FF]">Websites</span> That <br />
                        Drive <span className="text-[#8EC5FF]">Results</span>
                    </h2>
                </motion.div>
            </motion.div>

            {/* Paragraph */}
            <motion.div
                className="max-w-7xl w-[90vw] mx-auto bg-gray-100 rounded-xl shadow p-6 text-center"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    Website development is the process of creating and maintaining
                    websites, involving tasks like designing layouts, writing code, and
                    managing databases. It focuses on building functional, user-friendly,
                    and visually appealing sites that perform well and meet business or
                    personal goals.
                </p>
            </motion.div>

            {/* Tilted Bar with Marquee */}
            <div className="absolute left-0 right-0 top-12 rotate-[3deg] bg-blue-300 py-3 overflow-hidden">
                <div className="whitespace-nowrap animate-marquee flex gap-6 sm:gap-8 md:gap-12 font-medium text-3xl sm:text-2xl md:text-4xl lg:text-7xl font-anton">
                    <span>★ WEBSITE DEVELOPMENT</span>
                    {[...Array(4)].map((_, i) => (
                        <React.Fragment key={i}>
                            <span>★ WEBSITE DEVELOPMENT</span>
                            <span> ★ APP DEVELOPMENT</span>
                            <span> ★ DIGITAL MARKETING</span>
                            <span> ★ SOFTWARE SOLUTIONS</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>


            {/* Extra padding for bar */}
            <div className="h-16"></div>
        </section>
    );
}

export default BuildingWebsites;
