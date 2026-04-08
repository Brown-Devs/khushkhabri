import React from 'react';
import { motion } from 'framer-motion';
import { Dancing_Script, Cormorant_Upright } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const cormorantUpright = Cormorant_Upright({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
});

export default function Details({ invitation }) {
    const details = invitation?.satsangDetails || {};

    // Formatting date
    const dateObj = details.date ? new Date(details.date) : new Date();
    const dayName = dateObj.toLocaleDateString('en-IN', { weekday: 'long' });
    const dayNum = dateObj.toLocaleDateString('en-IN', { day: 'numeric' });
    const monthName = dateObj.toLocaleDateString('en-IN', { month: 'short' });
    const year = dateObj.toLocaleDateString('en-IN', { year: 'numeric' });

    return (
        <section className="relative w-full z-10 -mt-[40vh] font-serif flex flex-col items-center pb-10">
            {/* Background Images Layer */}
            <div className="absolute inset-0 z-0 flex flex-col w-full h-full">
                <img src="/templates/guruji/details.png" alt="bg1" className="w-full h-auto object-cover object-top" />
                <div
                    className="w-full flex-1"
                    style={{
                        backgroundImage: "url('/templates/guruji/details2.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "top"
                    }}
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col items-center w-full px-0 pt-[30vh] pb-24">

                {/* Ganesh Ji */}
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    src="/templates/guruji/ganeshji2.png"
                    alt="Ganesh ji"
                    className="w-[100vw] h-auto mb-9 drop-shadow-xl saturate-150"
                />

                {/* Jai Guruji Text */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`${dancingScript.className} text-[#102d18] text-6xl mb-10 font-black text-shadow-lg`}
                >
                    Jai Guruji
                </motion.h2>

                {/* Guruji Image (Framed) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative z-20 -mb-14 px-4"
                >
                    <img
                        src="/templates/guruji/guruji.png"
                        alt="Guruji"
                        className="w-full max-w-[310px] h-auto drop-shadow-2xl"
                    />
                </motion.div>

                {/* Transparent Details Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${cormorantUpright.className} bg-white/30  px-8 pt-24 pb-66 w-full max-w-[280px] flex flex-col items-center text-center relative border-x-2 border-[#8b2c3c]/80 border-b-2 shadow-2xl rounded-2xl`}
                >
                    <h3 className="text-[#13351d] text-4xl mt-3 font-bold mb-5 tracking-tight">{details.invitorName || 'Khanna Family'}</h3>
                    <p className="text-[#13351d] text-2xl mb-6 italic opacity-80 leading-relaxed">cordially invite<br />you to</p>

                    <h4 className="text-[#13351d] text-4xl font-bold mb-4 leading-relaxed">Guruji's <br />Divine Satsang</h4>

                    <img src="/templates/guruji/divider.png" alt="divider" className="w-[220px] h-auto my-4 opacity-80" />

                    <div className="mt-4 text-[#13351d] space-y-10 w-full">
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl lowercase opacity-70 font-bold italic">on</span>
                            <div className="flex flex-col gap-1">
                                <span className="text-2xl font-bold">{dayName}, {dayNum} {monthName} {year}</span>
                                <span className="text-xl opacity-90">{details.time || '12 PM Onwards'}</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <span className="text-2xl  lowercase opacity-70 font-bold italic">venue</span>
                            <span className="text-2xl font-bold w-full whitespace-pre-wrap leading-tight">{details.venue || 'Khanna Residence\nAshoka Society\nNew Delhi'}</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
