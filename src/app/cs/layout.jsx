import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import AuthProvider from "@/components/auth/AuthProvider";

export default async function CustomerDashboardLayout({ children }) {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect("/");
    }

    return (
        <AuthProvider session={session}>
            <div className="min-h-screen bg-gray-50 flex flex-col">
                <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
                    {children}
                </main>
            </div>
        </AuthProvider>
    );
}
