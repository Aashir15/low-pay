import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

function LanguageSelector() {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const lang = location.pathname.split("/")[1] || "en";

    const languages = [
        { code: "en", label: "English", flag: "/assets/us.png" },
        { code: "es", label: "Spanish", flag: "/assets/es.png" },
    ];

    const current = languages.find((l) => l.code === lang) || languages[0];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const changeLanguage = (newLang) => {
        const scrollY = window.scrollY; // 👈 SAVE SCROLL

        const segments = location.pathname.split("/").filter(Boolean);

        if (segments[0] === "en" || segments[0] === "es") {
            segments.shift();
        }

        const newPath = `/${newLang}/${segments.join("/")}`;

        sessionStorage.setItem("scrollPos", scrollY); // 👈 STORE

        navigate(newPath, { replace: true });
        setOpen(false);
    };

    return (
        <div ref={dropdownRef} className="relative">
            {/* Trigger */}
            <div
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center border-2 border-(--primary-color) rounded-full p-1 gap-1 cursor-pointer"
            >
                <img
                    src={current.flag}
                    alt={current.label}
                    className="w-6 h-6 rounded-full"
                />
                <ChevronDown size={18} />
            </div>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 p-2 w-36 bg-white rounded-xl shadow-lg overflow-hidden z-50">
                    {languages.map((item) => (
                        <div
                            key={item.code}
                            onClick={() => changeLanguage(item.code)}
                            className={`flex items-center gap-3 px-4 py-2 rounded-md cursor-pointer text-sm font-semibold ${lang === item.code
                                    ? "bg-blue-200 font-medium text-black"
                                    : ""
                                }`}
                        >
                            <img
                                src={item.flag}
                                alt={item.label}
                                className="w-5 h-5 rounded-full"
                            />
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;