"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useMemo } from "react";

export default function FloatingIcons() {
    const { scrollY } = useScroll();

    const smoothScroll = useSpring(scrollY, {
        stiffness: 50,
        damping: 20,
    });

    const icons = useMemo(() => {
        return Array.from({ length: 24 }).map(() => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: (25 + Math.random() * 25) * 1.5, // 🔥 1.5x size
            depth: 0.3 + Math.random() * 0.7,
            delay: Math.random() * 0.6,
            rotate: -20 + Math.random() * 40, // 🔥 random tilt (-20 to +20)
        }));
    }, []);

    return (
        <>
            {icons.map((icon, i) => {

                const y = useTransform(
                    smoothScroll,
                    [0, 500],
                    [0, 120 * icon.depth]
                );

                return (
                    <motion.img
                        key={i}
                        src="/icons/34.png"
                        initial={{
                            y: 80,
                            opacity: 0,
                            rotate: icon.rotate - 10,
                        }}
                        animate={{
                            y: 0,
                            opacity: 0.7,
                            rotate: icon.rotate,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: icon.delay,
                            ease: "easeOut",
                        }}
                        style={{
                            position: "absolute",
                            left: `${icon.left}%`,
                            top: `${icon.top}%`,
                            width: `${icon.size}px`,
                            y,
                            rotate: icon.rotate, // 🔥 static tilt maintain
                        }}
                        className="pointer-events-none"
                    />
                );
            })}
        </>
    );
}