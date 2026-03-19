"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { FiLogOut, FiUser } from "react-icons/fi";
import Image from "next/image";

export default function CustomerDashboard() {
    const { data: session } = useSession();

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header Area */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 border-b border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center">
                        {session?.user?.image ? (
                            <Image 
                                src={session.user.image} 
                                alt={session.user.name || "Profile"} 
                                fill
                                className="object-cover"
                            />
                        ) : (
                            <FiUser className="text-4xl text-gray-400" />
                        )}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Welcome back, {session?.user?.name || session?.user?.phone || 'User'}!
                        </h1>
                        <p className="text-gray-500 mt-1">
                            {session?.user?.email || "Manage your invitations and templates"}
                        </p>
                    </div>
                </div>

                <Button 
                    variant="outline" 
                    className="flex items-center gap-2 border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-300"
                    onClick={() => signOut({ callbackUrl: '/' })}
                >
                    <FiLogOut />
                    Sign Out
                </Button>
            </div>

            {/* Content Area */}
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Placeholder Cards for Future Features */}
                    <DashboardCard 
                        title="My Templates" 
                        description="View and edit your purchased templates."
                        actionText="View Templates"
                        ready={false}
                    />
                    <DashboardCard 
                        title="Orders" 
                        description="Track your past purchases and invoices."
                        actionText="View Orders"
                        ready={false}
                    />
                    <DashboardCard 
                        title="Account Settings" 
                        description="Update your personal information."
                        actionText="Edit Details"
                        ready={false}
                    />
                </div>
            </div>
        </div>
    );
}

function DashboardCard({ title, description, actionText, ready }) {
    return (
        <div className="bg-white border rounded-xl p-6 hover:shadow-md transition duration-200">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{description}</p>
            <Button 
                variant={ready ? "default" : "secondary"} 
                className="w-full"
                disabled={!ready}
            >
                {ready ? actionText : "Coming Soon"}
            </Button>
        </div>
    );
}
