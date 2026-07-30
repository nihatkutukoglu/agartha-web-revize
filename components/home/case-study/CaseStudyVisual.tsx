"use client";

import { motion } from "framer-motion";
import { 
  FileText, Users, ClipboardList, AlertCircle, 
  BarChart3, PieChart, ShieldCheck, CheckCircle2, Plane
} from "lucide-react";

interface CaseStudyVisualProps {
  problems?: string[];
  results?: string[];
}

export function CaseStudyVisual({ problems = [], results = [] }: CaseStudyVisualProps) {
  return (
    <div className="case-study-visual flex items-center justify-center">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(166, 124, 69, 0.05), transparent 70%)' }} />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'2\' cy=\'2\' r=\'1\' fill=\'%23000\'/%3E%3C/svg%3E")' }} />

      {/* FLYING AIRPLANES */}
      <motion.div
        className="absolute z-20 text-[#b69562]"
        initial={{ left: "-10%", top: "70%" }}
        animate={{ left: "110%", top: "30%" }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
      >
        <Plane size={16} className="rotate-45 opacity-30" strokeWidth={1.5} />
      </motion.div>
      <motion.div
        className="absolute z-20 text-[#b69562]"
        initial={{ left: "-10%", top: "30%" }}
        animate={{ left: "110%", top: "10%" }}
        transition={{ repeat: Infinity, duration: 30, delay: 5, ease: "linear" }}
      >
        <Plane size={14} className="rotate-[30deg] opacity-20" strokeWidth={1.5} />
      </motion.div>
      <motion.div
        className="absolute z-20 text-[#b69562]"
        initial={{ left: "110%", top: "60%" }}
        animate={{ left: "-10%", top: "80%" }}
        transition={{ repeat: Infinity, duration: 26, delay: 2, ease: "linear" }}
      >
        <Plane size={18} className="-scale-x-100 -rotate-[30deg] opacity-25" strokeWidth={1.5} />
      </motion.div>

      <div className="relative w-full max-w-[1200px] h-full flex items-center justify-between px-8 md:px-16 z-10">
        
        {/* LEFT: Scattered Manual Processes & Problems */}
        <div className="relative hidden md:flex w-1/3 h-[400px] items-center justify-center">
          <Node icon={FileText} delay={0} top="15%" left="15%" />
          <Node icon={Users} delay={0.5} top="10%" left="75%" />
          <Node icon={ClipboardList} delay={1} top="70%" left="10%" />
          <Node icon={AlertCircle} delay={1.5} top="80%" left="65%" iconColor="text-red-500" />
          
          {/* Text Labels for Problems */}
          {problems[0] && <TextNode text={problems[0]} delay={0.2} top="35%" left="5%" />}
          {problems[1] && <TextNode text={problems[1]} delay={0.7} top="25%" left="55%" />}
          {problems[2] && <TextNode text={problems[2]} delay={1.2} top="60%" left="30%" />}
          
          {/* Background messy lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
             <path d="M 20 50 Q 80 80 150 150" stroke="#151b23" fill="none" strokeWidth="1" strokeDasharray="4 4" />
             <path d="M 250 50 Q 200 150 150 150" stroke="#151b23" fill="none" strokeWidth="1" strokeDasharray="4 4" />
             <path d="M 50 200 Q 100 180 150 150" stroke="#151b23" fill="none" strokeWidth="1" strokeDasharray="4 4" />
             <path d="M 220 220 Q 180 180 150 150" stroke="#151b23" fill="none" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
          
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#b69562] opacity-[0.04] rounded-full blur-3xl" />
        </div>

        {/* CENTER: Data Flow Hub (Hidden on small screens) */}
        <div className="relative hidden lg:flex w-1/3 h-[400px] items-center justify-center">
          {/* Animated SVG Lines connecting left to right */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
             <motion.path 
               d="M -20 200 C 100 200, 100 100, 220 100" 
               stroke="#b69562" fill="none" strokeWidth="1.5" 
               strokeDasharray="4 8"
               animate={{ strokeDashoffset: [0, -24] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
             />
             <motion.path 
               d="M -20 200 C 100 200, 100 200, 220 200" 
               stroke="#b69562" fill="none" strokeWidth="1.5" 
               strokeDasharray="4 8"
               animate={{ strokeDashoffset: [0, -24] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
             />
             <motion.path 
               d="M -20 200 C 100 200, 100 300, 220 300" 
               stroke="#b69562" fill="none" strokeWidth="1.5" 
               strokeDasharray="4 8"
               animate={{ strokeDashoffset: [0, -24] }}
               transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
             />
          </svg>

          {/* Central Processing Node */}
          <div className="relative z-10 w-28 h-28 rounded-full bg-[#f9f8f4] border border-[#e8dfd1] shadow-[0_15px_40px_rgba(182,149,98,0.15)] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-[#f0ede4]" />
            <motion.div 
               animate={{ rotate: 360 }} 
               transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
               className="absolute inset-1 rounded-full border border-dashed border-[#b69562] opacity-60"
            />
            <motion.div 
               animate={{ rotate: -360 }} 
               transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
               className="absolute inset-3.5 rounded-full border border-[#151b23] opacity-15"
            />
            <ShieldCheck className="relative z-10 text-[#151b23]" size={40} strokeWidth={1.5} />
          </div>
        </div>

        {/* RIGHT: Centralized Digital Dashboard */}
        <div className="relative w-full md:w-1/2 lg:w-1/3 flex items-center justify-center mt-0">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-[#151b23] opacity-[0.04] rounded-full blur-3xl" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-[340px] bg-white rounded-2xl shadow-[0_25px_60px_rgba(21,27,35,0.08)] overflow-hidden border border-[#e8dfd1] flex flex-col z-10"
          >
            {/* Window Header */}
            <div className="h-10 bg-[#151b23] flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              </div>
              <div className="ml-auto w-24 h-1.5 bg-white/10 rounded-full" />
            </div>
            
            {/* Dashboard Content */}
            <div className="p-5 flex flex-col gap-4 bg-white">
               
               {/* Stats Row */}
               <div className="flex gap-3">
                 <div className="flex-1 h-20 bg-[#f9f8f4] rounded-xl flex flex-col items-center justify-center gap-2 border border-[#f0ede4]">
                    <CheckCircle2 className="text-[#b69562]" size={22} />
                    <div className="w-10 h-1.5 bg-[#d8cbbb] rounded-full" />
                 </div>
                 <div className="flex-1 h-20 bg-[#f9f8f4] rounded-xl flex flex-col items-center justify-center gap-2 border border-[#f0ede4]">
                    <BarChart3 className="text-[#151b23] opacity-50" size={22} />
                    <div className="w-10 h-1.5 bg-gray-200 rounded-full" />
                 </div>
                 <div className="flex-1 h-20 bg-[#f9f8f4] rounded-xl flex flex-col items-center justify-center gap-2 border border-[#f0ede4]">
                    <PieChart className="text-[#151b23] opacity-50" size={22} />
                    <div className="w-10 h-1.5 bg-gray-200 rounded-full" />
                 </div>
               </div>
               
               {/* List Mockup with Results */}
               <div className="bg-[#f9f8f4] rounded-xl border border-[#f0ede4] p-4 flex flex-col gap-3">
                  {results.slice(0, 3).map((result, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded bg-white flex items-center justify-center shadow-sm shrink-0">
                        <CheckCircle2 className="text-[#b69562]" size={12} />
                      </div>
                      <div className="flex-1 text-xs font-medium text-[#151b23]/80 leading-tight">
                         {result}
                      </div>
                    </div>
                  ))}
               </div>
               
               {/* Chart Mockup */}
               <div className="h-32 bg-[#f9f8f4] rounded-xl border border-[#f0ede4] p-4 flex flex-col justify-end relative overflow-hidden">
                  <div className="absolute inset-x-4 top-4 flex justify-between">
                     <div className="w-20 h-2 bg-gray-200 rounded-full" />
                     <div className="w-10 h-2 bg-gray-200 rounded-full" />
                  </div>
                  <div className="flex items-end gap-2.5 h-16 w-full mt-4">
                    <motion.div animate={{ height: ["40%", "70%", "50%", "90%", "60%"] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="flex-1 bg-[#151b23] opacity-10 rounded-t-sm" />
                    <motion.div animate={{ height: ["60%", "40%", "80%", "50%", "70%"] }} transition={{ repeat: Infinity, duration: 4, delay: 0.5, ease: "easeInOut" }} className="flex-1 bg-[#b69562] opacity-80 rounded-t-sm" />
                    <motion.div animate={{ height: ["80%", "90%", "60%", "100%", "80%"] }} transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }} className="flex-1 bg-[#151b23] opacity-10 rounded-t-sm" />
                    <motion.div animate={{ height: ["30%", "60%", "40%", "70%", "50%"] }} transition={{ repeat: Infinity, duration: 4, delay: 1.5, ease: "easeInOut" }} className="flex-1 bg-[#b69562] opacity-80 rounded-t-sm" />
                    <motion.div animate={{ height: ["70%", "50%", "90%", "40%", "80%"] }} transition={{ repeat: Infinity, duration: 4, delay: 2, ease: "easeInOut" }} className="flex-1 bg-[#151b23] opacity-10 rounded-t-sm" />
                    <motion.div animate={{ height: ["50%", "80%", "60%", "100%", "90%"] }} transition={{ repeat: Infinity, duration: 4, delay: 2.5, ease: "easeInOut" }} className="flex-1 bg-[#b69562] opacity-80 rounded-t-sm" />
                  </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="case-study-visual__edge-wash" aria-hidden="true" />
    </div>
  );
}

function Node({ icon: Icon, delay, top, left, iconColor = "text-[#151b23]" }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { repeat: Infinity, duration: 4, delay, ease: "easeInOut" },
        x: { repeat: Infinity, duration: 5, delay, ease: "easeInOut" }
      }}
      className="absolute w-14 h-14 bg-white rounded-2xl shadow-[0_12px_30px_rgba(21,27,35,0.08)] border border-[#e8dfd1] flex items-center justify-center z-10"
      style={{ top, left }}
    >
      <Icon size={24} className={`${iconColor} opacity-70`} strokeWidth={1.5} />
    </motion.div>
  );
}

function TextNode({ text, delay, top, left }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ y: [0, -6, 0], x: [0, 6, 0] }}
      transition={{ 
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: { repeat: Infinity, duration: 4.5, delay, ease: "easeInOut" },
        x: { repeat: Infinity, duration: 5.5, delay, ease: "easeInOut" }
      }}
      className="absolute bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-[0_8px_20px_rgba(21,27,35,0.06)] border border-[#e8dfd1]/80 text-[13px] font-semibold text-[#151b23]/80 z-20 whitespace-nowrap"
      style={{ top, left }}
    >
      {text}
    </motion.div>
  );
}
