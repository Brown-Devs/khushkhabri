"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.18,
            delayChildren: 0.2,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 60,
        filter: "blur(8px)",
    },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const eventMeta = {
    engagement: {
        title: "Engagement",
        image: "/templates/sikh/engagement2.png",
        icon: "/icons/ring.png",
    },
    haldi: {
        title: "Haldi",
        image: "/templates/sikh/haldi2.png",
        icon: "/icons/haldi3.png",
    },
    mehndi: {
        title: "Mehandi",
        image: "/templates/sikh/mehandi2.png",
        icon: "/icons/mehndi.png",
    },
    cocktail: {
        title: "Cocktail Party",
        image: "/templates/sikh/cocktail2.png",
        icon: "/icons/glass.png",
    },
    anand_karaj: {
        title: "Anand Karaj",
        image: "/templates/sikh/anandKaraj2.png",
        icon: "/icons/khanda.png",
    },
    reception: {
        title: "Reception",
        image: "/templates/sikh/reception2.png",
        icon: "/icons/celebration.png",
    },
};

const normalizeType = (type) => {
    return type.toLowerCase().replace(/\s+/g, "_");
};

function FloatingEventIcons({ icon }) {
    const icons = Array.from({ length: 12 });

    return (
        <>
            {icons.map((_, i) => {
                const left = (i * 13) % 100;
                const top = (i * 17) % 100;

                return (
                    <motion.img
                        key={i}
                        src={icon}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5, y: [0, -10, 0] }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.1,
                        }}
                        className="absolute pointer-events-none"
                        style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            width: "18px",
                            transform: `rotate(${i * 15}deg)`,
                        }}
                    />
                );
            })}
        </>
    );
}

function EventItem({ event, meta }) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-100px",
    });

    return (
        <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="relative flex flex-col items-center z-10 overflow-hidden"
        >
            {/* icons */}
            <FloatingEventIcons icon={meta.icon} />

            {/* Image */}
            <motion.div variants={item} className="w-[450px] relative z-10">
                <img
                    src={meta.image}
                    alt={meta.title}
                    className="w-full h-auto rounded-[24px]"
                />
            </motion.div>

            {/* Title */}
            <motion.h3 variants={item} className="text-white text-6xl mt-6 font-script relative z-10">
                {meta.title}
            </motion.h3>

            {/* Details */}
            <motion.p variants={item} className="text-white text-xl mt-3 font-medium relative z-10">
                {event.date}
            </motion.p>

            <motion.p variants={item} className="text-white text-xl mt-1 relative z-10">
                at {event.location}
            </motion.p>

            <motion.p variants={item} className="text-white text-xl mt-1 mb-2 relative z-10">
                {event.time}
            </motion.p>
        </motion.div>
    );
}

export default function EventsSection({ events = [] }) {
    return (
        <section className="relative w-full overflow-visible font-serif">

            <div
                className="pt-44 pb-60 px-4 text-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/bg/bgRed.png')",
                    backgroundAttachment: "fixed",
                }}
            >
                <p className="text-white text-2xl italic">
                    You are invited to the following
                </p>

                <h2 className="text-white text-6xl mt-8 font-script">
                    Events
                </h2>

                <div className="mt-12 space-y-20">
                    {events.map((event, index) => {
                        const key = normalizeType(event.type);
                        const meta = eventMeta[key];
                        if (!meta) return null;

                        return (
                            <EventItem
                                key={index}
                                event={event}
                                meta={meta}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}