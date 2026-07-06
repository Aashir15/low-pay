import {
    Package,
    User,
    CheckCircle,
    FileText,
    HandHelping,
    BriefcaseBusiness,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const steps = [
    {
        badgeKey: "step1",
        titleKey: "sellProduct",
        icon: Package,
    },
    {
        badgeKey: "step2",
        titleKey: "fillApplication",
        icon: User,
    },
    {
        badgeKey: "step3",
        titleKey: "waitApproval",
        icon: CheckCircle,
    },
    {
        badgeKey: "step4",
        titleKey: "signAgreement",
        icon: FileText,
    },
    {
        badgeKey: "step5",
        titleKey: "deliverProduct",
        icon: HandHelping,
    },
    {
        badgeKey: "step6",
        titleKey: "getFunded",
        icon: BriefcaseBusiness,
    },
];



export default function HowDoes() {

    const { t } = useTranslation();

    const disclosures = t("howItWorks.disclosure.items", {
        returnObjects: true,
    });

    return (
        <section className="md:py-12 py-8">
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="mb-8 text-center md:text-4xl text-3xl font-bold">
                    {t("howItWorks.title")}
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className="relative flex h-57 flex-col items-center justify-center rounded-xl bg-linear-to-b from-sky-400 to-blue-700 px-6 text-center text-white"
                            >
                                <div className="absolute left-4 top-4 rounded-full bg-black px-10 py-2 text-lg font-bold">
                                    {t(`howItWorks.badges.${step.badgeKey}`)}
                                </div>

                                <Icon
                                    size={56}
                                    strokeWidth={2.2}
                                    className="mb-6"
                                />

                                <h3 className="max-w-65 text-2xl font-semibold leading-snug">
                                    {t(`howItWorks.steps.${step.titleKey}`)}
                                </h3>
                            </div>
                        );
                    })}
                </div>

                <div className="w-full mt-18">
                    <div className="mx-auto max-w-7xl rounded-2xl md:rounded-3xl border border-gray-200 bg-white p-4 sm:p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl">
                        <h3 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
                            {t("howItWorks.disclosure.title")}
                        </h3>

                        <div className="mt-6 md:mt-8 space-y-4">
                            {disclosures.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 rounded-2xl border border-gray-100 bg-gray-50 px-4 sm:px-5 py-4"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--primary-color) text-sm font-semibold text-white">
                                        {index + 1}
                                    </span>

                                    <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-700">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}