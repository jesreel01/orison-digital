"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TextareaProps extends React.ComponentProps<"textarea"> {
  placeholder?: string;
}

function Textarea({ className, placeholder, ...props }: TextareaProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <div className="relative border-b-2 border-gray-300 focus-within:border-gray-900 transition-colors duration-200">
        <div className="relative overflow-hidden" style={{ margin: '16px 0 24px 0' }}>
          <textarea
            ref={textareaRef}
            data-slot="textarea"
            className={cn(
              // Base styles - remove all padding and margins
              "w-full bg-transparent border-0 text-xl text-gray-900 outline-none resize-vertical",
              // Remove all padding to prevent text overflow
              "p-0 m-0",
              // Set minimum height without padding
              "min-h-[1.5em]",
              // Ensure text stays within bounds
              "leading-normal block",
              // Disabled styles
              "disabled:opacity-50 disabled:cursor-not-allowed",
              className
            )}
            style={{
              // Force text to stay within content box
              boxSizing: 'content-box',
              lineHeight: '1.5',
              padding: '0',
              margin: '0'
            }}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            {...props}
          />
        </div>
      </div>
      {placeholder && (
        <label
          className={cn(
            "absolute left-0 pointer-events-none transition-all duration-200 ease-in-out",
            shouldFloatLabel
              ? "-top-2 text-sm text-gray-600 transform -translate-y-full"
              : "top-4 text-xl text-gray-500"
          )}
        >
          {placeholder}
        </label>
      )}
    </div>
  )
}

export { Textarea }
