import { OUR_SERVICES } from '@/lib/constants/constantData'
import Link from 'next/link'
import React from 'react'

function OurServices2({ services }) {
    return (
        <section className="pt-14 pb-4 px-3 mx-auto lg:hidden">
            <div className=" mb-5 text-center">
                <h2 className="text-4xl sm:text-6xl font-bold text-center">Our Services</h2>
                <p className="text-base sm:text-xl mt-2 text-gray-600 px-10">Premium digital solutions tailored to elevate your business</p>
            </div>
            <div className='grid grid-cols-1 min-[500px]:grid-cols-2 gap-3'>
                {OUR_SERVICES.map((service, i) => (
                    <Link key={i} href={`/services/${service.slug}`}>
                    <div key={i} >
                        <div
                            className={`${service.color} p-6 pb-4 rounded-2xl h-full flex flex-col mb-3 cursor-pointer`}
                        >
                            <img
                                src={service.img}
                                alt={service.heading}
                                className="w-20 h-20 mb-2 rounded-full shadow-sm bg-white p-1"
                            />
                            <h3 className="text-xl font-semibold mb-2">{service.heading}</h3>
                            <p className="text-sm text-gray-700">{service.content}</p>
                        </div>
                        </div>
                        </Link>
                ))}
            </div>
        </section>
    )
}

export default OurServices2
