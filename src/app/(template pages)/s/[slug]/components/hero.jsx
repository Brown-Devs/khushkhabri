export default function Hero() {
    return (
        <section className="relative w-full">
            {/* Background Image */}
            <img
                src="/templates/sikh/hero.png"
                alt="invitation background"
                className="w-full h-auto"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center text-center px-4">

                {/* Top spacing */}
                <div className="mt-10" />

                {/* Names */}
                <h1 className="text-white text-3xl font-light tracking-wide font-script">
                    Simran
                </h1>

                <p className="text-white text-sm mt-1 font-script">weds</p>

                <h2 className="text-white text-4xl mt-1 font-script">
                    Gurpreet
                </h2>

                {/* Spacer to push content down */}
                <div className="h-[45%]" />

                {/* Khanda Icon */}
                <img
                    src="/templates/sikh/khanda.png"
                    alt="khanda"
                    className="w-12 h-12 mb-4"
                />

                {/* Bottom Invite Section */}
                <div className="absolute bottom-[12%] w-full px-6 text-center text-white">

                    <p className="text-xs tracking-wide">
                        Sardar Baldev Singh &<br />
                        Sardami Harjit Kaur
                    </p>

                    <h2 className="text-3xl mt-4 font-light italic">
                        Invites you
                    </h2>

                    <p className="text-xs mt-3 leading-relaxed">
                        to join the wedding celebration of<br />
                        their daughter
                    </p>

                    <h3 className="text-4xl mt-5 font-light font-script">
                        Simran
                    </h3>

                    <p className="text-sm mt-2">with</p>

                    <h3 className="text-4xl font-semibold mt-1 font-script">
                        Gurpreet
                    </h3>

                    <p className="text-xs mt-4">
                        son of
                    </p>

                    <p className="text-xs mt-1 leading-relaxed">
                        Sardar Maninder Singh &<br />
                        Sardami Jasleen Kaur
                    </p>

                </div>
            </div>
        </section>
    );
}