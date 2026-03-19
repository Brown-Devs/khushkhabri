export const revalidate = 60;

import TestimonialSlider from "@/components/website/home/TestimonialSlider";
import LatestBlogs from "@/components/website/LatestBlogs";
import Contact from "@/components/website/home/Contact";
import HeroSection from "@/components/website/home/HeroSection";
import NavBar from "@/components/website/common/Navbar";
import OurServices from "@/components/website/home/OurServices";
import LetsCreate from "@/components/website/home/LetsCreate";
import BuildingWebsites from "@/components/website/home/BuildingWebsites";
import FAQ from "@/components/website/home/FAQ";
import Footer from "@/components/website/common/Footer";
import Industries from "@/components/website/home/Industries";
import { FAQS } from "@/lib/constants/constantData";
import OurServices2 from "@/components/website/home/OurServices2";
import { getActiveServices } from "@/lib/main/services";
import ContactSection from "@/components/website/common/ContactSection";
import TemplatesSection from "@/components/website/home/TemplatesSection";
import HeroSection3 from "@/components/website/home/HeroSection3";
import ComparisonSection from "@/components/website/home/ComparisonSection";

export default async function Home() {
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
      <div className="relative z-10">
        {/* First Fold (Navbar + Hero) */}
        <div className="flex flex-col min-h-[90dvh] sm:min-h-[100vh]">
          <NavBar />
          <HeroSection3 />
        </div>

        {/* Templates Section */}
        <TemplatesSection />

        {/* UNIFIED BACKGROUND WRAPPER FOR SMOOTH BLENDING */}
        <div
          className="relative w-full z-20 pb-5"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0) 0px, rgba(255,248,249,0.95) 150px, rgba(255,248,249,0.95) calc(100% - 150px), rgba(255,255,255,0) 100%)"
          }}
        >
          {/* Comparison Section (Boring vs Digital) */}
          <ComparisonSection />

          <TestimonialSlider />
          <FAQ />
        </div>

        {/* Contact Section */}
        <div className="pt-0 pb-20 relative z-20">
          <ContactSection bgColor={'bg-white'} />
        </div>
        <Footer />
      </div>
    </div>
  );
}