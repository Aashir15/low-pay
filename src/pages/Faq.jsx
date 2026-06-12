import { useState } from "react";
import {
    ChevronDown,
    Truck,
    WalletCards,
    Headset,
    ShieldCheck,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Faq() {

    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(0);

    const faqData = [
        {
            question: t("faq.questions.q1.question"),
            answer: t("faq.questions.q1.answer"),
        },
        {
            question: t("faq.questions.q2.question"),
            answer: t("faq.questions.q2.answer"),
        },
        {
            question: t("faq.questions.q3.question"),
            answer: t("faq.questions.q3.answer"),
        },
        {
            question: t("faq.questions.q4.question"),
            answer: t("faq.questions.q4.answer"),
        },
        {
            question: t("faq.questions.q5.question"),
            answer: t("faq.questions.q5.answer"),
        },
        {
            question: t("faq.questions.q6.question"),
            answer: t("faq.questions.q6.answer"),
        },
        {
            question: t("faq.questions.q7.question"),
            answer: t("faq.questions.q7.answer"),
        },
        {
            question: t("faq.questions.q8.question"),
            answer: t("faq.questions.q8.answer"),
        },
        {
            question: t("faq.questions.q9.question"),
            answer: t("faq.questions.q9.answer"),
        },
        {
            question: t("faq.questions.q10.question"),
            answer: t("faq.questions.q10.answer"),
        },
        {
            question: t("faq.questions.q11.question"),
            answer: t("faq.questions.q11.answer"),
        },
    ];

    return (
        <div className="bg-linear-to-b from-slate-50 to-white md:py-12 py-8 px-4">

            <div className="max-w-4xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-12">
                    <h1 className="mb-4 text-center md:text-4xl text-3xl font-bold">{t("faq.title")}</h1>
                    <p className="mt-4 text-slate-600 text-lg">{t("faq.subtitle")}</p>
                </div>

                {/* FAQ */}
                <div className="space-y-4">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border border-slate-200 rounded-2xl bg-white shadow-sm"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                                >
                                    <span className="text-base md:text-lg font-semibold text-slate-900">
                                        {item.question}
                                    </span>

                                    <ChevronDown
                                        className={`w-6 h-6 shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* FIXED ANIMATION (no cut off on mobile) */}
                                <div
                                    className={`px-6 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-75 pb-5" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-slate-600 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}