// app/blogs/layout.jsx

export const metadata = {
    title: "Technology Blogs | Web, App, AI & Digital Growth Insights - Brown Devs",
    description:
        "Explore expert insights from Brown Devs on web development, mobile apps, AI engineering, e commerce solutions, blockchain, performance marketing and software innovation.",
    keywords: [
        "Brown Devs Blog",
        "Web Development Blog",
        "App Development Blog",
        "AI Development Articles",
        "E Commerce Insights",
        "Blockchain Technology Blog",
        "Performance Marketing Strategies",
        "Software Development Trends"
    ],
    alternates: {
        canonical: "https://www.browndevs.com/blogs",
    },
    openGraph: {
        title: "Technology & Software Development Blogs - Brown Devs",
        description:
            "Stay updated with the latest trends in web development, mobile apps, AI systems, e commerce platforms and digital marketing.",
        url: "https://www.browndevs.com/blogs",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Brown Devs Blog | Tech & Digital Growth Insights",
        description:
            "Insights on web apps, AI, blockchain, marketing and scalable software systems.",
    },
};

export default function Layout({ children }) {
    return (
        <>
            {/* Blog Collection Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Blog",
                        name: "Brown Devs Blog",
                        url: "https://www.browndevs.com/blogs",
                        description:
                            "Technology, AI, software development and digital marketing insights by Brown Devs.",
                        publisher: {
                            "@type": "Organization",
                            name: "Brown Devs",
                            logo: {
                                "@type": "ImageObject",
                                url: "https://www.browndevs.com/logo.png"
                            }
                        }
                    }),
                }}
            />
            {children}
        </>
    );
}