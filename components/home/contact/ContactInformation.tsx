"use client";

import { MapPin, Mail, Phone, MessageSquare, Check, Clock } from "lucide-react";
import { contactInfo, trustBadges } from "./contact.data";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Clock,
};

export function ContactInformation() {
  return (
    <div className="flex flex-col h-full text-[#F7F6F2]">
      <div className="mb-10 lg:mb-16">
        <span className="mb-4 inline-block text-xs font-bold tracking-widest text-[#A67C45]">
          İLETİŞİM
        </span>
        <h2 className="mb-4 text-3xl md:text-4xl font-semibold leading-tight text-white">
          Kurumunuzun dijital dönüşümünü birlikte planlayalım.
        </h2>
        <p className="text-[#F7F6F2]/70 text-base md:text-lg max-w-md">
          İhtiyaçlarınızı, operasyonel süreçlerinizi ve hedeflerinizi dinleyelim; kurumunuza uygun çözüm mimarisini birlikte oluşturalım.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
        {contactInfo.map((info, idx) => {
          const Icon = iconMap[info.icon];
          return (
            <motion.div 
              key={info.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="flex items-start gap-4"
            >
              <div className="mt-1 flex shrink-0 items-center justify-center rounded-lg bg-[#202D3C] p-2.5 text-[#A67C45] border border-white/5">
                {Icon && <Icon className="h-5 w-5" />}
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-white">{info.title}</h3>
                <p className="text-sm text-[#F7F6F2]/70 leading-relaxed">{info.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-auto pt-8 border-t border-white/10">
        <ul className="flex flex-col gap-4">
          {trustBadges.map((badge, idx) => (
            <motion.li 
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (idx * 0.1), duration: 0.4 }}
              className="flex items-center gap-3 text-sm text-[#F7F6F2]/80"
            >
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A67C45]/20 text-[#A67C45]">
                <Check className="h-3 w-3" />
              </div>
              {badge}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-white/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 h-px w-32 bg-gradient-to-r from-[#A67C45]/0 via-[#A67C45]/30 to-[#A67C45]/0 pointer-events-none" />
    </div>
  );
}
