"use client";
import { motion } from "framer-motion";
import MediaFrame from "@/components/website/common/MediaFrame";

export default function TrevionVideoOverview() {
    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-semibold mb-4"
                >
                    A Quick Look at Trevion
                </motion.h2>

                <motion.p
                    initial={{ y: 14, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    viewport={{ once: true }}
                    className="text-gray-600 mb-8"
                >
                    Explore Trevion’s dashboard, lead flow, and automation in under two minutes.
                </motion.p>

                <MediaFrame>
                    {/* Replace with <video /> later */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
                        Video Overview (16:9)
                    </div>

                    {/* Play overlay (kept even after video) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="h-16 w-16 rounded-full bg-black/60 flex items-center justify-center">
                            ▶
                        </div>
                    </div>
                </MediaFrame>
            </div>
        </section>
    );
}