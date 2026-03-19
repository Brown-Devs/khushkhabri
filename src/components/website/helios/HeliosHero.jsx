"use client";
import { motion } from "framer-motion";

export default function HeliosHero() {
    const item = {
        hidden: { y: 18, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <section className="relative min-h-[50vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden pt-30">
            {/* Background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(circle at top, #f8fafc 0%, #eaf4ff 45%, #cfe8ff 100%)",
                }}
            />

            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h1
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    className="uppercase text-lg sm:text-3xl lg:text-5xl font-bold tracking-tight leading-[1.05]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                    <span className="text-[#0077c8]">
                        HELIOS -
                    </span> A COMPLETE <span className="text-[#0077c8]">SCHOOL ERP/</span>
                    <br />
                    SCHOOL MANAGEMENT SOFTWARE
                </motion.h1>

                <motion.p
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    // className="mt-6 max-w-2xl mx-auto text-base md:text-2xl text-gray-700"
                    className="mt-5 text-sm md:text-xl max-w-2xl mx-auto"
                >
                    Manage academics, attendance, administration, finance, and communication
                    across your institution from one powerful system.
                </motion.p>

                {/* CTA */}
                <motion.div variants={item} className="mt-8 mb-20">
                    <motion.a
                        href="/contact-us"
                        className="
                inline-block
                border-[#0f172a] text-[#0f172a]
                rounded-full border
                px-6 py-3
                text-sm md:text-base
                font-medium
                transition-transform
                hover:scale-[1.02]
                active:scale-95
                hover:bg-white
                shadow-sm
              "
                        style={{ fontFamily: "var(--font-poppins)" }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.96 }}
                    >
                        Request a Demo
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
