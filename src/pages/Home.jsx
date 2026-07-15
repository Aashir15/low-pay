import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../components/PrimaryBtn";

// const features = [
//     ["1", "/assets/i-1.webp"],
//     // ["2", "/assets/i-2.webp"],
//     // ["3", "/assets/i-3.webp"],
//     ["2", "/assets/i-4.webp"],
//     // ["5", "/assets/i-5.webp"],
// ];

const partners = [
    {
        image: "/assets/i-7.webp",
        key: "macbook",
        icon: "/assets/icon-1.webp",
    },
    {
        image: "/assets/i-8.webp",
        key: "laptops",
        icon: "/assets/icon-2.webp",
    },
    {
        image: "/assets/i-9.webp",
        key: "speakers",
        icon: "/assets/icon-3.webp",
    },
    {
        image: "/assets/i-10.webp",
        key: "ipads",
        icon: "/assets/icon-4.webp",
    },
    {
        image: "/assets/i-11.webp",
        key: "electricScooter",
        icon: "/assets/icon-5.webp",
    },
    {
        image: "/assets/i-12.webp",
        key: "gameConsole",
        icon: "/assets/icon-6.webp",
    },
    {
        image: "/assets/i-14.webp",
        key: "phone",
        icon: "/assets/icon-6.webp",
    },
    {
        image: "/assets/i-15.webp",
        key: "smartWatches",
        icon: "/assets/icon-6.webp",
    },
];

function Home() {

    const { t, i18n } = useTranslation();
    const isSpanish = i18n.language === "es";

    return (
        <>
            {/* <section className="bg-linear-to-r from-[#025db3] via-[#0671af] to-[#4fc3ff]">
                <div className="max-w-7xl mx-auto py-12 px-4">
                    <div className="grid lg:grid-cols-[60%_40%] gap-8 items-end justify-center">
                        <div className="flex flex-col justify-center">
                            <h2 className="primary-heading text-white mb-8">
                                {t("home.hero.title")}
                            </h2>

                            <div className="flex flex-col items-center gap-4">
                                <img
                                    src="/assets/hero.webp"
                                    alt={t("home.hero.mainImageAlt")}
                                    className="object-contain"
                                />
                                <Link to="become-dealer">
                                    <img
                                        src={isSpanish ? "/assets/hero-2-es.webp" : "/assets/hero-2.webp"}
                                        alt={t("home.hero.secondaryImageAlt")}
                                        className="object-contain cursor-pointer"
                                    />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <img
                                src={isSpanish ? "/assets/hero-1-es.webp" : "/assets/hero-1.webp"}
                                alt={t("home.hero.bannerAlt")}
                                className="w-full max-w-lg object-contain"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-white mt-6">
                        {features.map(([key, image]) => (
                            <div key={key} className="flex items-center gap-3">
                                <img
                                    src={image}
                                    alt={t(`home.hero.features.${key}`)}
                                    className="object-contain"
                                />
                                <h3 className="text-2xl lg:text-3xl font-semibold">
                                    {t(`home.hero.features.${key}`)}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            <section className="bg-[#34009c]">
                <div className="flex flex-col max-w-7xl mx-auto items-center gap-4">
                    <Link to="contact-us">
                        <img
                            src={isSpanish ? "/assets/hero-es.png" : "/assets/hero-en.png"}
                            alt={t("home.hero.secondaryImageAlt")}
                            className="object-contain cursor-pointer"
                        />
                    </Link>
                </div>
            </section>

            {/* <div className="bg-black w-full flex justify-center py-6">
                <h1 className="text-[18px] text-center text-white font-bold px-4">
                    {t("home.opportunity.title")}
                </h1>
            </div> */}

            <div className="px-4 flex flex-col lg:flex-row items-center justify-center">
                <div className="flex flex-col items-center lg:items-start justify-center py-6 gap-4 text-center lg:text-left">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        {t("home.customers.title")}
                    </h1>

                    <h2 className="text-xl md:text-3xl font-semibold">
                        {t("home.customers.subtitle")}
                    </h2>
                </div>

                <img
                    src="/assets/i-6.webp"
                    alt={t("home.customers.imageAlt")}
                    className="w-60 object-contain"
                />
            </div>

            <div className="flex justify-center bg-linear-to-r from-[#025db3] via-[#0671af] to-[#4fc3ff] py-8">
                <img
                    src={isSpanish ? "/assets/need-es.webp" : "/assets/need-us.webp"}
                    className="w-full max-w-2xl object-contain"
                />
            </div>

            <div className="px-4 flex flex-col lg:flex-row items-center justify-center md:gap-8 py-8">
                <div className="flex flex-col items-center justify-center py-6 gap-4 text-center">
                    <h1 className="text-2xl font-sans md:text-4xl font-bold">
                        {t("home.credit.title")}
                    </h1>
                    <h2 className="text-xl md:text-3xl font-semibold">
                        {t("home.credit.subtitle")}
                    </h2>
                </div>
            </div>

            <div className="bg-linear-to-r from-[#025db3] via-[#0671af] to-[#4fc3ff] w-full flex justify-center py-6">
                <h1 className="md:text-4xl text-2xl text-center text-white font-bold px-4">
                    {t("home.payment.title")}
                </h1>
            </div>

            <section className="py-12 overflow-hidden">
                {/* Section Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        {t("home.electronics.title")}
                    </h2>

                    <p className="text-lg mt-3 text-gray-900">
                        {t("home.electronics.subtitle")}
                    </p>
                </div>

                <div className="overflow-hidden max-w-7xl mx-auto">
                    <div className="flex animate-marquee">
                        {[...partners, ...partners].map((item, index) => (
                            <div
                                key={index}
                                className="w-1/2 md:w-1/3 lg:w-1/5 shrink-0 px-2 md:px-4"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {/* Top Image */}
                                    <img
                                        src={item.image}
                                        alt={t(`home.electronics.categories.${item.key}`)}
                                        className="h-30 object-contain mb-4"
                                    />

                                    {/* Title */}
                                    <h3 className="text-lg font-semibold mb-3">
                                        {t(`home.electronics.categories.${item.key}`)}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
