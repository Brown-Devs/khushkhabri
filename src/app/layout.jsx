// app/layout.jsx
import EnquiryWidget from "@/components/EnquiryWidget";
import "./globals.css";
import { Poppins, Montserrat, DM_Sans, Anton } from "next/font/google";
import ContactWidget from "@/components/ContactWidget";
import Script from "next/script";
import AuthProvider from "@/components/auth/AuthProvider";
import SmoothScroll from "@/components/website/common/SmoothScroll";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  metadataBase: new URL("https://www.khushkhabri.in"),
  title: {
    default: "Khushkhabri - Send Invitations to your close ones ",
    template: "%s | Khushkhabri",
  },
  description:
    "Brown Devs is a leading web development and app development company delivering AI solutions, e commerce platforms, performance marketing and scalable software for businesses worldwide.",
  keywords: [
    "Brown Devs",
    "browndevs",
    "Web Development Company",
    "App Development Company",
    "Software Development Company",
    "AI Development Services",
    "E Commerce Development",
    "Performance Marketing Agency",
    "Digital Marketing Company India",
  ],
  openGraph: {
    title: "Brown Devs | Web & App Development Company",
    description:
      "We build scalable web applications, mobile apps, AI systems, e commerce platforms and performance marketing strategies that drive measurable growth.",
    url: "https://www.browndevs.com",
    siteName: "Brown Devs",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Brown Devs Web and App Development Company",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brown Devs | Web & App Development Company",
    description:
      "Custom web development, mobile apps, AI solutions and performance marketing services built to scale.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://www.browndevs.com",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>

        {/* Structured Data for Brand Authority */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Brown Devs",
              url: "https://www.browndevs.com",
              logo: "https://www.browndevs.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91 8744043846",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.instagram.com/browndevs/",
                "https://www.facebook.com/profile.php?id=61585235426498",
              ],
            }),
          }}
        /> */}

        {/* <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "vakozime05");
  `}
        </Script> */}

      </head>
      <body
        className={`${poppins.variable} ${montserrat.variable} ${dmSans.variable} ${anton.variable} antialiased`}
      >
        <AuthProvider>
          <SmoothScroll>
            <main>{children}</main>
          </SmoothScroll>
        </AuthProvider>

        {/* <div className="max-[1024px]:hidden">
          <EnquiryWidget />
        </div> */}

        {/* <ContactWidget /> */}
        {/* <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5P3F6NRSWS"
          strategy="afterInteractive"
        /> */}

        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-5P3F6NRSWS');
  `}
        </Script> */}
      </body>
    </html>
  );
}