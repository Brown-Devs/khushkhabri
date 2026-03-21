"use client";
import { motion } from "framer-motion";

const eventMeta = {
    engagement: {
        title: "Engagement",
        image: "/templates/sikh/engagement2.png",
    },
    haldi: {
        title: "Haldi",
        image: "/templates/sikh/haldi2.png",
    },
    mehndi: {
        title: "Mehandi",
        image: "/templates/sikh/mehandi2.png",
    },
    cocktail: {
        title: "Cocktail Party",
        image: "/templates/sikh/cocktail2.png",
    },
    anand_karaj: {
        title: "Anand Karaj",
        image: "/templates/sikh/anandKaraj2.png",
    },
    reception: {
        title: "Reception",
        image: "/templates/sikh/reception2.png",
    },
};

const normalizeType = (type) => {
    return type
        .toLowerCase()
        .replace(/\s+/g, "_"); // "Cocktail Party" -> "cocktail_party"
};

export default function EventsSection({ events = [] }) {
    return (
        <section className="relative w-full overflow-visible font-serif">
            {/* Background IMAGE (static feel) */}
            <div
                className="pt-44 pb-60 px-4 text-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/bg/blue-texture.png')",
                    backgroundAttachment: "fixed",
                }}
            >
                {/* Heading */}
                <p className="text-white text-2xl italic">
                    You are invited to the following
                </p>

                <h2 className="text-white text-6xl mt-8 font-script">
                    Events
                </h2>

                {/* Events */}
                <div className="mt-12 space-y-16">

                    {events.map((event, index) => {
                        const key = normalizeType(event.type);

                        const meta = eventMeta[key];

                        if (!meta) return null;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-col items-center z-10"
                            >

                                {/* Image */}
                                <div className="w-[450px]">
                                    <img
                                        src={meta.image}
                                        alt={meta.title}
                                        className="w-full h-auto rounded-[24px]"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-6xl mt-6 font-script">
                                    {meta.title}
                                </h3>

                                {/* Details */}
                                <p className="text-white text-xl mt-3 font-medium">
                                    {event.date}
                                </p>

                                <p className="text-white text-xl mt-1">
                                    at {event.location}
                                </p>

                                <p className="text-white text-xl mt-1 mb-2">
                                    {event.time}
                                </p>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
            {/* 🔥 Sticker */}
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 1 }}
                className="absolute bottom-[-130px] left-1/2 -translate-x-1/2 z-10 w-full"
            >
                <img
                    src="/templates/sikh/routeSticker.png"
                    alt="route"
                    className="w-full"
                />
            </motion.div>
        </section>
    );
}