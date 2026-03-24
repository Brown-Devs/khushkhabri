// "use client";

// import { useEffect } from "react";
// import Lenis from "lenis";

// export default function SmoothScroll({ children }) {
//     useEffect(() => {
//         const lenis = new Lenis({
//             duration: 2.2,
//             lerp: 0.05,
//             direction: "vertical",
//             gestureDirection: "vertical",
//             smooth: true,
//             mouseMultiplier: 1.1,
//             touchMultiplier: 2,
//             smoothTouch: true,
//             syncTouch: true,
//             infinite: false,
//         });

//         function raf(time) {
//             lenis.raf(time);
//             requestAnimationFrame(raf);
//         }

//         requestAnimationFrame(raf);

//         return () => {
//             lenis.destroy();
//         };
//     }, []);

//     return <>{children}</>;
// }

"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
    useEffect(() => {

        const isMobile = window.innerWidth <= 768;

        const lenis = new Lenis({
            smoothWheel: true,
            smoothTouch: true,

            // 💎 cinematic smoothness
           touchMultiplier: 0.3,
duration: 1.8,
lerp: 0.05,
            wheelMultiplier: 0.7,

            // ❌ important
            syncTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return <>{children}</>;
}