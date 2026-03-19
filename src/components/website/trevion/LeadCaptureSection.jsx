"use client";
import { motion } from "framer-motion";
import MediaFrame from "@/components/website/common/MediaFrame";
import Image from "next/image";

export default function LeadCaptureSection() {
    return (
        <section className="py-8 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-left"
                >
                    {/* Heading – same as Intro */}
                    <motion.h2
                        initial={{ y: 16, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-medium mb-4 text-[#0077c8]"
                    >
                        Capture Leads Your Way
                    </motion.h2>

                    {/* Supporting line (optional but helps flow) */}
                    <motion.p
                        initial={{ y: 16, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                        className="text-base md:text-lg text-gray-600 mb-6 max-w-xl"
                    >
                        Whether leads come from ads, files, or direct entry,
                        Trevion ensures every opportunity is captured and tracked.
                    </motion.p>

                    {/* Bullet points – SaaS style */}
                    <motion.ul
                        initial={{ y: 16, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        {[
                            "Capture leads directly from Meta Ads",
                            "Create manual leads instantly",
                            "Upload bulk leads in one go",
                            "Auto-assign leads to teams",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <span className="mt-2 h-2 w-2 rounded-full bg-[#0077c8]" />
                                <span className="text-gray-700 text-base md:text-lg">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>

                {/* Image – untouched */}
                <MediaFrame>
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <Image
                            src="/trevion/leads_dashboard.png"
                            alt="Trevion CRM Dashboard"
                            fill
                            className="object-contain"
                            priority={false}
                        />
                    </div>
                </MediaFrame>
            </div>
        </section>
    );
}
