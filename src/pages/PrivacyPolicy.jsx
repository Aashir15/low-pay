import React from "react";
import {
    Shield,
    FileText,
    AlertCircle,
    Lock,
    Mail,
    Phone,
    Globe,
    Database,
    Eye,
    Cookie,
    UserCheck,
    Clock,
    Truck,
    Scale,
    BookOpen,
    Info,
    CheckCircle,
    XCircle,
    Users,
    Fingerprint,
    Server,
    Share2,
    Trash2,
    AlertTriangle,
    Heart,
    Building,
    MapPin,
    Calendar,
    MousePointer,
    Smartphone,
    Wifi,
    Activity,
    PenTool,
    Send,
    Download,
    ExternalLink,
} from "lucide-react";

import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    // Get arrays from translation
    const benefitsItems = t("privacy.benefits.items", { returnObjects: true });
    const personalDataItems = t("privacy.collectingData.typesOfData.personalDataItems", { returnObjects: true });
    const usePurposes = t("privacy.collectingData.useOfPersonalData.purposes", { returnObjects: true });
    const shareSituations = t("privacy.collectingData.useOfPersonalData.shareSituations", { returnObjects: true });
    const otherLegalItems = t("privacy.collectingData.disclosure.otherLegalItems", { returnObjects: true });
    const rightsItems = t("privacy.ccpa.rightsItems", { returnObjects: true });

    // Get table data
    const tableRows = t("privacy.ccpa.table.rows", { returnObjects: true });

    return (
        <section className="md:py-12 py-8 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                {/* PAGE TITLE */}
                <div className="w-full bg-(--primary-color) text-white py-16 px-6 text-center rounded-3xl mb-8 shadow-lg">
                    <h1 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                        {t("privacy.title")}
                    </h1>
                    <p className="text-blue-100 mt-4">{t("privacy.lastUpdated")}</p>
                </div>

                <div className="text-gray-700 text-lg space-y-6 leading-relaxed">
                    {/* INTRODUCTION */}
                    <div className="flex flex-row items-start justify-left gap-3">
                        <Info className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.introduction.title")}</p>
                    </div>
                    <p>{t("privacy.introduction.paragraph1")}</p>
                    <p>{t("privacy.introduction.paragraph2")}</p>

                    {/* CUSTOMER BENEFITS */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-8">
                        <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.benefits.title")}</p>
                    </div>
                    <ul className="list-disc pl-6 space-y-2 ml-4">
                        {benefitsItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    {/* INTERPRETATION AND DEFINITIONS */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-8">
                        <BookOpen className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.interpretation.title")}</p>
                    </div>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <PenTool className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.interpretation.interpretationTitle")}</p>
                    </div>
                    <p>{t("privacy.interpretation.interpretationText")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Users className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.interpretation.definitionsTitle")}</p>
                    </div>
                    <ul className="list-disc pl-6 space-y-3 ml-4">
                        <li><span className="font-semibold">Account</span> {t("privacy.interpretation.definitions.account")}</li>
                        <li><span className="font-semibold">Affiliate</span> {t("privacy.interpretation.definitions.affiliate")}</li>
                        <li><span className="font-semibold">Business</span> {t("privacy.interpretation.definitions.business")}</li>
                        <li><span className="font-semibold">CCPA and/or CPRA</span> {t("privacy.interpretation.definitions.ccpa")}</li>
                        <li><span className="font-semibold">Company</span> {t("privacy.interpretation.definitions.company")}</li>
                        <li><span className="font-semibold">Consumer</span> {t("privacy.interpretation.definitions.consumer")}</li>
                        <li><span className="font-semibold">Cookies</span> {t("privacy.interpretation.definitions.cookies")}</li>
                        <li><span className="font-semibold">Device</span> {t("privacy.interpretation.definitions.device")}</li>
                        <li><span className="font-semibold">Do Not Track (DNT)</span> {t("privacy.interpretation.definitions.dnt")}</li>
                        <li><span className="font-semibold">Personal Data</span> {t("privacy.interpretation.definitions.personalData")}</li>
                        <li><span className="font-semibold">Service</span> {t("privacy.interpretation.definitions.service")}</li>
                        <li><span className="font-semibold">Service Provider</span> {t("privacy.interpretation.definitions.serviceProvider")}</li>
                        <li><span className="font-semibold">Usage Data</span> {t("privacy.interpretation.definitions.usageData")}</li>
                        <li><span className="font-semibold">Website</span> {t("privacy.interpretation.definitions.website")}</li>
                        <li><span className="font-semibold">You</span> {t("privacy.interpretation.definitions.you")}</li>
                    </ul>

                    {/* COLLECTING AND USING YOUR PERSONAL DATA */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-8">
                        <Database className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.collectingData.title")}</p>
                    </div>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <FileText className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.collectingData.typesOfData.title")}</p>
                    </div>

                    <p className="font-semibold mt-4">{t("privacy.collectingData.typesOfData.personalData")}</p>
                    <p>{t("privacy.collectingData.typesOfData.personalDataText")}</p>
                    <ul className="list-disc pl-6 space-y-1 ml-4">
                        {personalDataItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <p className="font-semibold mt-4">{t("privacy.collectingData.typesOfData.usageData")}</p>
                    <p>{t("privacy.collectingData.typesOfData.usageDataText")}</p>

                    {/* TRACKING TECHNOLOGIES AND COOKIES */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Cookie className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.collectingData.trackingTechnologies.title")}</p>
                    </div>
                    <p>{t("privacy.collectingData.trackingTechnologies.text")}</p>
                    <ul className="list-disc pl-6 space-y-2 ml-4">
                        <li><span className="font-semibold">Cookies or Browser Cookies.</span> {t("privacy.collectingData.trackingTechnologies.cookiesText")}</li>
                        <li><span className="font-semibold">Web Beacons.</span> {t("privacy.collectingData.trackingTechnologies.webBeaconsText")}</li>
                    </ul>
                    <p>{t("privacy.collectingData.trackingTechnologies.cookieTypes")}</p>
                    <ul className="list-disc pl-6 space-y-2 ml-4">
                        <li>{t("privacy.collectingData.trackingTechnologies.necessaryCookies")}</li>
                        <li>{t("privacy.collectingData.trackingTechnologies.policyCookies")}</li>
                        <li>{t("privacy.collectingData.trackingTechnologies.functionalityCookies")}</li>
                    </ul>

                    {/* USE OF YOUR PERSONAL DATA */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Activity className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.collectingData.useOfPersonalData.title")}</p>
                    </div>
                    <p>{t("privacy.collectingData.useOfPersonalData.text")}</p>
                    <ul className="list-disc pl-6 space-y-2 ml-4">
                        {usePurposes.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    <p className="font-semibold mt-4">{t("privacy.collectingData.useOfPersonalData.shareTitle")}</p>
                    <ul className="list-disc pl-6 space-y-2 ml-4">
                        {shareSituations.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    {/* RETENTION AND TRANSFER */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Clock className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.collectingData.retention.title")}</p>
                    </div>
                    <p>{t("privacy.collectingData.retention.text")}</p>

                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Globe className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.collectingData.transfer.title")}</p>
                    </div>
                    <p>{t("privacy.collectingData.transfer.text")}</p>

                    {/* DELETE YOUR PERSONAL DATA */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Trash2 className="w-6 h-6 text-red-600 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.collectingData.deleteData.title")}</p>
                    </div>
                    <p>{t("privacy.collectingData.deleteData.text")}</p>

                    {/* DISCLOSURE OF YOUR PERSONAL DATA */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Share2 className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.collectingData.disclosure.title")}</p>
                    </div>
                    <p className="font-semibold mt-2">{t("privacy.collectingData.disclosure.businessTransactions")}</p>
                    <p>{t("privacy.collectingData.disclosure.businessTransactionsText")}</p>
                    <p className="font-semibold mt-2">{t("privacy.collectingData.disclosure.lawEnforcement")}</p>
                    <p>{t("privacy.collectingData.disclosure.lawEnforcementText")}</p>
                    <p className="font-semibold mt-2">{t("privacy.collectingData.disclosure.otherLegal")}</p>
                    <ul className="list-disc pl-6 space-y-1 ml-4">
                        {otherLegalItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    {/* SECURITY */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Shield className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.collectingData.security.title")}</p>
                    </div>
                    <p className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                        {t("privacy.collectingData.security.text")}
                    </p>

                    {/* CCPA/CPRA PRIVACY NOTICE */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-8">
                        <Scale className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.ccpa.title")}</p>
                    </div>
                    <p>{t("privacy.ccpa.text")}</p>

                    {/* CATEGORIES OF PERSONAL INFORMATION */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Fingerprint className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.ccpa.categoriesTitle")}</p>
                    </div>
                    <p>{t("privacy.ccpa.categoriesText")}</p>

                    <div className="overflow-x-auto mt-4">
                        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">{t("privacy.ccpa.table.category")}</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 border-b">{t("privacy.ccpa.table.examples")}</th>
                                    <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700 border-b">{t("privacy.ccpa.table.collected")}</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm">
                                {Object.entries(tableRows).map(([key, row]) => (
                                    <tr key={key} className="border-b">
                                        <td className="px-4 py-2 font-medium">{row.name}</td>
                                        <td className="px-4 py-2">{row.examples}</td>
                                        <td className={`px-4 py-2 text-center ${row.collected === "Yes" ? "text-green-600" : "text-red-600"}`}>
                                            {row.collected === "Yes" ? "✓ Yes" : "✗ No"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* YOUR RIGHTS UNDER CCPA/CPRA */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-8">
                        <UserCheck className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.ccpa.rightsTitle")}</p>
                    </div>
                    <p>{t("privacy.ccpa.rightsText")}</p>
                    <ul className="list-disc pl-6 space-y-2 ml-4">
                        {rightsItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>

                    {/* DO NOT SELL MY PERSONAL INFORMATION */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <XCircle className="w-6 h-6 text-red-600 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.ccpa.doNotSell.title")}</p>
                    </div>
                    <p>{t("privacy.ccpa.doNotSell.text")}</p>

                    {/* CHILDREN'S PRIVACY */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Heart className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.ccpa.childrensPrivacy.title")}</p>
                    </div>
                    <p>{t("privacy.ccpa.childrensPrivacy.text")}</p>

                    {/* LINKS TO OTHER WEBSITES */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <ExternalLink className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.ccpa.linksToOtherWebsites.title")}</p>
                    </div>
                    <p>{t("privacy.ccpa.linksToOtherWebsites.text")}</p>

                    {/* CHANGES TO THIS PRIVACY POLICY */}
                    <div className="flex flex-row items-start justify-left gap-3 mt-6">
                        <Calendar className="w-6 h-6 text-blue-900 mt-1" />
                        <p className="font-bold text-xl">{t("privacy.ccpa.changesToPolicy.title")}</p>
                    </div>
                    <p>{t("privacy.ccpa.changesToPolicy.text")}</p>
                </div>
            </div>
        </section>
    );
}