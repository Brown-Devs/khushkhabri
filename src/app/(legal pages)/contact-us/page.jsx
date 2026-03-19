import React from 'react'
import NavBar from '@/components/website/common/Navbar';
import Footer from '@/components/website/common/Footer';
import ContactSection from '@/components/website/common/ContactSection';
import ContactHero from '@/components/website/home/ContactHero';

export default async function page() {
    return (
        <div className="relative min-h-screen w-full">
            {/* GLOBAL FIXED BACKGROUND FOR PARALLAX */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/bg/pinkbg.png')`, backgroundColor: '#FFEAED' }}
            />
            {/* Shared Overlay */}
            <div className="fixed inset-0 z-0 bg-white/60 backdrop-blur-[2px]" />

            {/* FOREGROUND CONTENT */}
            <div className="relative z-10 flex flex-col">
                <NavBar />
                
                {/* Contact Hero Section */}
                <ContactHero />

                {/* Contact form and details */}
                <div className="pb-20">
                    <ContactSection />
                </div>

                <Footer />
            </div>
        </div>
    )
}

