import NavBar from "@/components/website/common/Navbar";
import Footer from "@/components/website/common/Footer";
import { getTermsConditions } from "@/lib/main/getStaticData";
import ReactMarkdown from 'react-markdown';
import styles from './components/post.module.css';
import rehypeRaw from 'rehype-raw';

export default async function page() {
    const termsConditions = await getTermsConditions();

    return (
        <div className="relative min-h-screen w-full flex flex-col">
            {/* GLOBAL FIXED BACKGROUND FOR PARALLAX */}
            <div
                className="fixed inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/bg/pinkbg.png')`, backgroundColor: '#FFEAED' }}
            />
            {/* Shared Overlay */}
            <div className="fixed inset-0 z-0 bg-white/60 backdrop-blur-[2px]" />

            {/* FOREGROUND CONTENT */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <NavBar />
                
                {termsConditions && (
                    <>
                        {/* Header Section */}
                        <div className="py-20 md:py-24 px-4 text-center max-w-4xl mx-auto">
                            <h1 className="text-4xl md:text-7xl text-[#5a1e2b] mb-8 leading-tight font-script">
                                Terms and Conditions
                            </h1>
                            <p className="text-[#7a2535] font-medium opacity-80">
                                Last updated: {new Date(termsConditions.lastUpdated).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>
                        </div>

                        {/* Content section */}
                        <div className="max-w-5xl mx-auto px-4 pb-20 w-full">
                            <div className="bg-white/40 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden border border-white/60">
                                <div className={`${styles.postStyle} p-8 md:p-14 text-gray-800`}>
                                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {termsConditions.content}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <Footer />
            </div>
        </div>
    )
}