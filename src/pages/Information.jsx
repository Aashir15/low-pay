import { useTranslation } from "react-i18next";

const InfoSection = ({ title, items }) => {
    const { t } = useTranslation();

    return (
        <div className="border-2 border-(--primary-color) glow-border rounded-md p-4 bg-white">
            <h3 className="font-semibold text-xl mb-2">
                {t("information.important")}
            </h3>

            <ul className="space-y-2 text-lg font-medium text-gray-700 list-disc pl-5">
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

const StepCard = ({ step, title, items, footer }) => {
    const { t } = useTranslation();
    return(
        <div className="border-2 border-(--primary-color) glow-border rounded-md p-4 bg-white flex flex-col h-full">
            <h2 className="text-(--primary-color) font-bold text-xl mb-3">
                {t("information.step")} {step} <span className="text-gray-800 font-semibold">{title}</span>
            </h2>

            <ul className="space-y-2 text-lg font-medium text-gray-700 list-disc pl-5 flex-1">
                {items.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            {footer && (
                <div className="mt-4 border-t pt-3 text-md border-gray-400 text-gray-700">
                    {footer}
                </div>
            )}
        </div>
    )
};

export default function Information() {
    const { t } = useTranslation();
    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">

            {/* TITLE 1 */}
            <h2 className="mb-8 text-center md:text-4xl text-3xl font-bold">
                {t("information.customerInfoTitle")}
            </h2>

            <InfoSection
                items={[
                    t("information.customerRequirements.item1"),
                    t("information.customerRequirements.item2"),
                    t("information.customerRequirements.item3"),
                ]}
            />

            {/* TITLE 2 */}
            <h2 className="mb-8 text-center md:text-4xl text-3xl font-bold">
                {t("information.storeInfoTitle")}
            </h2>

            <InfoSection
                items={[
                    t("information.storeRequirements.item1"),
                    t("information.storeRequirements.item2"),
                    t("information.storeRequirements.item3"),
                    t("information.storeRequirements.item4"),
                ]}
            />

            {/* STEPS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <StepCard
                    step={1}
                    title={t("information.steps.customerInformation.title")}
                    items={[
                        t("information.steps.customerInformation.items.0"),
                        t("information.steps.customerInformation.items.1"),
                        t("information.steps.customerInformation.items.2"),
                        t("information.steps.customerInformation.items.3"),
                        t("information.steps.customerInformation.items.4"),
                        t("information.steps.customerInformation.items.5"),
                        t("information.steps.customerInformation.items.6"),
                        t("information.steps.customerInformation.items.7"),
                        t("information.steps.customerInformation.items.8"),
                    ]}
                />
                <StepCard
                    step={2}
                    title={t("information.steps.sourceOfIncome.title")}
                    items={[
                        t("information.steps.sourceOfIncome.items.0"),
                        t("information.steps.sourceOfIncome.items.1"),
                        t("information.steps.sourceOfIncome.items.2"),
                        t("information.steps.sourceOfIncome.items.3"),
                        t("information.steps.sourceOfIncome.items.4"),
                        t("information.steps.sourceOfIncome.items.5"),
                        t("information.steps.sourceOfIncome.items.6"),
                        t("information.steps.sourceOfIncome.items.7"),
                        t("information.steps.sourceOfIncome.items.8"),
                        t("information.steps.sourceOfIncome.items.9"),
                    ]}
                />

                <StepCard
                    step={3}
                    title={t("information.steps.references.title")}
                    items={[
                        t("information.steps.references.items.0"),
                        t("information.steps.references.items.1"),
                        t("information.steps.references.items.2"),
                        t("information.steps.references.items.3"),
                    ]}
                    footer={
                        <div>
                            <p className="font-semibold">
                                {t("information.footer.needHelp")}
                            </p>
                            <p className="font-bold">
                                {t("information.footer.call")}
                            </p>
                            <p className="text-xs mt-1">
                                {t("information.footer.hours")}
                            </p>
                        </div>
                    }
                />
            </div>
        </div>
    );
}