"use client";

import { FormEvent, useState } from "react";
import { budgetOptions } from "@/lib/home";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "phone" | "service" | "message", string>>;

const serviceOptions = [...services.map((service) => service.name), "Other"];

const fieldClass =
  "mt-2 w-full rounded-2xl border border-line bg-[#0b1018] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan/60";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(form: FormData): Errors {
    const next: Errors = {};
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const service = String(form.get("service") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (name.length < 2) next.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (phone && phone.replace(/\D/g, "").length < 7) next.phone = "Enter a valid phone number or leave it blank.";
    if (!service) next.service = "Choose a service.";
    if (message.length < 20) next.message = "Add at least 20 characters so we understand the project.";
    return next;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    if (String(form.get("company_website") ?? "").trim()) {
      setSent(true);
      return;
    }
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Phone: ${form.get("phone") || "—"}`,
      `Company: ${form.get("company") || "—"}`,
      `Service: ${form.get("service")}`,
      `Budget: ${form.get("budget") || "—"}`,
      "",
      String(form.get("message")),
    ].join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `Project inquiry from ${form.get("name")}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-3xl border border-cyan/30 bg-cyan/10 p-6" role="status">
        <h3 className="font-display text-2xl text-white">Project details are ready to send</h3>
        <p className="mt-3 text-sm leading-6 text-muted">
          Your email app should open with this inquiry addressed to {site.email}. If it does not, send
          the same details directly to that address and we will follow up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl border border-line bg-card p-5 sm:p-7">
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="company_website">Company website</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-white">
            Name
          </label>
          <input id="name" name="name" autoComplete="name" className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name ? (
            <p id="name-error" className="mt-1 text-xs text-cyan">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-white">
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />
          {errors.email ? (
            <p id="email-error" className="mt-1 text-xs text-cyan">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-white">
            Phone
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldClass} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} />
          {errors.phone ? (
            <p id="phone-error" className="mt-1 text-xs text-cyan">
              {errors.phone}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="company" className="text-sm font-medium text-white">
            Company
          </label>
          <input id="company" name="company" autoComplete="organization" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-white">
            Service Needed
          </label>
          <select id="service" name="service" defaultValue="" className={fieldClass} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "service-error" : undefined}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service ? (
            <p id="service-error" className="mt-1 text-xs text-cyan">
              {errors.service}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="budget" className="text-sm font-medium text-white">
            Budget
          </label>
          <select id="budget" name="budget" defaultValue="" className={fieldClass}>
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="text-sm font-medium text-white">
          Message
        </label>
        <textarea id="message" name="message" rows={5} className={fieldClass} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? (
          <p id="message-error" className="mt-1 text-xs text-cyan">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-accent to-violet px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 sm:w-auto"
      >
        Send Project Details
      </button>
    </form>
  );
}
