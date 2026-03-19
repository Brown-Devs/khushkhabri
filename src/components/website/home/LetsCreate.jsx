'use client'

import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5, // har child ke beech ka delay
        },
    },
}

const popUp = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut' },
    },
}

function LetsCreate() {
    return (
        <div className="w-[95vw] max-w-[1400px] rounded-3xl min-h-[40vh] mt-8 sm:min-h-[50vh] md:min-h-[60vh] bg-[#22292F] text-white mx-auto flex items-center justify-center flex-col text-center px-4">
            {/* Wrapper that controls all children */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.6 }} // mid-screen par trigger
                className="flex flex-col items-center"
            >
                {/* First line */}
                <motion.p
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight"
                    variants={popUp}
                >
                    Let's create your
                </motion.p>

                {/* Second line */}
                <motion.p
                    className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-8 sm:mb-8 md:mb-10 leading-tight"
                    variants={popUp}
                >
                    next big idea.
                </motion.p>

                {/* Button */}
                <motion.div variants={popUp}>
                    <Link href="/contact-us">
                        <motion.button
                            className="border-2 border-white rounded-full px-6 py-2 sm:px-10 sm:py-3 md:px-12 md:py-3 text-lg sm:text-xl md:text-2xl font-bold hover:text-[#22292F] hover:bg-white transition-all"
                            animate={{
                                scale: [1, 1.05, 1],
                                rotate: [0, 1.5, -1.5, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            Contact Us
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default LetsCreate
