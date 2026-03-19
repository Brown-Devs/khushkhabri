"use client";

import React, { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaPhone, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactSection({bgColor}) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Message sent successfully");

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section className="w-[95%] lg:w-[85%] max-w-6xl mx-auto pb-6">
      <div className={`border border-[#e7d3d7] rounded-xl p-8 lg:p-12 ${bgColor || ''}`}>
        {/* heading */}

        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#4b0f1a] mb-3">
            Let’s Create Your Special Invitation
          </h2>

          <p className="text-gray-600 max-w-lg mx-auto text-sm lg:text-base">
            Have questions about your invitation website or need help getting
            started Send us a message and we will happily assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* left side */}

          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-semibold text-[#4b0f1a] mb-6">
                Contact Details
              </h3>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-[#7a2535]" />
                  <a href="mailto:khushkhabari@gmail.com">
                    khushkhabari@gmail.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone className="text-[#7a2535]" />
                  <a href="tel:+918878789898">+91 8878789898</a>
                </div>
              </div>
            </div>

            {/* wedding image */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-10 flex-grow flex justify-center lg:justify-start"
            >
              <Image
                src="/contact-sticker.png"
                alt="Wedding Illustration"
                width={260}
                height={260}
                className="opacity-90 h-full w-auto"
              />
            </motion.div>
          </div>

          {/* form */}

          <form onSubmit={handleSubmit} className="space-y-3">
            <InputField
              icon={<FaUser />}
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <InputField
              icon={<FaPhone />}
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <InputField
              icon={<FaEnvelope />}
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your invitation"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-[#7a2535]"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#7a2535] text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#5c1a27] transition"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <FaPaperPlane />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>

      <Toaster position="top-right" />
    </section>
  );
}

function InputField({ icon, ...props }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7a2535]">
        {icon}
      </div>

      <input
        {...props}
        className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3 focus:outline-none focus:border-[#7a2535]"
      />
    </div>
  );
}
