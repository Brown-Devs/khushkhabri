"use client";
import React, { useState } from "react";
import Image from "next/image";

/** Helios modules data */
const modules = [
    {
        name: "Administration",
        color: "#3B82F6",
        icon: "/helios/administration.gif",
        desc: [
            "Centralized admin dashboard",
            "Multi-branch management",
            "User roles & permissions",
            "Visitor management",
            "Complaint handling system",
        ],
    },
    {
        name: "Academics",
        color: "#10B981",
        icon: "/helios/academics.gif",
        desc: [
            "Class & session management",
            "Digital attendance",
            "Digital marksheets",
            "Teacher panel access",
            "Academic calendar control",
        ],
    },
    {
        name: "Finance",
        color: "#F59E0B",
        icon: "/helios/finance.gif",
        desc: [
            "Advanced fee management",
            "Online & offline payment tracking",
            "Income & expense management",
            "Accountant panel access",
        ],
    },
    {
        name: "Communication",
        color: "#8B5CF6",
        icon: "/helios/communication.gif",
        desc: [
            "School-wide announcements",
            "Admission enquiry system",
            "Parent communication panel",
            "Real-time notifications",
        ],
    },
];

/** mix color with white to create a light variant (amount 0..1) */
function lightenHex(hex, amount = 0.78) {
    const h = hex.replace("#", "");
    const r = parseInt(h.substring(0, 2), 16);
    const g = parseInt(h.substring(2, 4), 16);
    const b = parseInt(h.substring(4, 6), 16);
    const rn = Math.round(r + (255 - r) * amount);
    const gn = Math.round(g + (255 - g) * amount);
    const bn = Math.round(b + (255 - b) * amount);
    const toHex = (v) => v.toString(16).padStart(2, "0");
    return `#${toHex(rn)}${toHex(gn)}${toHex(bn)}`;
}

export default function HeliosKeyModules() {
    const [activeModule, setActiveModule] = useState(null);

    return (
        <section className="py-8 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-10">
                    <h2 className="text-4xl md:text-6xl font-medium mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                        <span className="text-black"> Key Modules</span> of Helios
                    </h2>
                    <p className="text-sm md:text-lg text-slate-600 max-w-3xl mx-auto px-6">
                        Every module is purpose-built to simplify and scale real-world school operations.
                    </p>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {modules.map((item, idx) => {
                        const light = lightenHex(item.color, 0.9);
                        const isActive = activeModule === idx;

                        return (
                            <div
                                key={idx}
                                className="relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer bg-white
                h-64 sm:h-72 lg:h-80"
                                onMouseEnter={() => setActiveModule(idx)}
                                onMouseLeave={() => setActiveModule(null)}
                                style={{
                                    border: `2px solid ${item.color}`,
                                }}
                            >
                                {/* Background pattern */}
                                <div
                                    className="absolute inset-0 opacity-10 lg:group-hover:opacity-20 transition-opacity duration-500"
                                    style={{
                                        backgroundImage: `radial-gradient(${item.color} 1px, transparent 1px)`,
                                        backgroundSize: "16px 16px",
                                    }}
                                />

                                {/* Content */}
                                <div className="relative h-full flex flex-col items-center justify-center p-6 z-10 transition-all duration-500">
                                    {/* Icon */}
                                    <div className="transition-all duration-500 mb-5 lg:group-hover:mb-3 lg:group-hover:scale-90">
                                        <div
                                            className="w-20 h-20 rounded-2xl flex items-center justify-center"
                                            style={{ backgroundColor: light }}
                                        >
                                            <Image
                                                src={item.icon}
                                                alt={item.name}
                                                width={64}
                                                height={64}
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 text-center mb-0 transition-all duration-300">
                                        {item.name}
                                    </h3>

                                    {/* Description */}
                                    <div
                                        className={`overflow-hidden transition-all duration-700 
                      ${isActive
                                                ? "h-56 opacity-100"
                                                : "h-auto opacity-100 lg:h-0 lg:opacity-0 lg:group-hover:h-56 lg:group-hover:opacity-100"
                                            }`}
                                    >
                                        <ul className="mt-3 space-y-1 text-slate-700 text-sm text-center leading-snug">
                                            {item.desc.map((point, i) => (
                                                <li key={i} className="flex justify-center gap-1">
                                                    <span>•</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>

                                {/* Hover border effect */}
                                <div
                                    className="absolute inset-0 rounded-2xl border-2 pointer-events-none transition-all duration-300 opacity-0 lg:group-hover:opacity-100"
                                    style={{ borderColor: item.color }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
