"use client";

import React, { useState, useRef } from "react";
import { Send } from "lucide-react";
import { ContactField } from "./ContactField";
import { ContactSelect } from "./ContactSelect";
import { ContactDemoToast } from "./ContactDemoToast";
import { ContactSuccessState } from "./ContactSuccessState";
import { solutionOptions, requestTypeOptions } from "./contact.data";
import { ContactFormData, ContactFormErrors, ContactFormStatus, ContactSubmissionResult } from "./contact.types";

const initialFormData: ContactFormData = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  solution: "",
  requestType: "",
  message: "",
  privacyAccepted: false,
  website: "",
};

// Simulated API call
async function submitContactForm(data: ContactFormData): Promise<ContactSubmissionResult> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true };
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [showToast, setShowToast] = useState(false);
  
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (): boolean => {
    const newErrors: ContactFormErrors = {};
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Ad soyad alanı zorunludur.";
      isValid = false;
    }

    if (!formData.company.trim()) {
      newErrors.company = "Kurum veya şirket bilgisi zorunludur.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Geçerli bir e-posta adresi girin.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin.";
      isValid = false;
    }

    if (!formData.solution) {
      newErrors.solution = "Bir çözüm seçin.";
      isValid = false;
    }

    if (!formData.requestType) {
      newErrors.requestType = "Talep türünü seçin.";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mesaj alanı zorunludur.";
      isValid = false;
    }

    if (!formData.privacyAccepted) {
      newErrors.privacyAccepted = "Devam etmek için aydınlatma onayını işaretleyin.";
      isValid = false;
    }

    setErrors(newErrors);
    
    if (!isValid) {
      // Focus first error field (simplified approach)
      const firstErrorField = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorField);
      if (element) element.focus();
    }

    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const val = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({ ...prev, [name]: val }));
    
    // Clear error on change
    if (errors[name as keyof ContactFormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.website) {
      return; // Silent fail
    }

    if (!validate()) {
      return;
    }

    setStatus("submitting");

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus("success");
      }
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setStatus("idle");
  };

  if (status === "success") {
    return (
      <ContactSuccessState 
        solution={formData.solution} 
        requestType={formData.requestType}
        onReset={handleReset} 
      />
    );
  }

  return (
    <div className="relative">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-0.5 w-6 bg-[#A67C45]" />
          <h3 className="text-2xl font-semibold text-[#171B21]">Projenizi konuşalım</h3>
        </div>
        <p className="text-[#171B21]/70">Formu doldurun, ilgili çözüm ekibimiz sizinle iletişime geçsin.</p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Honeypot */}
        <div className="sr-only" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ContactField
            id="fullName"
            name="fullName"
            label="Ad Soyad"
            placeholder="Adınız ve soyadınız"
            autoComplete="name"
            required
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
          />
          <ContactField
            id="company"
            name="company"
            label="Kurum / Şirket"
            placeholder="Kurum veya şirket adı"
            autoComplete="organization"
            required
            value={formData.company}
            onChange={handleChange}
            error={errors.company}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ContactField
            id="email"
            name="email"
            type="email"
            label="Kurumsal E-posta"
            placeholder="ornek@kurum.com"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <ContactField
            id="phone"
            name="phone"
            type="tel"
            label="Telefon"
            placeholder="Telefon numaranız"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ContactSelect
            id="solution"
            name="solution"
            label="İlgilendiğiniz Çözüm"
            placeholder="Bir çözüm seçin"
            required
            options={solutionOptions}
            value={formData.solution}
            onChange={handleChange}
            error={errors.solution}
          />
          <ContactSelect
            id="requestType"
            name="requestType"
            label="Talep Türü"
            placeholder="Talep türünü seçin"
            required
            options={requestTypeOptions}
            value={formData.requestType}
            onChange={handleChange}
            error={errors.requestType}
          />
        </div>

        <ContactField
          id="message"
          name="message"
          as="textarea"
          label="Mesaj"
          placeholder="İhtiyacınızı, mevcut süreçlerinizi veya görüşmek istediğiniz konuyu kısaca anlatın."
          required
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
        />

        <div className="flex flex-col gap-1.5 mt-2">
          <div className="flex items-start gap-3">
            <div className="flex items-center h-5 mt-0.5">
              <input
                id="privacyAccepted"
                name="privacyAccepted"
                type="checkbox"
                checked={formData.privacyAccepted}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-[#172231] focus:ring-[#172231] transition-colors"
              />
            </div>
            <label htmlFor="privacyAccepted" className="text-sm text-[#171B21]/80 leading-tight select-none cursor-pointer">
              İletişim talebimin yanıtlanması amacıyla bilgilerimin işlenmesine ilişkin{" "}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 3000);
                }}
                className="font-semibold text-[#172231] underline decoration-[#172231]/30 underline-offset-2 hover:decoration-[#172231]"
              >
                aydınlatma metnini
              </button>{" "}
              okudum.
            </label>
          </div>
          {errors.privacyAccepted && (
            <span id="privacyAccepted-error" className="text-sm text-red-500 mt-1 animate-in fade-in slide-in-from-top-1 ml-7">
              {errors.privacyAccepted}
            </span>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            aria-busy={status === "submitting"}
            className="group relative flex h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-[#172231] px-8 font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#172231] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-70"
          >
            {status === "submitting" ? (
              <>
                <svg className="h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Talebiniz hazırlanıyor…
              </>
            ) : (
              <>
                Talebimi Gönder
                <Send className="h-4 w-4 text-[#A67C45] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </>
            )}
          </button>
          
          <p className="text-center text-xs text-gray-500">
            Bilgileriniz yalnızca iletişim talebinizin değerlendirilmesi amacıyla kullanılacaktır.
          </p>
        </div>
      </form>

      <ContactDemoToast 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
        message="Aydınlatma metni son içerik aşamasında eklenecektir." 
      />
    </div>
  );
}
