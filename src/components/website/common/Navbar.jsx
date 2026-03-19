'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { useSession } from 'next-auth/react'
import BigNav from './BigNav'
import AuthDialog from '@/components/auth/LoginDialog'

export default function NavBar() {

    const [mobileOpen, setMobileOpen] = useState(false)
    const [authOpen, setAuthOpen] = useState(false)
    const pathname = usePathname()
    const { data: session, status } = useSession()

    const items = [
        { label: 'Home', href: '/' },
        { label: 'Templates', href: '/templates' },
        { label: 'About Us', href: '/about-us' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Contact Us', href: '/contact-us' },
    ]

    // Only add My Profile if authenticated
    if (status === 'authenticated') {
        items.push({ label: 'My Profile', href: '/cs' });
    } else {
        items.push({ label: 'Login', action: () => setAuthOpen(true) });
    }

    return (
        <>
            <nav className="w-full bg-white">

                {/* Logo Row */}
                <div className="flex justify-center items-center py-3 relative">

                    {/* mobile button */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="md:hidden absolute left-4"
                    >
                        <FiMenu size={26} />
                    </button>

                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Brown Devs"
                            width={400}
                            height={200}
                            className="h-23 w-auto"
                        />
                    </Link>

                </div>

                {/* Menu Row */}
                <div className="relative hidden md:block">

                    {/* Top Border */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                    <div className="max-w-7xl mx-auto">
                        <BigNav onLoginClick={() => setAuthOpen(true)} session={session} status={status} />
                    </div>

                    {/* Bottom Border */}
                    <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

                </div>

            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                        className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm z-50 bg-white shadow-lg p-6 pt-20"
                    >

                        <button
                            onClick={() => setMobileOpen(false)}
                            className="absolute top-6 right-6 text-2xl"
                        >
                            ✕
                        </button>

                        <div className="flex flex-col gap-6">

                            {items.map(item => {

                                const isActive =
                                    item.href === '/'
                                        ? pathname === '/'
                                        : pathname.startsWith(item.href)

                                if (item.action) {
                                    return (
                                        <button
                                            key={item.label}
                                            onClick={() => {
                                                setMobileOpen(false);
                                                item.action();
                                            }}
                                            className="text-lg font-semibold text-gray-700 text-left"
                                        >
                                            {item.label}
                                        </button>
                                    )
                                }

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={`text-lg font-semibold ${isActive
                                            ? 'text-black'
                                            : 'text-gray-700'
                                            }`}
                                    >
                                        {item.label}
                                    </Link>
                                )
                            })}

                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

            <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
        </>
    )
}