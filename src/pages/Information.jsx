import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



export default function Information() {
    const { t, i18n } = useTranslation();
    const isSpanish = i18n.language === "es";

    const sections = [
        {
            title: t("information.sections.customer.title"),
            items: t("information.sections.customer.items", {
                returnObjects: true,
            }),
        },
        {
            title: t("information.sections.store.title"),
            items: t("information.sections.store.items", {
                returnObjects: true,
            }),
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
            <h2 className="mb-8 text-center md:text-4xl text-2xl font-bold">
                {t("information.heading")}
            </h2>

            <div className="border-2 border-(--primary-color) glow-border rounded-md md:p-8 p-4 bg-white">
                <h3 className="text-center text-2xl md:text-4xl font-semibold md:leading-12">
                    {t("information.subHeading")}
                </h3>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 mt-18">
                {sections.map((section) => (
                    <div
                        key={section.title}
                        className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <h3 className="text-2xl text-center font-semibold text-gray-900">
                            {section.title}
                        </h3>

                        <div className="mt-8 space-y-4">
                            {section.items.map((item, index) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4"
                                >
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-(--primary-color) text-sm font-semibold text-white">
                                        {index + 1}
                                    </span>

                                    <p className="text-gray-700">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center md:pb-6">
                <Link to={`/${i18n.language}/become-dealer`} className="inline-block">
                    <img
                        src={isSpanish ? "/assets/hero-2-es.webp" : "/assets/hero-2.webp"}
                        alt={t("information.imageAlt")}
                        className="object-contain cursor-pointer"
                    />
                </Link>
            </div>

            <div className="flex justify-center pb-6 ">
                <img
                    src="/assets/info.png"
                    alt=""
                    className="h-auto w-160"
                />
            </div>
        </div>
    );
}