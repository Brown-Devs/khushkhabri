"use client";
import { motion } from "framer-motion";

const STATIC_ICONS = [
    // Left side - fixed positions
    { src: "/icons/30.png", left: "3%", top: "1%" },
    { src: "/icons/31.png", left: "12%", top: "11%" },
    { src: "/icons/32.png", left: "5%", top: "20%" },
    { src: "/icons/30.png", left: "18%", top: "6%" },
    { src: "/icons/31.png", left: "8%", top: "30%" },
    { src: "/icons/32.png", left: "20%", top: "18%" },

    // Right side - fixed positions (mirrored feel)
    { src: "/icons/31.png", left: "94%", top: "4%" },
    { src: "/icons/32.png", left: "85%", top: "11%" },
    { src: "/icons/30.png", left: "92%", top: "20%" },
    { src: "/icons/31.png", left: "78%", top: "6%" },
    { src: "/icons/32.png", left: "89%", top: "30%" },
    { src: "/icons/30.png", left: "76%", top: "18%" },
];

export default function FloatingIcons() {
    return (
        <>
            {STATIC_ICONS.map((icon, i) => (
                <motion.img
                    key={i}
                    src={icon.src}
                    style={{
                        position: "absolute",
                        left: icon.left,
                        top: icon.top,
                    }}
                    className="w-12 md:w-14 opacity-80 pointer-events-none"
                    animate={{
                        y: [0, -12, 0],
                        rotate: [0, 4, -4, 0],
                    }}
                    transition={{
                        duration: 3.5 + (i % 4) * 0.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: (i % 5) * 0.4,
                    }}
                />
            ))}
        </>
    );
}