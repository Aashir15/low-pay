import { useTranslation } from "react-i18next";

const executives = [
    "Claudia",
    "Carla",
    "Elizabeth",
    "Maxie",
    "Steven",
    "Adam",
    "Gregory",
];

export default function BecomeDealer() {

    const { t } = useTranslation();

    return (
        <section className="md:py-12 py-8">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-8 text-center md:text-4xl text-3xl font-bold">
                    {t("becomeDealer.title")}
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {executives.map((person, index) => (
                        <div
                            key={index}
                            className={`rounded-md border border-(--primary-color) glow-border bg-white p-5 text-center shadow-sm
                                ${index === executives.length - 1
                                    ? "lg:col-start-2"
                                    : ""
                                }`}
                        >
                            <img
                                src="/assets/surg.webp"
                                alt={`${person} ${t("becomeDealer.accountExecutive")}`}
                                className="mx-auto mb-4 h-24 w-24 object-contain"
                            />

                            <a
                                href="https://surgesetup.com/home.php?s=18014398509481984"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mb-4 inline-block bg-(--primary-color) rounded px-4 py-2 text-sm font-semibold text-white"
                            >
                                {t("becomeDealer.startApplication")}
                            </a>

                            <h3 className="mb-2 text-4xl font-bold text-black">
                                {person}
                            </h3>

                            <p className="text-xl text-gray-700">
                                {t("becomeDealer.accountExecutive")}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}