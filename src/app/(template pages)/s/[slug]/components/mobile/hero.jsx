"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import HeroTop from "./HeroTop";
import HeroBottom from "./HeroBottom";
import FloatingIcons from "./FloatingIcons";

export default function Hero({ invitation }) {
    const { bride, groom } = invitation?.weddingDetails || {};
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative w-full font-serif h-fit max-h-[2200px] overflow-hidden">

            {/* ✅ MAIN IMAGE (NOT BACKGROUND) */}
            <img
                src="/templates/sikh/hero24.png"
                alt="bg"
                className="w-full h-auto object-cover"
            />           

            {/* ✅ OVERLAY CONTENT */}
            <div className="absolute inset-0 z-10 flex flex-col">

                <HeroTop bride={bride} groom={groom} />
                <HeroBottom invitation={invitation} />

              
            </div>

        </section>
    );
}