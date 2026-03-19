"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "Is Helios suitable for small and large schools?",
        a: "Yes. Helios is built to scale from single-branch schools to large multi-campus institutions.",
    },
    {
        q: "Can Helios manage multiple branches?",
        a: "Absolutely. Multi-branch management is a core feature of Helios.",
    },
    {
        q: "Does Helios support digital attendance?",
        a: "Yes. Teachers can mark their own attendance and record class-wise student attendance digitally, eliminating the need for physical registers.",
    },
    {
        q: "Is student and payment data secure?",
        a: "Yes. Helios follows strict access control and data security best practices.",
    },
    {
        q: "Do parents get real-time access?",
        a: "Parents can access attendance, fees, notices, and student performance in real time.",
    },
];

export default function HeliosFAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="relative py-24 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(circle at top, #ffffff 0%, #eaf4ff 45%, #dbeeff 100%)",
                }}
            />

            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-medium text-[#0077c8] mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                        Everything you need to know about Helios and how it fits your institution.
                    </p>
                </motion.div>

                {/* FAQ Cards */}
                <div className="space-y-4">
                    {faqs.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ y: 16, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                className={`
                  cursor-pointer select-none
                  bg-blue-50
                  border
                  ${isOpen ? "border-[#0077c8]" : "border-transparent"}
                  rounded-2xl
                  p-5 md:p-6
                  transition-all duration-300
                  hover:border-[#0077c8]
                `}
                            >
                                {/* Question */}
                                <div className="flex justify-between items-center gap-4">
                                    <h3 className="text-base md:text-lg font-medium text-slate-900">
                                        {item.q}
                                    </h3>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#0077c8] transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </div>

                                {/* Answer */}
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: "easeOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="mt-4 text-gray-700 text-base leading-relaxed">
                                                {item.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}


// "use client";
// import { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const faqs = [
//     {
//         q: "Is Helios suitable for small and large schools?",
//         a: "Yes. Helios is built to scale from single-branch schools to large multi-campus institutions.",
//     },
//     {
//         q: "Can Helios manage multiple branches?",
//         a: "Absolutely. Multi-branch management is a core feature of Helios.",
//     },
//     {
//         q: "Is student and payment data secure?",
//         a: "Yes. Helios follows strict access control and data security best practices.",
//     },
//     {
//         q: "Do parents get real-time access?",
//         a: "Parents can access attendance, fees, notices, and student performance in real time.",
//     },
// ];

// export default function HeliosFAQs() {
//     const [open, setOpen] = useState(null);

//     return (
//         <section className="py-24 bg-[#f8fafc]">
//             <div className="max-w-5xl mx-auto px-6">
//                 <h2 className="text-3xl md:text-5xl font-medium text-center text-[#0077c8] mb-12">
//                     Frequently Asked Questions
//                 </h2>

//                 <div className="space-y-4">
//                     {faqs.map((f, i) => (
//                         <div
//                             key={i}
//                             className="bg-white rounded-xl p-5 cursor-pointer"
//                             onClick={() => setOpen(open === i ? null : i)}
//                         >
//                             <div className="flex justify-between items-center">
//                                 <h3 className="font-medium">{f.q}</h3>
//                                 <ChevronDown
//                                     className={`transition ${open === i ? "rotate-180" : ""}`}
//                                 />
//                             </div>
//                             {open === i && (
//                                 <p className="text-gray-600 mt-3">{f.a}</p>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
