// components/ResponsiveTemplateWrapper.jsx
"use client";

import { useEffect, useState } from "react";
import RoyalTemplateMobile from "./mobile/RoyalTemplateMobile";

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

    return isMobile
        ? <RoyalTemplateMobile {...props} />
        : <div>Desktop</div>
}