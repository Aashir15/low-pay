import { Link, useParams } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";


export default function Footer() {

    const { t } = useTranslation();
    const { lang = "en" } = useParams();

    const footerLinks = [
        {
            name: t("footer.links.application"),
            path: "/assets/LWP-Application.pdf",
            external: true,
        },
        {
            name: t("footer.links.terms"),
            path: `/${lang}/TermsConditions`,
        },
        {
            name: t("footer.links.privacy"),
            path: `/${lang}/privacyPolicy`,
        },
        {
            name: t("footer.links.faq"),
            path: `/${lang}/faqs`,
        },
    ];

    return (
        <footer className="bg-black text-white">
            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Left */}
                    <div className="flex flex-col items-center lg:items-start">
                        <img
                            src="/assets/surg-f.webp"
                            alt="SurgePays"
                            className="h-14 mb-4"
                        />

                        <a
                            href="https://maps.google.com/?q=3124+Brother+Blvd+Suite+104+Bartlett+TN+38133"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-white/90 hover:text-white transition"
                        >
                            <MapPin size={18} />
                            <span>{t("footer.address")}</span>
                        </a>
                    </div>

                    {/* Center */}
                    <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold">
                        {footerLinks.map((link) =>
                            link.external ? (
                                <a
                                    href="/assets/LWP-Application.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t("footer.links.application")}
                                </a>
                            ) : (
                                <Link key={link.name} to={link.path}>
                                    {link.name}
                                </Link>
                            )
                        )}
                    </div>

                    {/* Right */}
                    <a
                        href="tel:9015571809"
                        className="inline-flex items-center gap-2 rounded bg-blue-600 px-6 py-2 text-md font-semibold text-white transition hover:bg-(--primary-color)"
                    >
                        <Phone className="h-5 w-5" />
                        <span className="font-sans tracking-wide">
                            901-557-1809
                        </span>
                    </a>

                </div>

                {/* Bottom */}
                <div className="border-t border-white/20 mt-12 pt-8">
                    <p className="text-center font-semibold">
                        {t("footer.copyright")}
                    </p>
                </div>

            </div>
        </footer>
    );
}