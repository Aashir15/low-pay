import { useState } from "react";
import {
    Send,
    CheckCircle,
    AlertCircle,
    LoaderCircle,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "../components/PrimaryBtn"
import { useLocation } from "react-router-dom";

const initialFormData = {
    fullName: "",
    title: "",
    storeName: "",
    phone: "",
    email: "",
    storeType: "",
    aboutUs: "",
    businessAddress: "",
    city: "",
    state: "",
    zipCode: "",
    numberOfLocations: "",
    comments: "",
};

export default function Contact() {
    const { t } = useTranslation();

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [loading, setLoading] = useState(false);

    const storeTypes = [
        "multiCarrierStore",
        "boostMobile",
        "cricketWireless",
        "metroPCS",
        "totalWireless",
        "electronicStore",
    ];

    const aboutUs = [
        "claudia",
        "ray",
        "elizabeth",
        "carla",
        "maxie",
        "steven",
        "gregory",
        "mike",
        "luis",
        "other",
    ];

    // Comments are optional. Everything else is required.
    const requiredFields = [
        "fullName",
        "title",
        "storeName",
        "phone",
        "email",
        "storeType",
        "aboutUs",
        "businessAddress",
        "city",
        "state",
        "zipCode",
        "numberOfLocations",
    ];

    const validateField = (name, value) => {
        const cleanValue = String(value ?? "").trim();

        if (requiredFields.includes(name) && !cleanValue) {
            return "required";
        }

        if (
            name === "fullName" &&
            cleanValue &&
            cleanValue.length < 2
        ) {
            return "invalidFullName";
        }

        if (
            name === "email" &&
            cleanValue &&
            !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(cleanValue)
        ) {
            return "invalidEmail";
        }

        if (name === "phone" && cleanValue) {
            const phoneDigits = cleanValue.replace(/\D/g, "");

            if (phoneDigits.length < 10 || phoneDigits.length > 15) {
                return "invalidPhone";
            }
        }

        if (
            name === "zipCode" &&
            cleanValue &&
            !/^\d{5}(-\d{4})?$/.test(cleanValue)
        ) {
            return "invalidZipCode";
        }

        if (name === "numberOfLocations" && cleanValue) {
            const locations = Number(cleanValue);

            if (!Number.isInteger(locations) || locations < 1) {
                return "invalidLocations";
            }
        }

        if (name === "comments" && cleanValue.length > 1000) {
            return "commentsTooLong";
        }

        return "";
    };

    const validateForm = () => {
        const newErrors = {};

        Object.entries(formData).forEach(([name, value]) => {
            const errorKey = validateField(name, value);

            if (errorKey) {
                newErrors[name] = errorKey;
            }
        });

        setErrors(newErrors);

        const firstErrorField = Object.keys(newErrors)[0];

        if (firstErrorField) {
            requestAnimationFrame(() => {
                const field = document.querySelector(
                    `[name="${firstErrorField}"]`
                );

                field?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });

                field?.focus();
            });
        }

        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setSuccess(false);
        setSubmitError("");

        // Remove the error as soon as the user starts correcting it.
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const errorKey = validateField(name, value);

        setErrors((prev) => ({
            ...prev,
            [name]: errorKey,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSuccess(false);
        setSubmitError("");

        if (!validateForm()) return;

        setLoading(true);

        const data = {
            access_key:
                "a78b82f0-f470-4353-8ab6-d1d03d8fb6dd",
            subject: "New Store Inquiry",
            from_name: "Low Weekly Payment",

            "Full Name": formData.fullName.trim(),
            Title: formData.title.trim(),
            "Store Name": formData.storeName.trim(),
            "Phone Number": formData.phone.trim(),
            Email: formData.email.trim(),
            "Store Type": formData.storeType,
            "How did you hear about us?": formData.aboutUs,
            "Business Address": formData.businessAddress.trim(),
            City: formData.city.trim(),
            State: formData.state.trim(),
            "Zip Code": formData.zipCode.trim(),
            "Number of Locations": formData.numberOfLocations,
            Comments: formData.comments.trim() || "No comments provided",
        };

        try {
            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(data),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.message || "Form submission failed."
                );
            }

            setSuccess(true);
            setFormData(initialFormData);
            setErrors({
                fullName: "required",
            });

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        } catch (error) {
            console.error("Contact form error:", error);

            setSubmitError(
                t("contact.errors.submitFailed", {
                    defaultValue:
                        "Something went wrong. Please try again.",
                })
            );
        } finally {
            setLoading(false);
        }
    };

    const getInputClass = (fieldName) => `
        w-full rounded-xl border bg-white px-4 py-3 text-sm text-black
        outline-none transition-all duration-300
        placeholder:text-gray-400
        ${errors[fieldName]
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-100"
            : "border-gray-200 focus:border-[var(--secondary-color)] focus:ring-2 focus:ring-[var(--secondary-color)]/20"
        }
    `;

    const FieldError = ({ name }) => {
        if (!errors[name]) return null;

        return (
            <p
                id={`${name}-error`}
                className="mt-1.5 flex items-center gap-1.5 text-sm text-red-600"
            >
                <AlertCircle size={15} className="shrink-0" />

                <span>
                    {t(`contact.errors.${errors[name]}`)}
                </span>
            </p>
        );
    };

    const location = useLocation();
    const lang = location.pathname.split("/")[1] || "en";

    return (
        <section className="px-4 py-8 sm:px-6 md:py-12">
            <div className="mx-auto max-w-3xl">

                <div className="mb-6 w-full rounded-3xl border border-gray-200 px-4 py-8 shadow-lg">
                    <div className="flex flex-col items-center justify-center gap-6 text-center md:flex-row md:text-left">
                        <div className="shrink-0">
                            <img
                                src="/assets/surg-logo.png"
                                alt="Surg logo"
                                className="h-auto w-24 sm:w-28 md:w-36 lg:w-40"
                            />
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <h2 className="text-xl font-medium sm:text-2xl md:text-3xl">
                                Talk to the agent or fill out the form
                            </h2>

                            <a
                                href="tel:9015571809"
                                className="mt-2 block break-words text-3xl font-bold tracking-wide text-(--primary-color) transition hover:opacity-80 sm:text-4xl md:text-5xl font-sans lg:text-6xl"
                            >
                                901-557-1809
                            </a>

                            <div className="mt-6 w-full text-center">
                                <Button
                                    text={t("header.nav.becomeDealer")}
                                    to={`/${lang}/start-application`}
                                    className="w-full sm:w-auto"
                                />
                            </div>

                            <p className="mt-5 max-w-xl text-sm text-gray-600 sm:text-base">
                                Business hours are Monday to Friday,
                                9:00 AM – 6:00 PM Central Time.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-3xl border border-gray-300 bg-white p-5 shadow-2xl sm:p-6 md:p-10">
                    {success && (
                        <div
                            role="status"
                            className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700"
                        >
                            <CheckCircle
                                size={21}
                                className="mt-0.5 shrink-0"
                            />
                            <p>{t("contact.success")}</p>
                        </div>
                    )}

                    {submitError && (
                        <div
                            role="alert"
                            className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-red-700"
                        >
                            <AlertCircle
                                size={21}
                                className="mt-0.5 shrink-0"
                            />
                            <p>{submitError}</p>
                        </div>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        noValidate
                        className="space-y-5"
                    >
                        <div>
                            <input
                                type="text"
                                name="fullName"
                                autoComplete="name"
                                placeholder={t(
                                    "contact.fields.fullName"
                                )}
                                value={formData.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={Boolean(errors.fullName)}
                                aria-describedby={
                                    errors.fullName
                                        ? "fullName-error"
                                        : undefined
                                }
                                className={getInputClass("fullName")}
                            />
                            <FieldError name="fullName" />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="title"
                                autoComplete="organization-title"
                                placeholder={t("contact.fields.title")}
                                value={formData.title}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={Boolean(errors.title)}
                                aria-describedby={
                                    errors.title
                                        ? "title-error"
                                        : undefined
                                }
                                className={getInputClass("title")}
                            />
                            <FieldError name="title" />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="storeName"
                                autoComplete="organization"
                                placeholder={t(
                                    "contact.fields.storeName"
                                )}
                                value={formData.storeName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={Boolean(
                                    errors.storeName
                                )}
                                aria-describedby={
                                    errors.storeName
                                        ? "storeName-error"
                                        : undefined
                                }
                                className={getInputClass("storeName")}
                            />
                            <FieldError name="storeName" />
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    inputMode="tel"
                                    autoComplete="tel"
                                    placeholder={t(
                                        "contact.fields.phone"
                                    )}
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(errors.phone)}
                                    aria-describedby={
                                        errors.phone
                                            ? "phone-error"
                                            : undefined
                                    }
                                    className={getInputClass("phone")}
                                />
                                <FieldError name="phone" />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    inputMode="email"
                                    autoComplete="email"
                                    placeholder={t(
                                        "contact.fields.email"
                                    )}
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(errors.email)}
                                    aria-describedby={
                                        errors.email
                                            ? "email-error"
                                            : undefined
                                    }
                                    className={getInputClass("email")}
                                />
                                <FieldError name="email" />
                            </div>
                        </div>

                        <div>
                            <select
                                name="storeType"
                                value={formData.storeType}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={Boolean(errors.storeType)}
                                aria-describedby={
                                    errors.storeType
                                        ? "storeType-error"
                                        : undefined
                                }
                                className={getInputClass("storeType")}
                            >
                                <option value="">
                                    {t(
                                        "contact.fields.selectStoreType"
                                    )}
                                </option>

                                {storeTypes.map((type) => (
                                    <option
                                        key={type}
                                        value={t(
                                            `contact.storeTypes.${type}`
                                        )}
                                    >
                                        {t(
                                            `contact.storeTypes.${type}`
                                        )}
                                    </option>
                                ))}
                            </select>
                            <FieldError name="storeType" />
                        </div>

                        <div>
                            <select
                                name="aboutUs"
                                value={formData.aboutUs}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={Boolean(errors.aboutUs)}
                                aria-describedby={
                                    errors.aboutUs
                                        ? "aboutUs-error"
                                        : undefined
                                }
                                className={getInputClass("aboutUs")}
                            >
                                <option value="">
                                    {t(
                                        "contact.fields.selectAboutUs"
                                    )}
                                </option>

                                {aboutUs.map((person) => (
                                    <option
                                        key={person}
                                        value={t(
                                            `contact.aboutUs.${person}`
                                        )}
                                    >
                                        {t(
                                            `contact.aboutUs.${person}`
                                        )}
                                    </option>
                                ))}
                            </select>
                            <FieldError name="aboutUs" />
                        </div>

                        <div>
                            <input
                                type="text"
                                name="businessAddress"
                                autoComplete="street-address"
                                placeholder={t(
                                    "contact.fields.businessAddress"
                                )}
                                value={formData.businessAddress}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={Boolean(
                                    errors.businessAddress
                                )}
                                aria-describedby={
                                    errors.businessAddress
                                        ? "businessAddress-error"
                                        : undefined
                                }
                                className={getInputClass(
                                    "businessAddress"
                                )}
                            />
                            <FieldError name="businessAddress" />
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            <div>
                                <input
                                    type="text"
                                    name="city"
                                    autoComplete="address-level2"
                                    placeholder={t(
                                        "contact.fields.city"
                                    )}
                                    value={formData.city}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(errors.city)}
                                    aria-describedby={
                                        errors.city
                                            ? "city-error"
                                            : undefined
                                    }
                                    className={getInputClass("city")}
                                />
                                <FieldError name="city" />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="state"
                                    autoComplete="address-level1"
                                    placeholder={t(
                                        "contact.fields.state"
                                    )}
                                    value={formData.state}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(errors.state)}
                                    aria-describedby={
                                        errors.state
                                            ? "state-error"
                                            : undefined
                                    }
                                    className={getInputClass("state")}
                                />
                                <FieldError name="state" />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="zipCode"
                                    inputMode="numeric"
                                    autoComplete="postal-code"
                                    placeholder={t(
                                        "contact.fields.zipCode"
                                    )}
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    aria-invalid={Boolean(
                                        errors.zipCode
                                    )}
                                    aria-describedby={
                                        errors.zipCode
                                            ? "zipCode-error"
                                            : undefined
                                    }
                                    className={getInputClass("zipCode")}
                                />
                                <FieldError name="zipCode" />
                            </div>
                        </div>

                        <div>
                            <input
                                type="number"
                                name="numberOfLocations"
                                min="1"
                                step="1"
                                inputMode="numeric"
                                placeholder={t(
                                    "contact.fields.numberOfLocations"
                                )}
                                value={formData.numberOfLocations}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={Boolean(
                                    errors.numberOfLocations
                                )}
                                aria-describedby={
                                    errors.numberOfLocations
                                        ? "numberOfLocations-error"
                                        : undefined
                                }
                                className={getInputClass(
                                    "numberOfLocations"
                                )}
                            />
                            <FieldError name="numberOfLocations" />
                        </div>

                        <div>
                            <textarea
                                name="comments"
                                rows={5}
                                maxLength={1000}
                                placeholder={t(
                                    "contact.fields.comments"
                                )}
                                value={formData.comments}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                aria-invalid={Boolean(
                                    errors.comments
                                )}
                                aria-describedby={
                                    errors.comments
                                        ? "comments-error"
                                        : undefined
                                }
                                className={`${getInputClass(
                                    "comments"
                                )} resize-none`}
                            />

                            <div className="mt-1 flex items-start justify-between gap-3">
                                <FieldError name="comments" />

                                <span className="ml-auto text-xs text-gray-400">
                                    {formData.comments.length}/1000
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-[var(--primary-color)] px-6 py-4 font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                        >
                            <span className="flex items-center justify-center gap-2">
                                {loading ? (
                                    <>
                                        <LoaderCircle
                                            size={19}
                                            className="animate-spin"
                                        />
                                        {t("contact.submitting")}
                                    </>
                                ) : (
                                    <>
                                        {t("contact.submit")}
                                        <Send size={18} />
                                    </>
                                )}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}