"use client";
import { motion } from "framer-motion";

const features = [
    {
        title: "Centralized School Dashboard",
        desc: "Get a complete overview of academics, administration, finance, and communication from a single dashboard.",
    },
    {
        title: "Multi-Branch & Session Management",
        desc: "Manage multiple branches, academic sessions, and classes seamlessly from one system.",
    },
    {
        title: "Smart Fees & Payment Tracking",
        desc: "Track fee collections, dues, online payments, and financial records with accuracy.",
    },
    {
        title: "Student Information System",
        desc: "Maintain complete student profiles including academics, attendance, and personal details.",
    },
    {
        title: "Digital Marksheets & Reports",
        desc: "Generate and manage digital marksheets, exams, and academic reports effortlessly.",
    },
    {
        title: "Announcements & Communication",
        desc: "Send notices, announcements, and updates instantly to teachers, parents, and students.",
    },
    {
        title: "Role-Based Access Control",
        desc: "Define user permissions and control access for admins, teachers, parents, and staff.",
    },
    {
        title: "Dedicated User Panels",
        desc: "Separate dashboards for administrators, teachers, parents, and accountants.",
    },
    {
        title: "Digital Attendance Management",
        desc: "Teachers can mark their own attendance and record class-wise student attendance directly from the app, eliminating the need for physical registers.",
    }
];

const colorThemes = [
    { bg: "bg-blue-50", border: "hover:border-blue-500", dot: "#3b82f6" },
    { bg: "bg-indigo-50", border: "hover:border-indigo-500", dot: "#6366f1" },
    { bg: "bg-emerald-50", border: "hover:border-emerald-500", dot: "#10b981" },
    { bg: "bg-amber-50", border: "hover:border-amber-500", dot: "#f59e0b" },
    { bg: "bg-rose-50", border: "hover:border-rose-500", dot: "#f43f5e" },
    { bg: "bg-cyan-50", border: "hover:border-cyan-500", dot: "#06b6d4" },
    { bg: "bg-violet-50", border: "hover:border-violet-500", dot: "#8b5cf6" },
    { bg: "bg-sky-50", border: "hover:border-sky-500", dot: "#0ea5e9" },
    { bg: "bg-amber-50", border: "hover:border-amber-500", dot: "#f59e0b" },
];

export default function HeliosCoreFeatures() {
    return (
        <section className="py-12 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-medium text-[#0077c8] mb-3">
                        Core Features Built for Schools
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        A powerful set of features designed to simplify school operations,
                        improve transparency, and enhance learning management.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((item, i) => {
                        const theme = colorThemes[i % colorThemes.length];

                        return (
                            <motion.div
                                key={i}
                                initial={{ y: 24, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                viewport={{ once: true }}
                                className={`
                  group relative
                  p-6 rounded-2xl
                  ${theme.bg}
                  border border-transparent
                  ${theme.border}
                  transition-all duration-300
                  hover:shadow-lg
                `}
                            >
                                {/* subtle dot pattern */}
                                <div
                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{
                                        backgroundImage: `radial-gradient(${theme.dot} 0.6px, transparent 0.6px)`,
                                        backgroundSize: "18px 18px",
                                    }}
                                />

                                <div className="relative z-10">
                                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
