import React from 'react';
import { motion } from 'framer-motion';
import { Dancing_Script, Cormorant_Upright } from 'next/font/google';

const dancingScript = Dancing_Script({ subsets: ['latin'] });
const cormorantUpright = Cormorant_Upright({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700']
});

export default function MessageAndContacts({ invitation }) {
    const contacts = invitation?.satsangDetails?.contacts || [];

    return (
        <section className="relative w-full flex flex-col items-center">

            {/* Upper Section: Message */}
            <div className="relative w-full pt-60 pb-[45vh] flex flex-col items-center text-center px-0">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/templates/guruji/flowersbg.png"
                        alt="flowers bg"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${dancingScript.className} relative z-10 text-[#13351d] text-4xl font-bold leading-relaxed space-y-2 drop-shadow-sm`}
                >
                    <p>Let us come</p>
                    <p>together</p>
                    <p>in</p>
                    <p>gratitude, love</p>
                    <p>& devotion</p>
                    <p>to</p>
                    <p>celebrate</p>
                    <p>Guruji's divine</p>
                    <p>presence.</p>
                </motion.div>
            </div>

            {/* Overlapping Shivji Image */}
            <div className="relative z-30 -mt-[55vh] -mb-[10vh]">
                <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    src="/templates/guruji/shivji.png"
                    alt="Shivji"
                    className="w-[100vw] h-auto drop-shadow-2xl"
                />
            </div>

            {/* Bottom Section: Contacts */}
            <div className="relative w-full flex flex-col items-center pt-24 pb-20">
                {/* Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/templates/guruji/details2.png"
                        alt="details bg"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Contacts Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${cormorantUpright.className} relative z-10 bg-white/30 backdrop-blur-sm px-8 py-12 w-full max-w-[280px] flex flex-col items-center text-center border-[#8b2c3c]/80 border-2 shadow-xl rounded-2xl`}
                >
                    <h3 className={`${dancingScript.className} text-[#13351d] text-4xl font-bold mb-8`}>Our Contacts</h3>

                    <img src="/templates/guruji/divider.png" alt="divider" className="w-40 h-auto mb-8 opacity-80" />

                    <div className="space-y-10 w-full">
                        {contacts.map((contact, index) => (
                            <React.Fragment key={index}>
                                <div className="flex flex-col gap-2">
                                    <span className="text-3xl font-bold text-[#13351d]">{contact.name}</span>
                                    <span className="text-xl text-[#13351d] opacity-90">{contact.phone}</span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                    <img src="/templates/guruji/divider.png" alt="divider" className="w-40 h-auto mt-8 opacity-80 rotate-180" />
                </motion.div>
            </div>
        </section>
    );
}
