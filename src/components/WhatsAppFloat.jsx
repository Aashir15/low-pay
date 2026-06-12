import { RiWhatsappFill } from "@remixicon/react";

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/19015304388"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-18 w-18 items-center justify-center rounded-full bg-(--primary-color) text-white shadow-lg transition hover:scale-110 hover:bg-blue-600"
            aria-label="Chat on WhatsApp"
        >
            <RiWhatsappFill size={42} />
        </a>
    );
}