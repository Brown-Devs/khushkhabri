"use client";

export default function HeliosCTA() {
    return (
        <section className="py-24 bg-[#22292F] text-white text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Need a modern, AI-enabled system for your school?
            </h2>

            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Book a personalized demo and see how Helios simplifies academics, attendance,
                administration, and communication for your institution.
            </p>

            <a
                href="/contact-us"
                className="inline-block px-8 py-3 bg-white text-black rounded-full font-semibold
                hover:scale-105 transition-transform duration-300"
            >
                Book a Demo
            </a>
        </section>
    );
}
