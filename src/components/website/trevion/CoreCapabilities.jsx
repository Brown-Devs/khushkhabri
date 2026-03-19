"use client";
import { motion } from "framer-motion";

const features = [
    {
        title: "Lead & Contact Management",
        desc: "Capture, organize, and manage leads and customers from all sources in one place.",
    },
    {
        title: "Sales Pipeline Tracking",
        desc: "Track deals across custom stages with complete visibility into progress.",
    },
    {
        title: "Task & Activity Automation",
        desc: "Automate follow-ups, reminders, and daily sales activities effortlessly.",
    },
    {
        title: "Meeting Scheduling & Team Coordination",
        desc: "Schedule meetings, assign participants, and keep teams aligned.",
    },
    {
        title: "Team Performance Monitoring",
        desc: "Measure productivity, response times, and conversions across teams.",
    },
    {
        title: "Customer Communication History",
        desc: "View a complete timeline of calls, messages, meetings, and notes.",
    },
    {
        title: "Role-Based Access Control",
        desc: "Define permissions and control data visibility across roles.",
    },
    {
        title: "Manual & Bulk Lead Import",
        desc: "Create leads manually or upload bulk leads using CSV to onboard data quickly without friction.",
    },
    {
        title: "Real-Time Lead Assignment & Routing",
        desc: "Automatically assign incoming leads to teams or sales reps based on rules, source, or availability.",
    },
];

const colorThemes = [
    { bg: "bg-blue-50", border: "hover:border-blue-500", dot: "#3b82f6" },
    { bg: "bg-indigo-50", border: "hover:border-indigo-500", dot: "#6366f1" },
    { bg: "bg-emerald-50", border: "hover:border-emerald-500", dot: "#10b981" },
    { bg: "bg-amber-50", border: "hover:border-amber-500", dot: "#f59e0b" },
    { bg: "bg-rose-50", border: "hover:border-rose-500", dot: "#f43f5e" },
    { bg: "bg-cyan-50", border: "hover:border-cyan-500", dot: "#06b6d4" },
    { bg: "bg-violet-50", border: "hover:border-violet-500", dot: "#8b5cf6" },
    { bg: "bg-emerald-50", border: "hover:border-emerald-500", dot: "#10b981" },
    { bg: "bg-rose-50", border: "hover:border-rose-500", dot: "#f43f5e" },
];

export default function CoreCapabilities() {
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
                        Key Functionalities
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Powerful features designed to manage leads, automate workflows,
                        and scale your sales operations with confidence.
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
