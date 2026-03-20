export const THEMES = [
    {
        id: 1,
        title: "Royal Crimson",
        themeName: "hindu1",
        category: "Hindu Wedding",
        description: "A majestic theme with deep reds and gold accents, perfect for traditional Hindu weddings.",
        image: "/templates/sikh/preview.png",
        demoUrl: "/s/hindu1",
    },
    {
        id: 2,
        title: "Pastel Elegance",
        themeName: "hindu2",
        category: "Hindu Wedding",
        description: "Soft pastels and delicate floral borders for a modern yet traditional celebration.",
        image: "/templates/sikh/invite2.png",
        demoUrl: "/s/hindu2",
    },
    {
        id: 3,
        title: "Golden Lotus",
        themeName: "hindu3",
        category: "Hindu Wedding",
        description: "Classic golden lotus motifs set against a rich, warm backdrop.",
        image: "/templates/sikh/invite3.png",
        demoUrl: "/s/hindu3",
    },
    {
        id: 4,
        title: "Anand Karaj",
        themeName: "sikh",
        category: "Sikh Wedding",
        description: "Serene and elegant design featuring watercolor florals and the Ek Onkar symbol.",
        image: "/templates/sikh/invite4.png",
        demoUrl: "/s/sikh",
    },
    {
        id: 5,
        title: "Divine Bliss",
        themeName: "gurujiSatsang",
        category: "Guruji Satsang",
        description: "A peaceful and divine layout specifically crafted for Guruji's Satsang invitations.",
        image: "/templates/sikh/invite5.png",
        demoUrl: "/s/gurujiSatsang",
    },
];

export const getThemeByThemeName = (themeName) => THEMES.find(t => t.themeName === themeName);
