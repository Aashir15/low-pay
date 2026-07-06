import { useState, useEffect } from "react";
import { X, Logs } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "./PrimaryBtn";
import LanguageSelector from "./LanguageSelector";

export default function Header() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const [sticky, setSticky] = useState(false);

    const location = useLocation();
    const lang = location.pathname.split("/")[1] || "en";

    const navLinks = [
        { name: t("header.nav.home"), path: `/${lang}` },
        { name: t("header.nav.howItWorks"), path: `/${lang}/howDoesItWork` },
        { name: t("header.nav.howtoapplyforcustomer"), path: `/${lang}/how-to-apply-for-customer` },
        {
            name: t("header.nav.becomeDealer"),
            path: `/${lang}/start-application`,
            highlighted: true,
        },
    ];

    useEffect(() => {
        const handleScroll = () => setSticky(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="w-full">
            <div
                className={`bg-white transition-all duration-300 z-10 ${sticky ? "fixed top-0 left-0 w-full shadow-md" : "relative"
                    }`}
            >
                <div
                    className={`max-w-7xl mx-auto flex items-center justify-between px-4 transition-all duration-300 ${sticky ? "py-2" : "py-4"
                        }`}
                >
                    <Link to={`/${lang}`} className="flex items-center">
                        <img
                            src="/assets/logo.webp"
                            alt="logo"
                            className={`object-contain transition-all duration-300 origin-left ${sticky ? "h-10" : "h-11"
                                }`}
                        />
                    </Link>

                    <nav className="hidden lg:flex items-center gap-5 font-semibold">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={
                                    link.highlighted
                                        ? "bg-(--primary-color) text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                                        : ""
                                }
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <Button text={t("header.contactUs")} to={`/${lang}/become-dealer`} />
                        <LanguageSelector />
                    </div>

                    <div className="lg:hidden flex items-center gap-3">
                        <LanguageSelector />

                        <button
                            onClick={() => setOpen(true)}
                            className="text-black"
                            aria-label="Open menu"
                        >
                            <Logs size={28} />
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-12"
                    onClick={() => setOpen(false)}
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transition-transform duration-300 z-16 ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-end items-end p-4 border-b border-gray-300">
                    <button onClick={() => setOpen(false)} aria-label="Close menu">
                        <X />
                    </button>
                </div>

                <div className="flex flex-col gap-4 p-4 font-semibold">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className="py-2 border-b border-gray-100"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col items-start gap-4 px-4 mt-4">
                    <div onClick={() => setOpen(false)}>
                        <Button text={t("header.contactUs")} to={`/${lang}/contact`} />
                    </div>
                </div>
            </div>
        </header>
    );
}