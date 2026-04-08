export default function GurujiTemplateDesktop({ invitation }) {
    const details = invitation?.satsangDetails || {};
    
    return (
        <div className="min-h-screen flex items-center justify-center p-12 bg-[#fffbf5]">
            <div className="bg-white p-16 rounded-[40px] shadow-xl border border-[#8b2c3c]/10 max-w-2xl w-full text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#8b2c3c]"></div>
                
                <h1 className="text-5xl font-bold text-[#8b2c3c] mb-4">Jai Guruji</h1>
                <h2 className="text-2xl font-medium text-gray-800 mb-10">You are lovingly invited to attend the Satsang by<br/><span className="font-bold">{details.invitorName || 'Invitor Name'}</span></h2>
                
                <div className="grid grid-cols-2 gap-8 text-left max-w-xl mx-auto">
                    <div className="bg-[#fffbf5] p-6 rounded-3xl border border-[#8b2c3c]/10">
                        <h3 className="text-sm uppercase tracking-widest text-[#8b2c3c] font-bold mb-2">Date & Time</h3>
                        <p className="text-gray-800 font-medium text-lg">
                            {details.date ? new Date(details.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) : 'Date'}
                        </p>
                        <p className="text-gray-600">{details.time || 'Time'}</p>
                    </div>
                    
                    <div className="bg-[#fffbf5] p-6 rounded-3xl border border-[#8b2c3c]/10">
                        <h3 className="text-sm uppercase tracking-widest text-[#8b2c3c] font-bold mb-2">Venue</h3>
                        <p className="text-gray-800 font-medium">{details.venue || 'Venue Address Goes Here'}</p>
                    </div>
                </div>
                
                {details.contacts?.length > 0 && (
                    <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col items-center">
                        <h3 className="text-sm uppercase tracking-widest text-[#8b2c3c] font-bold mb-3">RSVP</h3>
                        <div className="flex gap-6">
                            {details.contacts.map((contact, i) => (
                                <div key={i} className="text-center px-4 py-2 bg-gray-50 rounded-2xl">
                                    <p className="font-bold text-gray-800">{contact.name}</p>
                                    <p className="text-gray-500 text-sm">{contact.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                <div className="absolute top-6 right-6">
                    <span className="bg-[#8b2c3c] text-white text-xs px-4 py-2 rounded-full font-bold shadow-md">
                        Desktop View Placeholder
                    </span>
                </div>
            </div>
        </div>
    );
}
