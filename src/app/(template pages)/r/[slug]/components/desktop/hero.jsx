"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import HeroTop from "./HeroTop";

export default function Hero({ invitation }) {
    const { bride, groom } = invitation?.weddingDetails || {};
    const containerRef = useRef(null);


    return (
        <section ref={containerRef} className="relative w-full font-serif h-[150vh]  overflow-visible">

            {/* ✅ MAIN IMAGE (NOT BACKGROUND) */}
            <img
                src="/templates/royal/hero2.png"
                alt="bg"
                className="w-full h-full object-cover"
            />

            {/* ✅ OVERLAY CONTENT */}
            <div className="absolute inset-0 z-10 flex flex-col">
                <HeroTop bride={bride} groom={groom} />
            </div>

        </section>
    );
}