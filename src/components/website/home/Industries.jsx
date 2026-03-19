// components/IndustriesSection.jsx
"use client";
import React, { useState } from "react";
import Image from "next/image";

/** industries data */
const industries = [
    {
        name: "E-Commerce & Retail",
        color: "#FF6B6B",
        desc: "We design high-performance e-commerce solutions with fast online stores, smooth checkout, smart inventory management, and real-time analytics. Our platforms are SEO-optimized to boost sales.",
        icon: "/os/4.png",
    },
    {
        name: "Healthcare & Wellness",
        color: "#3B82F6",
        desc: "We build secure healthcare platforms with HIPAA-aware portals, online appointment systems, and mobile-friendly wellness apps. Designed for patient engagement and smooth digital experiences.",
        icon: "/os/5.png",
    },
    {
        name: "Hospitality & Travel",
        color: "#34D399",
        desc: "We create travel and hospitality platforms with hotel booking engines, reservation systems, and payment gateways. Our solutions improve conversions and deliver seamless booking experiences.",
        icon: "/os/8.png",
    },
    {
        name: "Education & E-Learning",
        color: "#A78BFA",
        desc: "We develop e-learning platforms with interactive courses, LMS integrations, and gamified modules. Our solutions make online education engaging, scalable, and accessible for schools and startups.",
        icon: "/os/9.png",
    },
    {
        name: "Real Estate & Property",
        color: "#F97316",
        desc: "We design real estate websites with advanced property listings, map-based searches, and simple inquiry flows. Our solutions help brokers and developers generate quality leads with ease.",
        icon: "/os/10.png",
    },
    {
        name: "Finance & Startups",
        color: "#F59E0B",
        desc: "We build fintech solutions like secure dashboards, real-time analytics, and expense tracking tools. Tailored for startups and SMEs, our platforms ensure compliance, speed, and scalability.",
        icon: "/os/11.png",
    },
    {
        name: "Manufacturing & Supply Chain",
        color: "#06B6D4",
        desc: "We create manufacturing and supply chain software with inventory tracking, order management, and process automation. Our solutions help businesses improve efficiency.",
        icon: "/os/7.png",
    },
    {
        name: "Local Businesses",
        color: "#EC4899",
        desc: "We design professional websites and booking systems for local businesses like salons, gyms, and restaurants. Our solutions help attract more customers and build a strong digital presence.",
        icon: "/os/6.png",
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

export default function IndustriesSection() {
    const [activeIndustry, setActiveIndustry] = useState(null);

    return (
        <section className="py-8 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-10">
                    <h2 className="text-4xl md:text-6xl font-semibold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-primary">
                        <span className="text-black"> Industries</span> we Serve
                    </h2>
                    <p className="text-sm md:text-lg text-slate-600 max-w-3xl mx-auto px-6">
                        We deliver tailored solutions across diverse sectors, leveraging our expertise to address industry-specific challenges
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {industries.map((item, idx) => {
                        const light = lightenHex(item.color, 0.9);
                        const isActive = activeIndustry === idx;

                        return (
                            <div
                                key={idx}
                                className={`relative rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer bg-white
                    h-64 sm:h-72 lg:h-80`} // tablet screens thodi choti height
                                onMouseEnter={() => setActiveIndustry(idx)}
                                onMouseLeave={() => setActiveIndustry(null)}
                                style={{
                                    border: `2px solid ${item.color}`,
                                }}
                            >
                                {/* Background pattern */}
                                <div
                                    className="absolute inset-0 opacity-10 lg:group-hover:opacity-20 transition-opacity duration-500"
                                    style={{
                                        backgroundImage: `radial-gradient(${item.color} 1px, transparent 1px)`,
                                        backgroundSize: '16px 16px'
                                    }}
                                />

                                {/* Content */}
                                <div className="relative h-full flex flex-col items-center justify-center p-6 z-10 transition-all duration-500">
                                    {/* Icon */}
                                    <div className="transition-all duration-500 mb-5 lg:group-hover:mb-3 lg:group-hover:scale-90">
                                        {item.icon.startsWith("/") ? (
                                            <div className="w-20 h-20 flex items-center justify-center">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.name}
                                                    width={80}
                                                    height={80}
                                                    className="object-contain"
                                                />
                                            </div>
                                        ) : (
                                            <div
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl transition-all duration-300"
                                                style={{ backgroundColor: light }}
                                            >
                                                {item.icon}
                                            </div>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold text-slate-900 text-center mb-0 transition-all duration-300 lg:group-hover:mb-0">
                                        {item.name}
                                    </h3>

                                    {/* Description */}
                                    <div className={`overflow-hidden transition-all duration-700 
                           ${isActive ? "h-56 opacity-100" : "h-auto opacity-100 lg:h-0 lg:opacity-0 lg:group-hover:h-56 lg:group-hover:opacity-100"}`}>
                                        <p className="text-slate-700 text-sm text-center leading-tight mt-2">
                                            {item.desc}
                                        </p>
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