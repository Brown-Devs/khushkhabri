import { connectDB } from "@/lib/mongodb";
import Invitation from "@/models/invitationModel";
import { notFound } from "next/navigation";
import Hero from "./components/hero";
import EventsSection from "./components/events";
import GallerySection from "./components/gallery";
import CountdownSection from "./components/CountdownSection";
import SmoothScroll from "@/components/website/common/SmoothScroll";

export default async function SikhTemplatePage({ params }) {
    const { slug } = await params;

    await connectDB();
    const invitation = await Invitation.findOne({ slug }).lean();

    if (!invitation) {
        return notFound();
    }

    // Map DB events to template format
    const dbEvents = invitation.events || [];
    const templateEvents = dbEvents.filter(e => e.enabled).map(e => {
        let type = e.name.toLowerCase();
        // Theme specific mapping
        if (type === 'wedding') type = 'anand_karaj';
        if (type === 'mehendi') type = 'mehndi';

        return {
            type,
            active: true,
            date: e.date ? new Date(e.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }) : '',
            location: e.venue,
            time: e.time,
        };
    });

    const weddingDate = invitation.weddingDetails?.weddingDate
        ? new Date(invitation.weddingDetails.weddingDate).toISOString().split('T')[0]
        : "2026-03-26";

    return (
        <SmoothScroll>
            <div className="w-full max-w-[680px] mx-auto bg-white shadow-lg">
                <main className="bg-[#fffaf5] min-h-screen flex justify-center">
                    <div className="w-full max-w-5xl">
                        <Hero invitation={JSON.parse(JSON.stringify(invitation))} />
                        <EventsSection events={templateEvents} />
                        <GallerySection invitation={JSON.parse(JSON.stringify(invitation))} />
                        <CountdownSection weddingDate={weddingDate} />
                    </div>
                </main>
            </div>
        </SmoothScroll>
    );
}