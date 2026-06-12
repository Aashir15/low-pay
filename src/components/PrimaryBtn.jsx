import { Link } from "react-router-dom";

export default function Button({
    text,
    to,
    onClick,
    type = "button",
    className = "",
    newTab = false,
}) {
    const baseClass = `px-6 py-2 rounded-full cursor-pointer
    bg-(--primary-color) text-white 
    hover:bg-(--secondary-color) hover:text-white font-semibold
    transition-all duration-300 ${className}`;

    if (to) {
        // External link
        if (to.startsWith("http")) {
            return (
                <a
                    href={to}
                    target={newTab ? "_blank" : "_self"}
                    rel={newTab ? "noopener noreferrer" : undefined}
                    className={`${baseClass} block`}
                >
                    {text}
                </a>
            );
        }

        // Internal route
        return (
            <Link to={to} className={`${baseClass} block`}>
                {text}
            </Link>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={baseClass}
        >
            {text}
        </button>
    );
}