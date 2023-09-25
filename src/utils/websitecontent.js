export const aboutContent = {
    heading: "Empowering the world with Website4you.",
    body: "We're a multi-cultural team from around the world! We come from diverse backgrounds, bringing different personalities, experiences and skills to the job. This is what makes our team so special.",
};

export const heroContent = {
    heading: "Make Your Business website with Website4you.",
    body: "Website4you is a starter template for startups, marketing websites & landing pages.<wbr />Built with leatest technologies Astro and TailwindCSS. You can quickly create any website with us.",
    buttonOne: "Conatct us",
    buttonTwo: "GitHub Repo",
    buttonTwoIcon: "bx:bxl-github",
};

export const conatcInfo = {
    heading: "Contact website4you",
    body: "Have something to say? We are here to help. Fill up the form or send email or call phone.",
    address: "1734 Sanfransico, CA 93063",
    email: "hello@website4youstarter.com",
    phone: "+1 (987) 4587 899",
};

export const pricing = [
    {
        name: "Personal",
        price: "Free",
        popular: false,
        features: [
            "Lifetime free",
            "Up to 3 users",
            "Unlimited Pages",
            "Astro Sub domain",
            "Basic Integrations",
            "Community Support",
        ],
        button: {
            text: "Get Started",
            link: "/",
        },
    },
    {
        name: "Startup",
        price: {
            monthly: "$19",
            annual: "$16",
            discount: "10%",
            original: "$24",
        },
        popular: true,
        features: [
            "All Free Features",
            "Up to 20 users",
            "20 Custom domains",
            "Unlimited Collaborators",
            "Advanced Integrations",
            "Priority Support",
        ],
        button: {
            text: "Get Started",
            link: "#",
        },
    },
    {
        name: "Enterprise",
        price: "Custom",
        popular: false,
        features: [
            "All Pro Features",
            "Unlimited Custom domains",
            "99.99% Uptime SLA",
            "SAML & SSO Integration",
            "Dedicated Account Manager",
            "24/7 Phone Support",
        ],
        button: {
            text: "Contact us",
            link: "/contact",
        },
    },
];