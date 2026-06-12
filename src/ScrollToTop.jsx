import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const savedScroll = sessionStorage.getItem("scrollPos");

        if (savedScroll) {
            window.scrollTo(0, parseInt(savedScroll, 10));
            sessionStorage.removeItem("scrollPos");
            return;
        }

        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}