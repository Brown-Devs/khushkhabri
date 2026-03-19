"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
    { name: "Website Leads", logo: "/website.png" },
    { name: "Meta Ads", logo: "/meta.png" },
    { name: "IndiaMART", logo: "/indiamart.png" },
    { name: "Justdial", logo: "/justdial.png" },
    { name: "99acres", logo: "/99acres.png" },
    { name: "MagicBricks", logo: "/magicbricks.png" },
    { name: "Housing.com", logo: "/housing.png" },
    { name: "WhatsApp", logo: "/whatsapp.png" },
];

export default function TrevionIntegrations() {
    return (
        <section className="py-24 bg-[#f5faff]">
            <div className="max-w-7xl mx-auto px-6 text-center">
                {/* Header */}
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-medium text-slate-900"
                >
                    All Your Leads. <span className="text-[#0077c8]">One CRM.</span>
                </motion.h2>

                <motion.p
                    initial={{ y: 16, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="mt-4 text-gray-600 max-w-3xl mx-auto"
                >
                    Automatically capture leads from all major platforms
                    directly into Trevion — no manual work, no missed opportunities.
                </motion.p>

                {/* Logos Grid */}
                <div className="mt-16 mx-auto sm:max-w-4xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {integrations.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            {/* Logo Card */}
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-sm flex items-center justify-center hover:shadow-md transition">
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    width={56}
                                    height={56}
                                    className="object-contain"
                                />
                            </div>

                            {/* Label */}
                            <p className="mt-3 text-sm md:text-base text-gray-700 font-medium">
                                {item.name}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Footer line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-16 text-[#0077c8] font-medium"
                >
                    Every lead. Every platform. One powerful CRM.
                </motion.p>
            </div>
        </section>
    );
}

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const integrations = [
//     { name: "Website Leads", logo: "/website.png" },
//     { name: "Meta Ads", logo: "/meta.png" },
//     { name: "IndiaMART", logo: "/indiamart.png" },
//     { name: "Justdial", logo: "/justdial.png" },
//     { name: "99acres", logo: "/99acres.png" },
//     { name: "MagicBricks", logo: "/magicbricks.png" },
//     { name: "Housing.com", logo: "/housing.png" },
//     { name: "WhatsApp", logo: "/whatsapp.png" },
// ];

// export default function TrevionIntegrations() {
//     return (
//         <section className="relative py-24 overflow-hidden">
//             {/* Subtle background */}
//             <div
//                 className="absolute inset-0 -z-10"
//                 style={{
//                     background:
//                         "radial-gradient(circle at top, #ffffff 0%, #eaf4ff 55%, #dbeeff 100%)",
//                 }}
//             />

//             <div className="max-w-7xl mx-auto px-6 text-center">
//                 {/* Header */}
//                 <motion.h2
//                     initial={{ y: 20, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                     className="text-3xl md:text-5xl font-medium text-slate-900"
//                 >
//                     All Your Leads. <span className="text-[#0077c8]">One CRM.</span>
//                 </motion.h2>

//                 <motion.p
//                     initial={{ y: 16, opacity: 0 }}
//                     whileInView={{ y: 0, opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.1 }}
//                     viewport={{ once: true }}
//                     className="mt-4 text-gray-600 max-w-3xl mx-auto"
//                 >
//                     Automatically capture leads from all major platforms
//                     directly into Trevion — no manual work, no missed opportunities.
//                 </motion.p>

//                 {/* Hub & Spoke */}
//                 <div className="relative mt-20 flex justify-center items-center">
//                     {/* Center CRM */}
//                     <motion.div
//                         initial={{ scale: 0.9, opacity: 0 }}
//                         whileInView={{ scale: 1, opacity: 1 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="relative z-10 w-28 h-28 rounded-2xl bg-white shadow-xl flex items-center justify-center"
//                     >
//                         <Image
//                             src="/trevion/logo.png" // Trevion icon only
//                             alt="Trevion CRM"
//                             width={64}
//                             height={64}
//                         />
//                     </motion.div>

//                     {/* Integrations */}
//                     <div className="absolute inset-0 flex flex-wrap justify-center gap-10 max-w-4xl mx-auto">
//                         {integrations.map((item, i) => (
//                             <motion.div
//                                 key={item.name}
//                                 initial={{ opacity: 0, scale: 0.8 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.4, delay: i * 0.05 }}
//                                 viewport={{ once: true }}
//                                 className="w-28 flex flex-col items-center gap-2"
//                             >
//                                 <div className="w-20 h-20 rounded-xl bg-white shadow-md flex items-center justify-center">
//                                     <Image
//                                         src={item.logo}
//                                         alt={item.name}
//                                         width={48}
//                                         height={48}
//                                         className="object-contain"
//                                     />
//                                 </div>
//                                 <p className="text-sm text-gray-700 text-center">
//                                     {item.name}
//                                 </p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Footer line */}
//                 <motion.p
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     transition={{ duration: 0.6, delay: 0.3 }}
//                     viewport={{ once: true }}
//                     className="mt-24 text-[#0077c8] font-medium"
//                 >
//                     Every lead. Every platform. One powerful CRM.
//                 </motion.p>
//             </div>
//         </section>
//     );
// }