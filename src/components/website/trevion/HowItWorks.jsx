const steps = [
    "Connect Meta or upload leads",
    "Leads enter Trevion",
    "Assign owners & meetings",
    "Automate follow-ups",
    "Track conversions",
];

export default function HowItWorks() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
                    How Trevion Works
                </h2>

                <div className="grid md:grid-cols-5 gap-6 text-center">
                    {steps.map((step, i) => (
                        <div key={i} className="p-4">
                            <div className="text-primary text-3xl font-bold mb-2">
                                {i + 1}
                            </div>
                            <p className="text-gray-600">{step}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}