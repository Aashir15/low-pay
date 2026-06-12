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
            </div>
        </section>
    );
}