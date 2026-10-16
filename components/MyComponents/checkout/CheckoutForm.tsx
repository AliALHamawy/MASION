"use client";

import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cash01Icon, CreditCardIcon } from "@hugeicons/core-free-icons";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export interface CheckoutFormData {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    shippingMethod: "standard" | "express";
    paymentMethod: "card" | "cash";
    cardNumber: string;
    expiry: string;
    securityCode: string;
}

type RequiredField =
    | "email"
    | "firstName"
    | "lastName"
    | "address"
    | "city"
    | "postalCode"
    | "country"
    | "cardNumber"
    | "expiry"
    | "securityCode";

interface CheckoutFormProps {
    onSubmit: (data: CheckoutFormData) => void;
    onShippingMethodChange: (method: CheckoutFormData["shippingMethod"]) => void;
}

const initialValues: CheckoutFormData = {
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    shippingMethod: "standard",
    paymentMethod: "card",
    cardNumber: "",
    expiry: "",
    securityCode: "",
};

const inputClass =
    "min-h-12 w-full rounded-md border border-border bg-white px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:ring-2 focus:ring-ring/30";

function Field({
    label,
    name,
    value,
    onChange,
    placeholder,
    error,
    type = "text",
}: {
    label: string;
    name: keyof CheckoutFormData;
    value: string;
    onChange: (name: keyof CheckoutFormData, value: string) => void;
    placeholder: string;
    error?: string;
    type?: string;
}) {
    return (
        <label className="block text-sm font-medium text-foreground">
            <span>{label}</span>
            <input
                required
                type={type}
                name={name}
                value={value}
                onChange={(event) => onChange(name, event.target.value)}
                placeholder={placeholder}
                aria-invalid={Boolean(error)}
                className={`${inputClass} mt-1 ${error ? "border-destructive/70" : ""}`}
            />
            {error && <span className="mt-1 block text-[10px] text-destructive">{error}</span>}
        </label>
    );
}

