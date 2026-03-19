const eventMeta = {
    engagement: {
        title: "Engagement",
        image: "/templates/sikh/engagement2.png",
    },
    haldi: {
        title: "Haldi",
        image: "/templates/sikh/haldi2.png",
    },
    mehndi: {
        title: "Mehandi",
        image: "/templates/sikh/mehandi2.png",
    },
    cocktail: {
        title: "Cocktail Party",
        image: "/templates/sikh/cocktail2.png",
    },
    anand_karaj: {
        title: "Anand Karaj",
        image: "/templates/sikh/anandKaraj2.png",
    },
    reception: {
        title: "Reception",
        image: "/templates/sikh/reception2.png",
    },
};

const normalizeType = (type) => {
    return type
        .toLowerCase()
        .replace(/\s+/g, "_"); // "Cocktail Party" -> "cocktail_party"
};

export default function EventsSection({ events = [] }) {
    return (
        <section className="relative w-full">

            {/* Temple full width overlap */}
            <div className="absolute -top-110 left-0 w-full z-10">
                <img
                    src="/templates/sikh/temple.png"
                    alt="temple"
                    className="w-full object-contain"
                />
            </div>

            {/* Background IMAGE (static feel) */}
            <div
                className="pt-32 pb-60 px-4 text-center bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/bg/blue-texture.png')",
                    backgroundAttachment: "fixed",
                }}
            >

                {/* Heading */}
                <p className="text-white text-sm italic">
                    You are invited to the following
                </p>

                <h2 className="text-white text-3xl mt-2 font-script">
                    Events
                </h2>

                {/* Events */}
                <div className="mt-12 space-y-16">

                    {events.map((event, index) => {
                        const key = normalizeType(event.type);

                        const meta = eventMeta[key];

                        if (!meta) return null;

                        return (
                            <div key={index} className="flex flex-col items-center">

                                {/* Image */}
                                <div className="w-[450px]">
                                    <img
                                        src={meta.image}
                                        alt={meta.title}
                                        className="w-full h-auto rounded-[24px]"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-3xl mt-6 font-script">
                                    {meta.title}
                                </h3>

                                {/* Details */}
                                <p className="text-white text-sm mt-3 font-medium">
                                    {event.date}
                                </p>

                                <p className="text-white text-sm mt-1">
                                    at {event.location}
                                </p>

                                <p className="text-white text-sm mt-1 mb-2">
                                    {event.time}
                                </p>

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}