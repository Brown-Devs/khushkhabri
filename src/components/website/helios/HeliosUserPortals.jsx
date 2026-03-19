"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import MediaFrame from "@/components/website/common/MediaFrame";

const portals = [
    {
        title: "Admin Panel",
        desc:
            "Complete control over academics, users, finance, and institutional operations from a centralized dashboard.",
        image: "/helios/admin_dashboard.png",
    },
    {
        title: "Teacher Panel",
        desc:
            "Manage classes, attendance, marks, schedules, and announcements with ease.",
        image: "/helios/teacher_dashboard.png",
    },
    {
        title: "Parent Panel",
        desc:
            "Transparent access to fees, attendance, notices, and student progress in real time.",
        image: "/helios/admin_dashboard.png",
    },
    {
        title: "Accountant Panel",
        desc:
            "Track payments, income, expenses, and financial reports with accuracy.",
        image: "/helios/teacher_dashboard.png",
    },
];

export default function HeliosUserPortals() {
    return (
        <section className="py-24 bg-[#f8fafc]">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium text-[#0077c8] mb-3">
                        Dedicated Panels for Every Role
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Helios provides role-based dashboards that ensure clarity,
                        accountability, and efficiency for everyone involved.
                    </p>
                </div>

                {/* Portals */}
                <div className="flex flex-col gap-20">
                    {portals.map((p, i) => {
                        const isOdd = i % 2 === 1;

                        return (
                            <motion.div
                                key={i}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                viewport={{ once: true }}
                                className="grid md:grid-cols-2 gap-12 items-center"
                            >
                                {/* Text */}
                                <div className={isOdd ? "md:order-2" : "md:order-1"}>
                                    <h3 className="text-2xl md:text-4xl font-semibold mb-4">
                                        {p.title}
                                    </h3>
                                    <p className="text-gray-600 text-base md:text-lg">
                                        {p.desc}
                                    </p>
                                </div>

                                {/* Image */}
                                <div className={isOdd ? "md:order-1" : "md:order-2"}>
                                    <MediaFrame>
                                        <div className="relative w-full h-full hv-[280px] md:hv-[340px] lg:hv-[380px]">
                                            <Image
                                                src={p.image}
                                                alt={`${p.title} dashboard`}
                                                fill
                                                className="object-contain"
                                                priority={i === 0}
                                            />
                                        </div>
                                    </MediaFrame>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