export default function CheckoutForm({ onSubmit, onShippingMethodChange }: CheckoutFormProps) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});

    const updateValue = (name: keyof CheckoutFormData, value: string) => {
        setValues((current) => ({ ...current, [name]: value }));
        setErrors((current) => ({ ...current, [name]: undefined }));
    };

    const validate = () => {
        const requiredFields: RequiredField[] = [
            "email",
            "firstName",
            "lastName",
            "address",
            "city",
            "postalCode",
            "country",
        ];
        if (values.paymentMethod === "card") {
            requiredFields.push("cardNumber", "expiry", "securityCode");
        }
        const nextErrors: Partial<Record<keyof CheckoutFormData, string>> = {};
        requiredFields.forEach((field) => {
            if (!values[field].trim()) nextErrors[field] = "Required";
        });
        if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) {
            nextErrors.email = "Enter a valid email";
        }
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (validate()) onSubmit(values);
    };

    return (
        <form id="checkout-form" className="space-y-9" onSubmit={handleSubmit} noValidate>
            <section>
                <SectionHeading number="01" title="Contact information" />
                <Field
                    label="Email address or phone number"
                    name="email"
                    value={values.email}
                    onChange={updateValue}
                    placeholder="you@example.com"
                    error={errors.email}
                    type="email"
                />
            </section>

            <section>
                <SectionHeading number="02" title="Shipping address" />
                <div className="grid gap-3 sm:grid-cols-2">
                    <Field label="First name" name="firstName" value={values.firstName} onChange={updateValue} placeholder="First name" error={errors.firstName} />
                    <Field label="Last name" name="lastName" value={values.lastName} onChange={updateValue} placeholder="Last name" error={errors.lastName} />
                </div>
                <div className="mt-3">
                    <Field label="Street address" name="address" value={values.address} onChange={updateValue} placeholder="House number and street name" error={errors.address} />
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <Field label="City" name="city" value={values.city} onChange={updateValue} placeholder="City" error={errors.city} />
                    <Field label="Postal code" name="postalCode" value={values.postalCode} onChange={updateValue} placeholder="Postal code" error={errors.postalCode} />
                </div>
                <div className="mt-3">
                    <label className="block text-sm font-medium text-foreground">
                        <span>Country / region</span>
                        <Select
                            value={values.country}
                            onValueChange={(value) => updateValue("country", value)}
                        >
                            <SelectTrigger className={`${inputClass} mt-1 h-auto rounded-md`}>
                                <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="United States">United States</SelectItem>
                                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                                <SelectItem value="Germany">Germany</SelectItem>
                                <SelectItem value="France">France</SelectItem>
                                <SelectItem value="Japan">Japan</SelectItem>
                            </SelectContent>
                        </Select>
                        {errors.country && <span className="mt-1 block text-[10px] text-destructive">{errors.country}</span>}
                    </label>
                </div>
            </section>

            <section>
                <SectionHeading number="03" title="Shipping method" />
                <div className="space-y-2">
                    <ShippingOption
                        checked={values.shippingMethod === "standard"}
                        onChange={() => {
                            updateValue("shippingMethod", "standard");
                            onShippingMethodChange("standard");
                        }}
                        title="Standard shipping"
                        detail="5–7 business days"
                        price="Free"
                    />
                    <ShippingOption
                        checked={values.shippingMethod === "express"}
                        onChange={() => {
                            updateValue("shippingMethod", "express");
                            onShippingMethodChange("express");
                        }}
                        title="Express delivery"
                        detail="2–3 business days"
                        price="$15.00"
                    />
                </div>
            </section>

            <section>
                <SectionHeading number="04" title="Payment method" />
                <div className="mb-4 flex items-end gap-6 border-b border-border">
                    <PaymentOption
                        checked={values.paymentMethod === "card"}
                        onChange={() => updateValue("paymentMethod", "card")}
                        icon={CreditCardIcon}
                        title="Credit card"
                    />
                    <PaymentOption
                        checked={values.paymentMethod === "cash"}
                        onChange={() => updateValue("paymentMethod", "cash")}
                        icon={Cash01Icon}
                        title="Cash on delivery"
                    />
                </div>
                {values.paymentMethod === "card" ? (
                    <div className="space-y-3">
                        <p className="text-sm font-medium text-muted-foreground">Secure checkout. We do not store your payment details.</p>
                        <Field label="Card number" name="cardNumber" value={values.cardNumber} onChange={updateValue} placeholder="4242 4242 4242 4242" error={errors.cardNumber} />
                        <div className="grid gap-3 sm:grid-cols-2">
                            <Field label="Expiry date" name="expiry" value={values.expiry} onChange={updateValue} placeholder="12 / 28" error={errors.expiry} />
                            <Field label="Security code" name="securityCode" value={values.securityCode} onChange={updateValue} placeholder="•••" error={errors.securityCode} />
                        </div>
                    </div>
                ) : (
                    <div className="flex items-start gap-4 py-2">
                        <HugeiconsIcon
                            icon={Cash01Icon}
                            size={22}
                            strokeWidth={1.8}
                            className="mt-0.5 shrink-0 text-foreground"
                        />
                        <div>
                            <p className="text-sm font-medium">Pay on arrival</p>
                            <p className="mt-2 text-sm font-medium text-muted-foreground">
                                Preview only. Availability will be confirmed when ordering is connected.
                            </p>
                        </div>
                    </div>
                )}
                <button type="submit" className="sr-only">Complete order</button>
            </section>
        </form>
    );
}

function SectionHeading({ number, title }: { number: string; title: string }) {
    return (
        <div className="mb-5 flex items-baseline gap-3 border-b border-border/70 pb-3">
            <span className="text-xs font-semibold text-muted-foreground">{number}</span>
            <h2 className="font-heading text-lg font-semibold">{title}</h2>
        </div>
    );
}

function ShippingOption({
    checked,
    onChange,
    title,
    detail,
    price,
}: {
    checked: boolean;
    onChange: () => void;
    title: string;
    detail: string;
    price: string;
}) {
    return (
        <label className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-4 text-sm transition-colors ${checked ? "border-primary bg-card" : "border-border/70 bg-background/30"}`}>
            <input type="radio" className="accent-black" checked={checked} onChange={onChange} />
            <span className="flex-1">
                <span className="block text-sm font-medium">{title}</span>
                <span className="block text-xs font-medium text-muted-foreground">{detail}</span>
            </span>
            <span className="text-sm font-semibold">{price}</span>
        </label>
    );
}

function PaymentOption({
    checked,
    onChange,
    icon,
    title,
}: {
    checked: boolean;
    onChange: () => void;
    icon: typeof CreditCardIcon;
    title: string;
}) {
    return (
        <label
            className={`-mb-px flex cursor-pointer items-center gap-2 border-b-2 px-1 pb-3 pt-1 text-sm transition-colors focus-within:outline-none ${
                checked
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
        >
            <input
                type="radio"
                className="sr-only"
                checked={checked}
                onChange={onChange}
                name="paymentMethod"
            />
            <HugeiconsIcon icon={icon} size={17} strokeWidth={1.8} />
            <span className="whitespace-nowrap font-medium">{title}</span>
        </label>
    );
}
