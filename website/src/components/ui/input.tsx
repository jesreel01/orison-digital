"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  placeholder?: string;
}

function Input({ className, type, placeholder, ...props }: InputProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(e);
    }
  };


  const shouldFloatLabel =
    isFocused ||
    (typeof props.value === "string" && props.value.length > 0) ||
    (Array.isArray(props.value) && props.value.length > 0);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type={type}
        data-slot="input"
        className={cn(
          // Base styles for underline design
          "w-full bg-transparent border-0 border-b-2 border-gray-300 pt-2 pb-4 text-xl text-gray-900 outline-none transition-colors duration-200",
          // Focus styles
          "focus:border-gray-900",
          // Disabled styles
          "disabled:opacity-50 disabled:cursor-not-allowed",
          // File input styles
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          className
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        {...props}
      />
      {placeholder && (
        <label
          className={cn(
            "absolute left-0 pointer-events-none transition-all duration-200 ease-in-out",
            shouldFloatLabel
              ? "top-0 text-sm text-gray-600 transform -translate-y-full"
              : "top-4 text-xl text-gray-500"
          )}
        >
          {placeholder}
        </label>
      )}
    </div>
  )
}

export { Input }
