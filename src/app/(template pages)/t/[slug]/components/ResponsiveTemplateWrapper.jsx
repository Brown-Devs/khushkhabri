// components/ResponsiveTemplateWrapper.jsx
"use client";

import { useEffect, useState } from "react";
import TempleTemplateMobile from "./mobile/TempleTemplateMobile";
import MusicPlayer from "@/components/MusicPlayer";

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
            {isMobile ? <TempleTemplateMobile {...props} /> : <div>Desktop</div>}
            <MusicPlayer url={props.invitation?.mainDetails?.musicUrl} />
        </>
    );
}