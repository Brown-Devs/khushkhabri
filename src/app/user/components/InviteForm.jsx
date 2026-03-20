"use client"
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function InviteForm({ order }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        brideName: order.mainDetails?.brideName || '',
        brideFatherName: order.mainDetails?.brideFatherName || '',
        brideMotherName: order.mainDetails?.brideMotherName || '',
        groomName: order.mainDetails?.groomName || '',
        groomFatherName: order.mainDetails?.groomFatherName || '',
        groomMotherName: order.mainDetails?.groomMotherName || '',
        weddingDate: order.mainDetails?.weddingDate ? new Date(order.mainDetails.weddingDate).toISOString().split('T')[0] : '',
    });
    const [saveSuccess, setSaveSuccess] = useState(!!order.mainDetails);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const toastId = toast.loading("Saving information...");

        try {
            const res = await fetch("/api/invitation/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    orderId: order._id,
                    ...formData,
                    isCustomization: false
                }),
            });

            const data = await res.json();
            if (res.ok) {
                toast.success("Main information saved! 🎉", { id: toastId });
                setSaveSuccess(true);
                router.refresh();
            } else {
                toast.error(data.error || "Failed to save information", { id: toastId });
            }
        } catch (err) {
            console.error("Save invitation error:", err);
            toast.error("Something went wrong", { id: toastId });
        } finally {
            setLoading(false);
        }
    };

    const handleCreateCustomization = async () => {
        setLoading(true);
        const toastId = toast.loading("Creating new customization...");

        try {
            const res = await fetch("/api/invitation/save", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    orderId: order._id,
                    isCustomization: true,
                    isCreateNew: true
                }),
            });

            if (res.ok) {
                toast.success("New customization created! Edit it below.", { id: toastId });
                router.refresh();
            } else {
                const data = await res.json();
                toast.error(data.error || "Failed to create customization", { id: toastId });
            }
        } catch (err) {
            toast.error("Something went wrong", { id: toastId });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-10">
            <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 overflow-hidden p-8 md:p-12">
                <div className="mb-8 flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Main Information</h2>
                        <p className="text-gray-500">Fill in the core details for your wedding invitation.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Bride Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                                <span className="w-8 h-8 flex items-center justify-center bg-pink-50 text-pink-500 rounded-full font-bold text-sm">B</span>
                                <h3 className="font-bold text-gray-800">Bride's Details</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Bride's Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="brideName"
                                        value={formData.brideName}
                                        onChange={handleChange}
                                        placeholder="Enter full name"
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#8b2c3c]/10 focus:border-[#8b2c3c] outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Father's Name</label>
                                    <input
                                        type="text"
                                        name="brideFatherName"
                                        value={formData.brideFatherName}
                                        onChange={handleChange}
                                        placeholder="Enter name"
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#8b2c3c]/10 focus:border-[#8b2c3c] outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Mother's Name</label>
                                    <input
                                        type="text"
                                        name="brideMotherName"
                                        value={formData.brideMotherName}
                                        onChange={handleChange}
                                        placeholder="Enter name"
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#8b2c3c]/10 focus:border-[#8b2c3c] outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Groom Section */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100">
                                <span className="w-8 h-8 flex items-center justify-center bg-blue-50 text-blue-500 rounded-full font-bold text-sm">G</span>
                                <h3 className="font-bold text-gray-800">Groom's Details</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Groom's Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="groomName"
                                        value={formData.groomName}
                                        onChange={handleChange}
                                        placeholder="Enter full name"
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#8b2c3c]/10 focus:border-[#8b2c3c] outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Father's Name</label>
                                    <input
                                        type="text"
                                        name="groomFatherName"
                                        value={formData.groomFatherName}
                                        onChange={handleChange}
                                        placeholder="Enter name"
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#8b2c3c]/10 focus:border-[#8b2c3c] outline-none transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1">Mother's Name</label>
                                    <input
                                        type="text"
                                        name="groomMotherName"
                                        value={formData.groomMotherName}
                                        onChange={handleChange}
                                        placeholder="Enter name"
                                        className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#8b2c3c]/10 focus:border-[#8b2c3c] outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wedding Date */}
                    <div className="pt-6 border-t border-gray-100 max-w-sm">
                        <label className="block text-sm font-bold text-gray-900 mb-2 ml-1">Wedding Date</label>
                        <input
                            required
                            type="date"
                            name="weddingDate"
                            value={formData.weddingDate}
                            onChange={handleChange}
                            className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-[#8b2c3c]/10 focus:border-[#8b2c3c] outline-none transition-all text-gray-700"
                        />
                    </div>

                    <div className="pt-8 flex flex-wrap gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-12 py-4 bg-[#8b2c3c] text-white rounded-2xl font-bold hover:bg-[#5a1e2b] transition-all shadow-lg shadow-[#8b2c3c]/20 disabled:opacity-60 disabled:cursor-not-allowed transform active:scale-[0.98]"
                        >
                            {loading ? "Saving..." : "Save Main Information"}
                        </button>

                        {saveSuccess && (
                            <button
                                type="button"
                                onClick={handleCreateCustomization}
                                className="px-12 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-gray-800 transition-all shadow-md transform active:scale-[0.98] flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                Create Customization
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
