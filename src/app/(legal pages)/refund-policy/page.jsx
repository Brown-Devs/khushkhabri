// app/refund-policy/page.jsx
import WebsiteLayout from "@/components/website/WebsiteLayout";
import { getHomePageData } from "@/lib/main/getHomePageData";
import { getRefundPolicy } from "@/lib/main/getStaticData";
import ReactMarkdown from 'react-markdown';
import styles from './components/post.module.css';
import rehypeRaw from 'rehype-raw';

export default async function page() {
    const refundPolicy = await getRefundPolicy();

    return (
        <WebsiteLayout>
            {refundPolicy &&
                <div>
                    {/* Full-width header section */}
                    <div className="w-full min-h-[35vh] lg:min-h-[50vh] flex justify-center items-center bg-[#0D3525] py-12"
                        style={{
                            background: "radial-gradient(circle at center, #ffffff 0%, #87cefa 100%)",
                        }}
                    >
                        <div className="max-w-7xl mx-auto px-5 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-black">Refund Policy</h1>
                            <div className="mt-4 text-blue-800">
                                Last updated: {new Date(refundPolicy.lastUpdated).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Content section */}
                    <div className="max-w-7xl mx-auto px-5 py-6">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                            <div className={`${styles.postStyle} p-6 md:px-10`}>
                                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                    {refundPolicy.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </WebsiteLayout>
    )
}