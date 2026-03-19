"use client";
import { motion } from "framer-motion";
import MediaFrame from "@/components/website/common/MediaFrame";
import Image from "next/image";

export default function HeliosIntro() {
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
                            Helios?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ y: 16, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl"
                    >
                        Helios is an all-in-one School ERP/School Management Software
                        designed to simplify daily operations for schools and
                        educational institutions.
                        <br />
                        From admissions and fees to academics, attendance, staff, and parent
                        communication — Helios ensures efficiency, transparency,
                        and complete control.
                    </motion.p>
                </motion.div>

                {/* Text */}
                {/* <motion.div
                    initial={{ y: 24, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-medium text-[#0077c8] mb-4">
                        What is ?
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl">
                        Helios is an all-in-one School Management and ERP platform
                        designed to simplify daily operations for schools and
                        educational institutions.
                        <br /><br />
                        From admissions and fees to academics, staff, and parent
                        communication — Helios ensures efficiency, transparency,
                        and complete control.
                    </p>
                </motion.div> */}

                {/* Image */}
                <MediaFrame>
                    <Image
                        src="/helios/admin_dashboard.png"
                        alt="Helios Admin Dashboard"
                        fill
                        className="object-contain"
                        priority={false}
                    />
                </MediaFrame>
            </div>
        </section>
    );
}
