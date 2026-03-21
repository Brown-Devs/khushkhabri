// components/SikhTemplateMobile.jsx

import Hero from "./hero";
import EventsSection from "./events";
import GallerySection from "./gallery";
import CountdownSection from "./CountdownSection";

export default function SikhTemplateMobile({ invitation, events, weddingDate }) {
    return (
        <div className="w-full max-w-[680px] mx-auto bg-white shadow-lg overflow-x-hidden">
            <main className="bg-[#fffaf5] min-h-screen flex justify-center">
                <div className="w-full max-w-5xl">
                    <Hero invitation={invitation} />
                    <EventsSection events={events} />
                    <GallerySection invitation={invitation} />
                    <CountdownSection weddingDate={weddingDate} />
                </div>
            </main>
        </div>
    );
}