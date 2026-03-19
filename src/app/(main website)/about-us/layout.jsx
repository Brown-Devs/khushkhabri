// app/about-us/layout.jsx

export const metadata = {
    title: "About Brown Devs | Web, App, AI & Software Development Company",
    description:
        "Brown Devs is a technology driven web and app development company delivering AI solutions, e commerce platforms, blockchain systems and performance marketing strategies for businesses worldwide.",
    keywords: [
        "Brown Devs",
        "About Brown Devs",
        "Brown Devs Company",
        "Web Development Company",
        "Mobile App Development Company",
        "AI Development Services",
        "E Commerce Development",
        "Blockchain Development Company",
        "Performance Marketing Agency",
        "Software Development India"
    ],
    openGraph: {
        title: "About Brown Devs | Technology & Digital Growth Experts",
        description:
            "Discover how Brown Devs builds scalable web applications, mobile apps, AI systems, blockchain solutions and digital marketing strategies that drive measurable business growth.",
        images: [
            {
                url: "/logo.png",
                width: 1200,
                height: 630,
                alt: "Brown Devs - Web & App Development Company",
            },
        ],
        url: "https://www.browndevs.com/about-us",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Brown Devs | Web & App Development Company",
        description:
            "We help startups and enterprises scale with web development, mobile apps, AI engineering, e commerce systems and performance marketing.",
        images: ["/logo.png"],
    },
    alternates: {
        canonical: "https://www.browndevs.com/about-us",
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function Layout({ children }) {
    return (
        <>
            {/* Structured Data for About Page */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        name: "About Brown Devs",
                        url: "https://www.browndevs.com/about-us",
                        description:
                            "Brown Devs is a web and app development company providing AI, blockchain, e commerce and performance marketing solutions.",
                        mainEntity: {
                            "@type": "Organization",
                            name: "Brown Devs",
                            url: "https://www.browndevs.com",
                        },
                    }),
                }}
            />
            {children}
        </>
    );
}