"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MediaFrame from "@/components/website/common/MediaFrame";

export default function MetaIntegrationHighlight() {
    return (
        <section className="relative py- sm:py-15 overflow-hidden">
            {/* Background split */}
            <div className="absolute inset-0 -z-10">
                {/* Top white */}
                <div className="h-[45%] bg-white" />

                {/* Bottom blue radial */}
                <div
                    className="h-[55%]"
                    style={{
                        background:
                            "radial-gradient(circle at center, #ffffff 0%, #87cefa 100%)",
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-medium text-[#0077c8] mb-4"
                >
                    Built for Businesses Running Meta Ads
                </motion.h2>

                {/* Tagline */}
                <motion.p
                    initial={{ y: 16, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-base mb-4 sm:mb-0 md:text-lg text-gray-600 max-w-3xl"
                >
                    As an official Meta Business Partner, Trevion connects directly with
                    Facebook and Instagram to capture leads in real time — automatically,
                    securely, and without third-party tools.
                </motion.p>

                {/* Image */}
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="my-14 sm:mt-14 w-full flex justify-center"
                >
                    {/* Slightly wider than text, not full width */}
                    <div className="w-full max-w-4xl">
                        <MediaFrame>
                            <Image
                                src="/trevion/meta_integration.png"
                                alt="Meta integration with Trevion CRM"
                                fill
                                className="object-contain"
                            />
                        </MediaFrame>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
