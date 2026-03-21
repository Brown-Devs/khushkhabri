// components/ResponsiveTemplateWrapper.jsx
"use client";

import { useEffect, useState } from "react";
import SikhTemplateMobile from "./mobile/SikhTemplateMobile";
import SikhTemplateDesktop from "./desktop/SikhTemplateDesktop";

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
        ? <SikhTemplateMobile {...props} />
        : <SikhTemplateDesktop {...props} />;
}