"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const templates = [
    {
        id: 1,
        title: "Royal Crimson",
        category: "Hindu Wedding",
        price: "₹1,499",
        description: "A majestic theme with deep reds and gold accents, perfect for traditional Hindu weddings.",
        image: "/templates/sikh/preview.png",
    },
    {
        id: 2,
        title: "Pastel Elegance",
        category: "Hindu Wedding",
        price: "₹1,499",
        description: "Soft pastels and delicate floral borders for a modern yet traditional celebration.",
        image: "/templates/sikh/invite2.png",

    },
    {
        id: 3,
        title: "Golden Lotus",
        category: "Hindu Wedding",
        price: "₹1,499",
        description: "Classic golden lotus motifs set against a rich, warm backdrop.",
        image: "/templates/sikh/invite3.png",

    },
    {
        id: 4,
        title: "Anand Karaj",
        category: "Sikh Wedding",
        price: "₹1,499",
        description: "Serene and elegant design featuring watercolor florals and the Ek Onkar symbol.",
        image: "/templates/sikh/invite4.png",

    },
    {
        id: 5,
        title: "Divine Bliss",
        category: "Guruji Satsang",
        price: "₹1,499",
        description: "A peaceful and divine layout specifically crafted for Guruji's Satsang invitations.",
        image: "/templates/sikh/invite5.png",

    },
];

export default function TemplatesSection() {
    return (
        <section className="relative w-full pt-20 pb-0 px-4 sm:px-8">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-5xl font-semibold text-[#5a1e2b] tracking-tighter"
                    >
                        Our Exquisite Templates
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-4 text-gray-700 text-lg sm:text-xl"
                    >
                        Browse our handpicked collection of invitation designs
                    </motion.p>
                </div>

                <div className="flex flex-wrap justify-center gap-7 sm:gap-10">
                    {templates.map((theme, index) => (
                        <motion.div
                            key={theme.id}
                            className="flex flex-col items-center bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-white/50 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33%-1.5rem)] max-w-[360px]"
                        >
                            {/* Vertical Image Aspect Ratio Card */}
                            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 bg-gray-100">
                                <Image
                                    src={theme.image}
                                    alt={theme.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#8b2c3c] shadow-sm">
                                    {theme.category}
                                </div>
                            </div>

                            <div className="w-full text-center px-2 flex flex-col flex-1">
                                <h3 className="text-2xl font-semibold text-[#5a1e2b] mb-2">{theme.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-1">{theme.description}</p>
                                <div className="flex items-center justify-between w-full mt-auto pt-4 border-t border-gray-100">
                                    <span className="text-xl font-bold text-[#8b2c3c]">{theme.price}</span>
                                    <button className="px-5 py-2 bg-[#8b2c3c] text-white rounded-full text-sm font-medium hover:bg-[#5a1e2b] transition-colors">
                                        View Demo
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-white text-[#8b2c3c] border border-[#8b2c3c] rounded-full text-lg font-medium hover:bg-[#8b2c3c] hover:text-white transition-colors shadow-sm">
                        View All Templates
                    </button>
                </div>
            </div>
        </section>
    );
}
