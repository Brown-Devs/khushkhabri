// components/SikhTemplateDesktop.jsx

import Hero from "./hero";
import EventsSection from "./events";
import GallerySection from "./gallery";
import CountdownSection from "./CountdownSection";

export default function SikhTemplateDesktop({ invitation, events, weddingDate }) {
    return (
        <div className="w-full min-h-screen bg-[#fffaf5] flex justify-center">
            <div className="w-full max-w-[1100px] bg-white shadow-xl rounded-xl overflow-hidden">

                {/* Hero Full Width */}
                <Hero invitation={invitation} />

                {/* Content Sections with padding */}
                <div className="px-10 py-12 space-y-16">
                    <EventsSection events={events} />
                    <GallerySection invitation={invitation} />
                    <CountdownSection weddingDate={weddingDate} />
                </div>

            </div>
        </div>
    );
}