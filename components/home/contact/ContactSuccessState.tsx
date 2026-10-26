"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { getSolutionOptions, getRequestTypeOptions } from "./contact.data";
import { useParams } from "next/navigation";
import { Lang } from "@/data/dictionary";

interface ContactSuccessStateProps {
  formData: {
    solution: string;
    requestType: string;
    email: string;
  };
  onReset: () => void;
}

export function ContactSuccessState({ formData, onReset }: ContactSuccessStateProps) {
  const params = useParams();
  const lang = (params?.lang as Lang) || "tr";
  const solutionOptions = getSolutionOptions(lang);
  const requestTypeOptions = getRequestTypeOptions(lang);

  const solutionLabel = solutionOptions.find((s: {value: string; label: string}) => s.value === formData.solution)?.label || formData.solution;
  const requestLabel = requestTypeOptions.find((r: {value: string; label: string}) => r.value === formData.requestType)?.label || formData.requestType;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-4 sm:px-6"
    >
      <div className="mb-6 rounded-full bg-[#172231]/5 p-4 text-[#172231]">
        <CheckCircle2 className="h-12 w-12" />
      </div>
      
      <h4 className="text-xl font-semibold text-[#171B21] mb-2">
        {lang === "en" ? "Request Received Successfully" : "Talebiniz Başarıyla Alındı"}
      </h4>
      <p className="text-[#171B21]/70 mb-8">
        {lang === "en" ? "Thank you for reaching out." : "İletişim talebiniz için teşekkür ederiz."}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full max-w-sm">
        <div className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-left">
          <small className="block text-xs font-medium text-[#171B21]/50 uppercase tracking-wider mb-1">
            {lang === "en" ? "Interested Solution" : "İlgilenilen Çözüm"}
          </small>
          <div className="font-medium text-[#171B21]">{solutionLabel}</div>
        </div>
        <div className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-left">
          <small className="block text-xs font-medium text-[#171B21]/50 uppercase tracking-wider mb-1">
            {lang === "en" ? "Request Type" : "Talep Türü"}
          </small>
          <div className="font-medium text-[#171B21]">{requestLabel}</div>
        </div>
      </div>

      <p className="mb-8 text-[#171B21]/70 max-w-sm text-sm">
        {lang === "en" ? "We will evaluate your request and contact you at" : "Talebinizi değerlendirecek ve en kısa sürede"} <strong className="text-[#171B21]">{formData.email}</strong> {lang === "en" ? "as soon as possible." : "adresi üzerinden sizinle iletişime geçeceğiz."}
      </p>

      <button
        type="button"
        onClick={onReset}
        className="w-full max-w-sm h-12 bg-[#172231] hover:bg-[#172231]/90 text-white rounded-xl font-medium transition-colors"
      >
        {lang === "en" ? "Send New Request" : "Yeni Talep Gönder"}
      </button>
    </motion.div>
  );
}
