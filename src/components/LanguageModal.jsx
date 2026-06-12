import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function LanguageModal() {
    const navigate = useNavigate();
    const [languageOpen, setLanguageOpen] = useState(false);
    const [disclaimerOpen, setDisclaimerOpen] = useState(false);
    const [offerOpen, setOfferOpen] = useState(false);
    const [email, setEmail] = useState("");

    const [is18Plus, setIs18Plus] = useState(false);
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const canContinue = is18Plus && acceptedTerms;

    useEffect(() => {
        const language = localStorage.getItem("language");
        const disclaimer = localStorage.getItem("disclaimerAccepted");
        const offerShown = localStorage.getItem("offerShown");

        if (!language) {
            setLanguageOpen(true);
        } else if (!disclaimer) {
            setDisclaimerOpen(true);
        } else if (!offerShown) {
            setOfferOpen(true);
        }
    }, []);

    const selectLanguage = (lang) => {
        localStorage.setItem("lang", lang);

        setLanguageOpen(false);

        navigate(`/${lang}`);

        if (!localStorage.getItem("disclaimerAccepted")) {
            setDisclaimerOpen(true);
        }
    };
    
    return (
        <>
            {languageOpen && (
                <div className="fixed inset-0 z-52 bg-[url('/assets/lang-bg.webp')] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center justify-center px-4">
                    <img
                        src="/assets/hero.webp"
                        alt="Logo"
                        className="w-180 mb-4"
                    />

                    <div className="flex flex-row md:flex-row items-center justify-center gap-3">
                        <img onClick={() => selectLanguage("en")} src="/assets/en.png" alt="" className="md:w-90 w-40 cursor-pointer" />
                        <img onClick={() => selectLanguage("es")} src="/assets/ess.png" alt="" className="md:w-90 w-40 cursor-pointer" />
                    </div>
                </div>
            )}
        </>
    );
}