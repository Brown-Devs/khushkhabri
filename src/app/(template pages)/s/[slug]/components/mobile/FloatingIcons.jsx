"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FloatingIcons({ slowY }) {

    const baseIcons = ["/icons/30.png", "/icons/31.png", "/icons/32.png"];

    const icons = useMemo(() => {
        const generatedIcons = [];
        const countPerSide = 10;

        // Left side (more spread + organic feel)
        for (let i = 0; i < countPerSide; i++) {
            generatedIcons.push({
                src: baseIcons[i % 3],

                // 🔥 wider + uneven spread
                left: `${Math.random() * 25 + 2}%`, // 2% → 27%

                // ✅ SAME Y RANGE (unchanged)
                top: `${Math.random() * 25 + 2}%`,
            });
        }

        // Right side (mirror spread)
        for (let i = 0; i < countPerSide; i++) {
            generatedIcons.push({
                src: baseIcons[i % 3],

                // 🔥 wider + uneven spread
                left: `${Math.random() * 25 + 73}%`, // 73% → 98%

                // ✅ SAME Y RANGE (unchanged)
                top: `${Math.random() * 25 + 2}%`,
            });
        }

        return generatedIcons;
    }, []);

    return (
        <>
            {icons.map((icon, i) => (
                <motion.img
                    key={i}
                    src={icon.src}
                    style={{
                        left: icon.left,
                        top: icon.top,
                        y: slowY,
                    }}
                    className="absolute w-14 md:w-16 opacity-80 z-0 pointer-events-none"
                    animate={{
                        y: [0, -15, 0],
                        rotate: [0, 6, -6, 0],
                    }}
                    transition={{
                        duration: 5 + (i % 5),
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </>
    );
}