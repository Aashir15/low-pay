import React from "react";
import {
    ShoppingBag,
    FileText,
    AlertCircle,
    FileWarning,
    DollarSign,
    Package,
    Shield,
    CreditCard,
    Truck,
    Clock,
    Mail,
    Lock,
    Globe,
    Scale,
    BookOpen,
    Info,
    CheckCircle,
    Phone,
    Database,
    Eye,
    Layers,
    HelpCircle,
} from "lucide-react";

import { useTranslation } from "react-i18next";

export default function TermsConditions() {
    const { t } = useTranslation();

    // Get benefits items array from translation
    const benefitsItems = t("terms.benefits.items", { returnObjects: true });
    // Get license items array from translation
    const licenseItems = t("terms.additional.license.items", { returnObjects: true });
    // Get additional terms items array from translation
    const additionalTermsItems = t("terms.additional.additionalTerms.items", { returnObjects: true });

    return (
        <section className="md:py-12 py-8 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* PAGE TITLE */}
                <div className="w-full bg-(--primary-color) text-white py-16 px-6 text-center rounded-3xl mb-8 shadow-lg">
                    <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                        {t("terms.title")}
                    </h1>
                    <p className="text-blue-100 mt-4">{t("terms.lastUpdated")}</p>
                </div>

                <div className="text-gray-700 text-lg space-y-6 leading-relaxed">
                    {/* INTRODUCTION / OVERVIEW */}
                    <div className="flex flex-row items-start justify-left gap-3">
                        <Info className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.overview.title")}</p>
                    </div>
                    <p>{t("terms.overview.paragraph1")}</p>
                    <p className="font-semibold text-red-700 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        {t("terms.overview.warning")}
                    </p>
                    <p>{t("terms.overview.paragraph2")}</p>
                    <p>{t("terms.overview.paragraph3")}</p>

                    {/* CUSTOMER BENEFITS */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-8">
                        <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                        <p className="font-bold text-xl">{t("terms.benefits.title")}</p>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 ml-4">
                        {benefitsItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    {/* SECTION 1 - SERVICES */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-8">
                        <Layers className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.services.title")}</p>
                    </div>
                    <p>
                        <span className="font-semibold">{t("terms.services.submittingApplications.title")}</span> {t("terms.services.submittingApplications.text")}
                    </p>
                    <p>{t("terms.services.submittingApplications.text2")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Mail className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.services.email.title")}</p>
                    </div>
                    <p>{t("terms.services.email.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Lock className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.services.security.title")}</p>
                    </div>
                    <p>{t("terms.services.security.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Phone className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.services.technicalIssues.title")}</p>
                    </div>
                    <p>{t("terms.services.technicalIssues.text")}</p>

                    {/* SECTION 2 - LIMITATIONS, LIABILITIES, AND REMEDIES */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-8">
                        <AlertCircle className="w-6 h-6 text-red-600 mt-1" />
                        <p className="font-bold text-xl">{t("terms.limitations.title")}</p>
                    </div>
                    <p>{t("terms.limitations.intro")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Shield className="w-6 h-6 text-red-600 mt-1" />
                        <p className="font-bold text-xl">{t("terms.limitations.unauthorizedActivity.title")}</p>
                    </div>
                    <p>{t("terms.limitations.unauthorizedActivity.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Clock className="w-6 h-6 text-red-600 mt-1" />
                        <p className="font-bold text-xl">{t("terms.limitations.timeliness.title")}</p>
                    </div>
                    <p>{t("terms.limitations.timeliness.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Globe className="w-6 h-6 text-red-600 mt-1" />
                        <p className="font-bold text-xl">{t("terms.limitations.availability.title")}</p>
                    </div>
                    <p>{t("terms.limitations.availability.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <FileWarning className="w-6 h-6 text-red-600 mt-1" />
                        <p className="font-bold text-xl">{t("terms.limitations.termination.title")}</p>
                    </div>
                    <p>{t("terms.limitations.termination.text")}</p>

                    {/* SECTION 3 - ADDITIONAL PROVISIONS */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-8">
                        <BookOpen className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.additional.title")}</p>
                    </div>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Lock className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.additional.privacy.title")}</p>
                    </div>
                    <p>{t("terms.additional.privacy.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Database className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.additional.copyright.title")}</p>
                    </div>
                    <p>{t("terms.additional.copyright.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Eye className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.additional.trademarks.title")}</p>
                    </div>
                    <p>{t("terms.additional.trademarks.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <CreditCard className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.additional.license.title")}</p>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 ml-4">
                        {licenseItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <p>{t("terms.additional.license.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Package className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.additional.otherBusinesses.title")}</p>
                    </div>
                    <p>{t("terms.additional.otherBusinesses.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <HelpCircle className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.additional.disclaimer.title")}</p>
                    </div>
                    <p className="font-semibold text-red-700 bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                        {t("terms.additional.disclaimer.warning")}
                    </p>
                    <p>{t("terms.additional.disclaimer.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Scale className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.additional.governingLaw.title")}</p>
                    </div>
                    <p>{t("terms.additional.governingLaw.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <FileText className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("terms.additional.additionalTerms.title")}</p>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 ml-4">
                        {additionalTermsItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}