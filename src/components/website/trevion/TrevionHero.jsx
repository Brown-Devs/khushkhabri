"use client";
import { motion } from "framer-motion";

export default function TrevionHero() {
    const textParent = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    const textItem = {
        hidden: { y: 18, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <section className="relative overflow-hidden min-h-[50vh] lg:min-h-[90vh] flex items-center justify-center pt-30">
            {/* Background – calmer SaaS tone */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background: `
            radial-gradient(
              circle at top,
              #f8fafc 0%,
              #eaf4ff 45%,
              #cfe8ff 100%
            )
          `,
                }}
                aria-hidden
            />

            <div className="max-w-6xl mx-auto px-6 md:px-8 text-center">
                <motion.div
                    variants={textParent}
                    initial="hidden"
                    animate="visible"
                    className="mx-auto"
                >
                    {/* Headline */}
                    <motion.h1
                        variants={textItem}
                        className="
                            mx-auto
                            max-w-[90%] lg:w-[900px]
                            text-lg sm:text-3xl lg:text-5xl
                            uppercase
                            tracking-[-0.02em]
                            leading-[1.05]
                            font-bold
                            "
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                        <span className="text-[#0077c8]">
                            TREVION -
                        </span> THE <span className="text-[#0077c8]">
                            CRM
                        </span>
                        <br />
                        BUILT TO <span className="text-[#0077c8]">STREAMLINE</span> YOUR SALES PROCESS
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        variants={textItem}
                        className="mt-5 text-sm md:text-xl max-w-2xl mx-auto"
                        style={{
                            fontFamily: "var(--font-dm-sans)",
                            color: "#1f2937",
                        }}
                    >
                        A modern CRM platform that centralizes leads,
                        automates follow-ups, schedules meetings, and
                        helps teams close deals faster.
                    </motion.p>

                    {/* CTA */}
                    <motion.div variants={textItem} className="mt-8 mb-20">
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
                </motion.div>
            </div>
        </section>
    );
}
