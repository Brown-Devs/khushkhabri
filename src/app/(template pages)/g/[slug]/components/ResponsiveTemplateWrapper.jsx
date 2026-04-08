"use client";

import { useEffect, useState } from "react";
import GurujiTemplateMobile from "./mobile/GurujiTemplateMobile";
import MusicPlayer from "@/components/MusicPlayer";
import GurujiTemplateDesktop from "./desktop/GurujiTemplateDesktop";

export default function ResponsiveTemplateWrapper(props) {
    const [isMobile, setIsMobile] = useState(null);

    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    if (isMobile === null) return null; // prevent hydration mismatch

    return (
        <>
            {isMobile ? <GurujiTemplateMobile {...props} /> :
                <div className="min-h-screen w-full bg-[#fdf6ee]">
                    <div className="w-full max-w-[940px] mx-auto min-h-screen border-x border-[#8b2c3c]/5 shadow-2xl relative bg-white">
                        <GurujiTemplateDesktop {...props} />
                    </div>
                </div>
            }
            {props.invitation?.satsangDetails?.musicUrl && (
                <MusicPlayer url={props.invitation.satsangDetails.musicUrl} />
            )}
        </>
    );
}
