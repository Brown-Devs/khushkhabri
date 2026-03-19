import React from 'react'
import WebsiteLayout from '@/components/website/WebsiteLayout';
import ContactSection from '@/components/website/common/ContactSection';

export default async function page() {

    return (
        <WebsiteLayout>
            <div className='pt-15 pb-10 bg-[#FFF8F9]'>
                <ContactSection bgColor={'bg-white'}/>
            </div>
        </WebsiteLayout>
    )
}
