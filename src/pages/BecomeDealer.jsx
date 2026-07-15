import { useTranslation } from "react-i18next";

const executives = [
    {
        name: "Claudia",
        link: "https://surgesetup.com/home.php?s=35184372088832",
    },
    {
        name: "Ray",
        link: "https://surgesetup.com/home.php?s=18014398509481984",
    },
    {
        name: "Elizabeth",
        link: "https://surgesetup.com/home.php?s=72057594037927936",
    },
    {
        name: "Carla",
        link: "https://surgesetup.com/home.php?s=4611686018427387904",
    },
    {
        name: "Maxie",
        link: "https://surgesetup.com/home.php?s=144115188075855872",
    },
    {
        name: "Steven",
        link: "https://surgesetup.com/home.php?s=288230376151711744",
    },
    {
        name: "Gregory",
        link: "https://surgesetup.com/home.php?s=ly3nLbAPuWJtre7S",
    },
    {
        name: "Viviana",
        link: "https://surgesetup.com/home.php?s=2305843009213693952",
    },
    {
        name: "Luis",
        link: "https://surgesetup.com/home.php?s=sKAMr2RRgYQrWOCI",
    },
];

export default function BecomeDealer() {
    const { t } = useTranslation();

    return (
        <section className="py-8 md:py-12">
            <div className="mx-auto max-w-6xl px-4">
                <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl">
                    {t("becomeDealer.title")}
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {executives.map((person, index) => (
                        <div
                            key={person.name}
                            className={`glow-border rounded-md border border-(--primary-color) bg-white p-5 text-center shadow-sm ${executives.length % 3 === 1 && index === executives.length - 1
                                    ? "lg:col-start-2"
                                    : ""
                                }`}
                        >
                            <img
                                src="/assets/surg.webp"
                                alt={`${person.name} ${t("becomeDealer.accountExecutive")}`}
                                className="mx-auto mb-4 h-24 w-24 object-contain"
                            />

                            <a
                                href={person.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mb-4 inline-block rounded bg-(--primary-color) px-4 py-2 text-sm font-semibold text-white"
                            >
                                {t("becomeDealer.startApplication")}
                            </a>

                            <h3 className="mb-2 text-2xl font-bold text-black">
                                {person.name}
                            </h3>

                            <p className="text-md text-gray-700">
                                {t("becomeDealer.accountExecutive")}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}