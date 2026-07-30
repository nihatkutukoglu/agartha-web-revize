"use client";

import React, { useId } from "react";

interface ContactFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  as?: "input" | "textarea";
}

export function ContactField({
  label,
  error,
  as: Component = "input",
  className = "",
  id: providedId,
  ...props
}: ContactFieldProps) {
  const generatedId = useId();
  const id = providedId || generatedId;
  const errorId = `${id}-error`;
  const isInvalid = !!error;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label htmlFor={id} className="text-sm font-medium text-[#171B21]">
        {label}
        {props.required && <span className="text-red-500 ml-1" aria-hidden="true">*</span>}
      </label>
      
      {Component === "textarea" ? (
        <textarea
          id={id}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? errorId : undefined}
          className={`
            min-h-[140px] resize-y rounded-xl border bg-white px-4 py-3 text-base text-[#171B21] 
            placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#172231] focus:border-transparent
            transition-all duration-200
            ${isInvalid ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-gray-300'}
          `}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? errorId : undefined}
          className={`
            h-[54px] rounded-xl border bg-white px-4 text-base text-[#171B21] 
            placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#172231] focus:border-transparent
            transition-all duration-200
            ${isInvalid ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-gray-300'}
          `}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      
      {error && (
        <span id={errorId} className="text-sm text-red-500 mt-1 animate-in fade-in slide-in-from-top-1">
          {error}
        </span>
      )}
    </div>
  );
}
