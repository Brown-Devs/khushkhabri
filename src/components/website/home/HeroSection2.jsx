"use client"
// components/HeroSection2.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroSection2() {
    const [isMobile, setIsMobile] = useState(false);
    const [isVerySmallScreen, setIsVerySmallScreen] = useState(false);
    const [win, setWin] = useState({ w: 1200, h: 800 });
    const [showIntro, setShowIntro] = useState(true);
    const [animationStage, setAnimationStage] = useState("entering"); 
    const [wordsVisible, setWordsVisible] = useState([false, false, false]);

    const blueColor = "#0077c8";

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 500);
            setIsVerySmallScreen(width <= 380);
            setWin({ w: width, h: window.innerHeight });
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Word drop animation sequence
    useEffect(() => {
        const timers = [];

        // Show words one by one
        timers.push(setTimeout(() => {
            setWordsVisible([true, false, false]);
        }, 300));

        timers.push(setTimeout(() => {
            setWordsVisible([true, true, false]);
        }, 800));

        timers.push(setTimeout(() => {
            setWordsVisible([true, true, true]);
        }, 1300));

        // After all words are shown, wait then start fade out animation
        timers.push(setTimeout(() => {
            setAnimationStage("exiting");
        }, 2300));

        // After exit animation, hide intro
        timers.push(setTimeout(() => {
            setAnimationStage("done");
            setShowIntro(false);
        }, 3500));

        return () => timers.forEach(timer => clearTimeout(timer));
    }, []);

    const baseIcons = [
        { img: "/animated/1.gif", top: isMobile ? "13%" : "15%", left: isMobile ? "5%" : "6%", baseSize: isMobile ? 60 : 95, rotate: -12 },
        { img: "/animated/2.gif", top: isMobile ? "18%" : "49%", left: isMobile ? "45%" : "75%", baseSize: isMobile ? 60 : 95, rotate: 12 },
        { img: "/animated/3.gif", top: isMobile ? "80%" : "64%", left: isMobile ? "10%" : "6%", baseSize: isMobile ? 70 : 125, rotate: -18 },
        { img: "/animated/4.gif", top: isMobile ? "69%" : "76%", left: isMobile ? "44%" : "47%", baseSize: isMobile ? 60 : 95, rotate: 20 },
        { img: "/animated/5.gif", top: isMobile ? "12%" : "15%", left: isMobile ? "76%" : "82%", baseSize: isMobile ? 70 : 95, rotate: -12 },
        { img: "/animated/6.gif", top: isMobile ? "75%" : "72%", left: isMobile ? "74%" : "84%", baseSize: isMobile ? 70 : 125, rotate: 20 },
        { img: "/animated/7.gif", top: isMobile ? "67%" : "39%", left: isMobile ? "-8%" : "16%", baseSize: 78, rotate: -8, desktopOnly: true },
    ];

    const icons = baseIcons.map(ic => {
        let size;
        if (isVerySmallScreen) {
            size = Math.round(ic.baseSize * 0.85);
        } else if (isMobile) {
            size = Math.round(ic.baseSize * 1.25);
        } else {
            size = ic.baseSize;
        }

        const fileName = ic.img.split("/").pop().replace(".gif", ".mp4");
        return { ...ic, size, videoSrc: `/vids/${fileName}` };
    });

    function isPercentLessThan50(value) {
        if (typeof value === "string" && value.endsWith("%")) {
            const num = parseFloat(value.replace("%", ""));
            return num < 50;
        }
        if (typeof value === "number") {
            return value < 50;
        }
        return true;
    }

    const computeInitialOffset = (left, top) => {
        const xFromLeft = isPercentLessThan50(left) ? -win.w : win.w;
        const yFromTop = isPercentLessThan50(top) ? -win.h : win.h;

        let initial = { x: 0, y: 0 };
        let leftNum = typeof left === "string" && left.endsWith("%") ? parseFloat(left) : null;
        let topNum = typeof top === "string" && top.endsWith("%") ? parseFloat(top) : null;

        if (leftNum !== null && Math.abs(leftNum - 50) < 15 && topNum !== null) {
            initial = { x: 0, y: yFromTop };
        } else {
            initial = { x: xFromLeft, y: 0 };
        }

        return initial;
    };

    const textParent = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.4,
            },
        },
    };

    const textItem = {
        hidden: { y: 18, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
    };

    return (
        <>
            {/* INTRO WITH WORD DROP ANIMATION */}
            <AnimatePresence>
                {showIntro && (
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={animationStage === "exiting" ? { opacity: 0 } : { opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="fixed inset-0 flex items-center justify-center z-[9999]"
                        style={{
                            background: "radial-gradient(circle at center, #ffffff 0%, #87cefa 100%)",
                        }}
                    >
                        {/* Main container centered in screen */}
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Words container - stacked vertically */}
                            <div className="flex flex-col items-center justify-center">

                                {/* WELCOME */}
                                <motion.div
                                    initial={{ y: -150, opacity: 0, scale: 1.2 }}
                                    animate={
                                        animationStage === "entering"
                                            ? {
                                                y: wordsVisible[0] ? 0 : -150,
                                                opacity: wordsVisible[0] ? 1 : 0,
                                                scale: wordsVisible[0] ? 1 : 1.2
                                            }
                                            : {
                                                // Keep the words in place during exit - only screen fades
                                                y: 0,
                                                opacity: 1,
                                                scale: 1
                                            }
                                    }
                                    transition={{
                                        type: "spring",
                                        damping: 15,
                                        stiffness: 200,
                                        bounce: 0.6,
                                        delay: wordsVisible[0] ? 0.3 : 0
                                    }}
                                    className="w-full text-center"
                                >
                                    <h3 className="leading-[1.1] uppercase tracking-tight text-[40px] sm:text-5xl lg:text-7xl font-light sm:font-[400] font-anton">
                                        WELCOME
                                    </h3>
                                </motion.div>

                                {/* TO */}
                                <motion.div
                                    initial={{ y: -150, opacity: 0, scale: 1.2 }}
                                    animate={
                                        animationStage === "entering"
                                            ? {
                                                y: wordsVisible[1] ? 0 : -150,
                                                opacity: wordsVisible[1] ? 1 : 0,
                                                scale: wordsVisible[1] ? 1 : 1.2
                                            }
                                            : {
                                                // Keep the words in place during exit - only screen fades
                                                y: 0,
                                                opacity: 1,
                                                scale: 1
                                            }
                                    }
                                    transition={{
                                        type: "spring",
                                        damping: 15,
                                        stiffness: 200,
                                        bounce: 0.6,
                                        delay: wordsVisible[1] ? 0.3 : 0
                                    }}
                                    className="w-full text-center my-4 md:my-6"
                                >
                                    <h3 className="leading-[1.1] uppercase tracking-tight text-[40px] sm:text-5xl lg:text-7xl font-light sm:font-[400] font-anton">
                                        TO
                                    </h3>
                                </motion.div>

                                {/* BROWN DEVS */}
                                <motion.div
                                    initial={{ y: -150, opacity: 0, scale: 1.2 }}
                                    animate={
                                        animationStage === "entering"
                                            ? {
                                                y: wordsVisible[2] ? 0 : -150,
                                                opacity: wordsVisible[2] ? 1 : 0,
                                                scale: wordsVisible[2] ? 1 : 1.2
                                            }
                                            : {
                                                // Keep the words in place during exit - only screen fades
                                                y: 0,
                                                opacity: 1,
                                                scale: 1
                                            }
                                    }
                                    transition={{
                                        type: "spring",
                                        damping: 15,
                                        stiffness: 200,
                                        bounce: 0.6,
                                        delay: wordsVisible[2] ? 0.3 : 0
                                    }}
                                    className="w-full text-center"
                                >
                                    <h3 className="leading-[1.1] uppercase tracking-tight text-[40px] sm:text-5xl lg:text-7xl font-light sm:font-[400] font-anton">
                                        BROWN{" "}
                                        <span
                                            style={{ color: blueColor }}
                                            className="inline-block"
                                        >
                                            DEVS
                                        </span>
                                    </h3>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* MAIN HERO */}
            <section className="relative overflow-hidden min-h-screen flex items-center justify-center pt-10">
                <div
                    className="absolute inset-0 -z-10"
                    style={{
                        background: "radial-gradient(circle at center, #ffffff 0%, #87cefa 100%)",
                    }}
                />

                {icons.map((ic, idx) => {
                    if (ic.desktopOnly && isMobile) return null;

                    const initialOffset = computeInitialOffset(ic.left, ic.top);
                    const delay = 0.25 * idx + 0.2;

                    return (
                        <motion.div
                            key={idx}
                            initial={{ x: initialOffset.x, y: initialOffset.y, opacity: 0, scale: 0.85 }}
                            animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 50, damping: 16, duration: 1.6, delay }}
                            style={{
                                position: "absolute",
                                top: ic.top,
                                left: ic.left,
                                width: ic.size,
                                height: ic.size,
                                zIndex: -10,
                                pointerEvents: "none",
                            }}
                        >
                            <motion.div
                                animate={{ y: ["0%", "-6%", "0%"] }}
                                transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: delay + 0.6 }}
                                className="w-full h-full flex items-center justify-center"
                            >
                                <div
                                    style={{ transform: `rotate(${ic.rotate}deg)` }}
                                    className="rounded-xl bg-white p-3 shadow-sm"
                                >
                                    <video
                                        src={ic.videoSrc}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                        className="object-contain"
                                        style={{
                                            width: Math.round(ic.size * 0.85),
                                            height: Math.round(ic.size * 0.85),
                                        }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    );
                })}

                <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28 text-center">
                    <motion.div
                        variants={textParent}
                        initial="hidden"
                        animate="visible"
                        className="mx-auto"
                    >
                        <motion.p
                            variants={textItem}
                            className="mx-auto leading-[1.1] max-w-[90%] lg:w-[900px] uppercase tracking-tight text-[40px] sm:text-5xl lg:text-7xl font-light sm:font-[400] font-anton"
                        >
                            WE BUILD <span className="text-[#0077c8]">APPS </span> THAT GET <span className="text-[#0077c8]">INVESTORS' </span> ATTENTION
                        </motion.p>

                        <motion.p
                            variants={textItem}
                            className="mt-6 text-base md:text-2xl max-w-2xl mx-auto"
                            style={{ fontFamily: "var(--font-dm-sans)", color: "#1f2937" }}
                        >
                            We help businesses double their Sales with
                            <span className="block mt-1 italic font-bold "> conversion-focused websites</span>
                        </motion.p>

                        <motion.div variants={textItem} className="mt-8 mb-20">
                            <motion.a
                                href="/contact-us"
                                className="inline-block border-[#0f172a] text-[#0f172a] rounded-full border px-6 py-3 text-sm md:text-base font-medium transition-transform hover:scale-[1.02] active:scale-95 hover:bg-white shadow-sm"
                                style={{ fontFamily: "var(--font-poppins)" }}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.96 }}
                            >
                                Connect with Experts
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}