"use client";
import { motion } from "framer-motion";
import MediaFrame from "@/components/website/common/MediaFrame";

const modules = [
    "Lead Management",
    "Sales Pipeline",
    "Meeting Scheduling",
    "Task Automation",
    "Team & Role Management",
    "Analytics & Reports",
];

export default function TrevionModules() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-10"
                >
                    Inside the Trevion Platform
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ul className="space-y-4 font-medium text-lg">
                        {modules.map((m, i) => (
                            <li key={i}>• {m}</li>
                        ))}
                    </ul>

                    <MediaFrame>
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                            Module Screenshot
                        </div>
                    </MediaFrame>
                </div>
            </div>
        </section>
    );
}