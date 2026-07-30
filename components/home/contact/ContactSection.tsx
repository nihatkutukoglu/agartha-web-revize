"use client";

import React from "react";
import { ContactInformation } from "./ContactInformation";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="iletisim" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative overflow-hidden rounded-[26px] md:rounded-[36px] bg-[#172231] shadow-2xl">
          {/* Subtle architectural background details */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#A67C45]/10 via-transparent to-transparent opacity-50" />
            <svg className="absolute w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative flex flex-col lg:flex-row min-h-[600px]">
            {/* Left Column: Contact Information */}
            <div className="w-full lg:w-[42%] p-8 sm:p-10 lg:p-12 xl:p-16 relative z-10">
              <ContactInformation />
            </div>

            {/* Right Column: Form Panel */}
            <div className="w-full lg:w-[58%] p-4 sm:p-6 lg:p-3 relative z-20">
              <div className="h-full w-full rounded-[22px] md:rounded-[30px] bg-[#F7F6F2] p-6 sm:p-8 md:p-10 xl:p-12 shadow-xl border border-white/40">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
