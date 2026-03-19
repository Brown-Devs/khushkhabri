"use client";
import MediaFrame from "@/components/website/common/MediaFrame";

export default function HeliosVideoOverview() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-medium mb-6 text-[#0077c8]">
                    See Helios in Action
                </h2>

                <MediaFrame>
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Helios Platform Video Overview
                    </div>
                </MediaFrame>
            </div>
        </section>
    );
}
