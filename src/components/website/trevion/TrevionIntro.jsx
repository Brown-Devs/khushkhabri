"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MediaFrame from "@/components/website/common/MediaFrame";

export default function TrevionIntro() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-left"
                >
                    <motion.h2
                        initial={{ y: 16, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-semibold mb-4"
                    >
                        What is <span className="text-[#0077c8]">
                            Trevion?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ y: 16, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl"
                    >
                        Trevion is a modern CRM platform designed to help businesses
                        capture leads, manage sales pipelines, schedule meetings,
                        automate follow-ups, and track team performance — all from
                        a single, unified dashboard.
                    </motion.p>
                </motion.div>

                {/* Image – untouched layout, only real image added */}
                <MediaFrame>
                    <Image
                        src="/trevion/dashboard.png"
                        alt="Trevion CRM Dashboard"
                        fill
                        className="object-contain"
                        priority={false}
                    />
                </MediaFrame>
            </div>
        </section>
    );
}
