"use client";
import { motion } from "framer-motion";

const benefits = [
    {
        title: "Faster Lead Response Time",
        desc: "Capture and assign leads instantly so your sales team can respond while interest is high.",
    },
    {
        title: "Complete Sales Visibility",
        desc: "Track every lead, deal stage, meeting, and activity from a single unified dashboard.",
    },
    {
        title: "Higher Team Productivity",
        desc: "Automated tasks, reminders, and scheduling reduce manual work and keep teams focused.",
    },
    {
        title: "Better Conversion Rates",
        desc: "Real-time Meta lead sync and structured pipelines ensure no opportunity is missed.",
    },
    {
        title: "Scalable & Secure Operations",
        desc: "Role-based access control and centralized data make Trevion reliable as your team grows.",
    },
];

export default function TrevionBenefits() {
    return (
        <section className="relative py-10 sm:py-24 overflow-hidden">
            {/* Subtle radial background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(circle at top, #ffffff 0%, #eaf4ff 45%, #dbeeff 100%)",
                }}
            />

            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-medium text-[#0077c8] mb-3">
                        Benefits of Using Trevion
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Trevion helps teams move faster, stay organized, and convert more leads
                        with clarity and control.
                    </p>
                </motion.div>

                {/* Benefits Cards */}
                <div className="max-w-4xl mx-auto flex flex-col gap-6">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 24, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.06 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -4, scale: 1.01 }}
                            className="
                group
                relative
                p-6 md:p-8
                rounded-2xl
                bg-blue-50
                border border-transparent
                hover:border-[#0077c8]
                hover:shadow-xl
                transition-all duration-300
              "
                        >
                            {/* Decorative radial overlay */}
                            <div
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    background:
                                        "radial-gradient(circle at top left, rgba(0,119,200,0.15), transparent 60%)",
                                }}
                            />

                            {/* Content */}
                            <div className="relative z-10 flex gap-6 items-start">
                                {/* Number */}
                                <div className="text-4xl md:text-5xl font-semibold text-[#0077c8]/70 leading-none">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                {/* Text */}
                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 text-base leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
