import Hero from "./components/hero";
import EventsSection from "./components/events";
import GallerySection from "./components/gallery";
import CountdownSection from "./components/CountdownSection";

export default function SikhTemplatePage() {

    const events = [
        {
            type: "engagement",
            active: true,
            date: "25 Feb 2026",
            location: "Rambagh, Jaipur",
            time: "9 PM Onwards",
        },
        {
            type: "haldi",
            active: true,
            date: "26 Feb 2026",
            location: "Rambagh, Jaipur",
            time: "9 PM Onwards",
        },
        {
            type: "mehandi",
            active: true,
            date: "26 Feb 2026",
            location: "Rambagh, Jaipur",
            time: "9 PM Onwards",
        },
        {
            type: "Cocktail Party",
            active: true,
            date: "26 Feb 2026",
            location: "Rambagh, Jaipur",
            time: "9 PM Onwards",
        },
        {
            type: "Anand Karaj",
            active: true,
            date: "26 Feb 2026",
            location: "Rambagh, Jaipur",
            time: "9 PM Onwards",
        },
        {
            type: "Reception",
            active: true,
            date: "26 Feb 2026",
            location: "Rambagh, Jaipur",
            time: "9 PM Onwards",
        },
    ];

    return (
        <div className="w-full max-w-[680px] mx-auto bg-white shadow-lg">
            <main className="bg-[#fffaf5] min-h-screen flex justify-center">
                <div className="w-full max-w-5xl">
                    <Hero />
                    <EventsSection events={events} />
                    <GallerySection />
                    <CountdownSection weddingDate="2026-03-26" />
                </div>
            </main>
        </div>
    );
}