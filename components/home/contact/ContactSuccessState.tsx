"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { solutionOptions, requestTypeOptions } from "./contact.data";

interface ContactSuccessStateProps {
  solution: string;
  requestType: string;
  onReset: () => void;
}

export function ContactSuccessState({ solution, requestType, onReset }: ContactSuccessStateProps) {
  const solutionLabel = solutionOptions.find(s => s.value === solution)?.label || solution;
  const requestLabel = requestTypeOptions.find(r => r.value === requestType)?.label || requestType;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-4 sm:px-6"
    >
      <div className="mb-6 rounded-full bg-[#172231]/5 p-4 text-[#172231]">
        <CheckCircle2 className="h-12 w-12" />
      </div>
      
      <h3 className="mb-2 text-2xl font-semibold text-[#171B21]">
        Talebiniz demo olarak hazırlandı.
      </h3>
      
      <p className="mb-8 text-[#171B21]/70 max-w-md">
        Gerçek e-posta gönderim altyapısı son geliştirme aşamasında bağlanacaktır.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full max-w-sm">
        <div className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-left">
          <div className="text-xs font-medium text-gray-500 mb-1">Seçilen Çözüm</div>
          <div className="font-medium text-[#171B21]">{solutionLabel}</div>
        </div>
        <div className="flex-1 rounded-xl border border-gray-100 bg-gray-50/50 p-4 text-left">
          <div className="text-xs font-medium text-gray-500 mb-1">Talep Türü</div>
          <div className="font-medium text-[#171B21]">{requestLabel}</div>
        </div>
      </div>

      <button
        onClick={onReset}
        className="rounded-xl bg-[#172231] px-8 py-3.5 font-medium text-white transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#172231] focus:ring-offset-2"
      >
        Yeni Talep Oluştur
      </button>
    </motion.div>
  );
}
