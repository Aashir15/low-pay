import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        fullName: "",
        title: "",
        storeName: "",
        phone: "",
        email: "",
        storeType: "",
        businessAddress: "",
        city: "",
        state: "",
        zipCode: "",
        numberOfLocations: "",
        comments: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const storeTypes = [
        "multiCarrierStore",
        "boostMobile",
        "cricketWireless",
        "metroPCS",
        "totalWireless",
        "electronicStore",
    ];

    const validateForm = () => {
        const newErrors = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (!value.trim()) {
                newErrors[key] = t("contact.errors.required");
            }
        });

        if (
            formData.email &&
            !/^\S+@\S+\.\S+$/.test(formData.email)
        ) {
            newErrors.email = t("contact.errors.invalidEmail");
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        const data = {
            access_key: "a78b82f0-f470-4353-8ab6-d1d03d8fb6dd",
            subject: "New Store Inquiry",
            from_name: "Low Weekly Payment",
            ...formData,
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

            if (result.success) {
                setSuccess(true);

                setFormData({
                    fullName: "",
                    title: "",
                    storeName: "",
                    phone: "",
                    email: "",
                    storeType: "",
                    businessAddress: "",
                    city: "",
                    state: "",
                    zipCode: "",
                    numberOfLocations: "",
                    comments: "",
                });
            }
        } catch (error) {
            alert(t("contact.errors.submitFailed"));
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-black outline-none transition-all duration-300 focus:border-(--secondary-color) focus:ring-2 focus:ring-(--secondary-color)/30";

    return (
        <section className="md:py-12 py-8 px-6">
            <div className="max-w-3xl mx-auto">

                <div className="bg-white border border-gray-300 rounded-3xl shadow-2xl p-6 md:p-10">
                    {success && (
                        <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 p-4 text-green-700">
                            <CheckCircle size={20} />
                            <p>{t("contact.success")}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">

                        <input
                            type="text"
                            name="fullName"
                            placeholder={t("contact.fields.fullName")}
                            value={formData.fullName}
                            onChange={handleChange}
                            className={inputClass}
                        />

                        <input
                            type="text"
                            name="title"
                            placeholder={t("contact.fields.title")}
                            value={formData.title}
                            onChange={handleChange}
                            className={inputClass}
                        />

                        <input
                            type="text"
                            name="storeName"
                            placeholder={t("contact.fields.storeName")}
                            value={formData.storeName}
                            onChange={handleChange}
                            className={inputClass}
                        />

                        <div className="grid md:grid-cols-2 gap-5">
                            <input
                                type="tel"
                                name="phone"
                                placeholder={t("contact.fields.phone")}
                                value={formData.phone}
                                onChange={handleChange}
                                className={inputClass}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder={t("contact.fields.email")}
                                value={formData.email}
                                onChange={handleChange}
                                className={inputClass}
                            />
                        </div>

                        <select
                            name="storeType"
                            value={formData.storeType}
                            onChange={handleChange}
                            className={inputClass}
                        >
                            <option value="">
                                {t("contact.fields.selectStoreType")}
                            </option>

                            {storeTypes.map((type) => (
                                <option key={type} value={t(`contact.storeTypes.${type}`)}>
                                    {t(`contact.storeTypes.${type}`)}
                                </option>
                            ))}
                        </select>

                        <input
                            type="text"
                            name="businessAddress"
                            placeholder={t("contact.fields.businessAddress")}
                            value={formData.businessAddress}
                            onChange={handleChange}
                            className={inputClass}
                        />

                        <div className="grid md:grid-cols-3 gap-5">
                            <input
                                type="text"
                                name="city"
                                placeholder={t("contact.fields.city")}
                                value={formData.city}
                                onChange={handleChange}
                                className={inputClass}
                            />

                            <input
                                type="text"
                                name="state"
                                placeholder={t("contact.fields.state")}
                                value={formData.state}
                                onChange={handleChange}
                                className={inputClass}
                            />

                            <input
                                type="text"
                                name="zipCode"
                                placeholder={t("contact.fields.zipCode")}
                                value={formData.zipCode}
                                onChange={handleChange}
                                className={inputClass}
                            />
                        </div>

                        <input
                            type="number"
                            name="numberOfLocations"
                            placeholder={t("contact.fields.numberOfLocations")}
                            value={formData.numberOfLocations}
                            onChange={handleChange}
                            className={inputClass}
                        />

                        <textarea
                            name="comments"
                            rows="5"
                            placeholder={t("contact.fields.comments")}
                            value={formData.comments}
                            onChange={handleChange}
                            className={`${inputClass} resize-none`}
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-(--primary-color) px-6 py-4 font-bold text-white transition hover:scale-[1.02]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                {loading
                                    ? t("contact.submitting")
                                    : t("contact.submit")}
                                <Send size={18} />
                            </span>
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
}