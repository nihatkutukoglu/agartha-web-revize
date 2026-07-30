"use client";

import React, { useId } from "react";

interface Option {
  value: string;
  label: string;
}

interface ContactSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: readonly Option[];
  error?: string;
  placeholder?: string;
}

export function ContactSelect({
  label,
  options,
  error,
  placeholder,
  className = "",
  id: providedId,
  ...props
}: ContactSelectProps) {
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
      
      <div className="relative">
        <select
          id={id}
          aria-invalid={isInvalid}
          aria-describedby={isInvalid ? errorId : undefined}
          className={`
            h-[54px] w-full appearance-none rounded-xl border bg-white px-4 text-base text-[#171B21] 
            focus:outline-none focus:ring-2 focus:ring-[#172231] focus:border-transparent
            transition-all duration-200
            ${isInvalid ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-gray-300'}
            ${!props.value ? 'text-gray-400' : ''}
          `}
          {...props}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value} className="text-[#171B21]">
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
      
      {error && (
        <span id={errorId} className="text-sm text-red-500 mt-1 animate-in fade-in slide-in-from-top-1">
          {error}
        </span>
      )}
    </div>
  );
}
