"use client";
import { motion} from "framer-motion";
import { useRef } from "react";
import HeroTop from "./HeroTop";
import HeroBottom from "./HeroBottom";
import FloatingIcons from "./FloatingIcons";
import SmoothScroll from "@/components/website/common/SmoothScroll";

export default function Hero({ invitation }) {
    const { bride, groom } = invitation?.weddingDetails || {};
    const containerRef = useRef(null);

    return (
        <SmoothScroll>
        <section ref={containerRef} className="relative w-full font-serif">

            {/* ✅ MAIN IMAGE (NOT BACKGROUND) */}
            <img
                src="/templates/sikh/hero2.png"
                alt="bg"
                className="w-full h-auto object-cover"
            />
          {/* ICONS LAYER */}
<div className="absolute top-0 left-0 w-full h-[120vh] z-0 overflow-hidden pointer-events-none">
    <FloatingIcons />
</div>
            {/* ✅ OVERLAY CONTENT */}
            <div className="absolute inset-0 z-10 flex flex-col">

                <HeroTop bride={bride} groom={groom} />
                <HeroBottom invitation={invitation} />

                <motion.div
                    initial={{ opacity: 1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute bottom-[-170px] left-0 w-full z-50"
                >
                    <img
                        src="/templates/sikh/temple.png"
                        alt="temple"
                        className="w-full object-contain"
                    />
                </motion.div>
            </div>

        </section>
        </SmoothScroll>
    );
}