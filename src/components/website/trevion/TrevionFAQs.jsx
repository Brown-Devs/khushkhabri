"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Is Trevion suitable for small teams as well as large organizations?",
        a: "Yes. Trevion is designed to scale with your business. Whether you’re a small sales team or a growing organization, Trevion adapts with flexible workflows, permissions, and automation.",
    },
    {
        q: "How does Meta integration work in Trevion?",
        a: "Trevion is an official Meta Business Partner. You can connect your Facebook and Instagram ad accounts directly to Trevion, allowing leads to sync in real time without manual imports or third-party tools.",
    },
    {
        q: "Can I create leads manually or upload leads in bulk?",
        a: "Absolutely. Trevion supports manual lead creation as well as bulk lead uploads, giving you complete flexibility in how leads enter your system.",
    },
    {
        q: "Does Trevion support meeting scheduling and team coordination?",
        a: "Yes. Trevion allows you to schedule meetings directly from leads, assign team members, track outcomes, and maintain a complete activity history.",
    },
    {
        q: "How is data access controlled within teams?",
        a: "Trevion includes role-based access control, allowing you to define permissions and control what different users or teams can view and manage.",
    },
    {
        q: "Is Trevion secure and scalable for growing businesses?",
        a: "Security and scalability are core to Trevion. With centralized data management, access controls, and a scalable architecture, Trevion is built to grow with your business.",
    },
];

export default function TrevionFAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(circle at top, #ffffff 0%, #eaf4ff 45%, #dbeeff 100%)",
                }}
            />

            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-medium text-[#0077c8] mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Everything you need to know about Trevion and how it fits your business.
                    </p>
                </motion.div>

                {/* FAQ Cards */}
                <div className="space-y-4">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ y: 16, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`
                  cursor-pointer select-none
                  bg-blue-50
                  border
                  ${isOpen ? "border-[#0077c8]" : "border-transparent"}
                  rounded-2xl
                  p-5 md:p-6
                  transition-all duration-300
                  hover:border-[#0077c8]
                `}
                            >
                                {/* Question */}
                                <div className="flex justify-between items-center gap-4">
                                    <h3 className="text-base md:text-lg font-medium text-slate-900">
                                        {item.q}
                                    </h3>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#0077c8] transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>

                                {/* Answer */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-gray-700 text-base leading-relaxed">
                                                {item.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
