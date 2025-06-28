import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Base styles for underline design
        "w-full bg-transparent border-0 border-b-2 border-gray-300 px-0 py-4 text-xl text-gray-900 placeholder-gray-500 outline-none transition-colors duration-200",
        // Focus styles
        "focus:border-gray-900 focus:placeholder-gray-400",
        // Disabled styles
        "disabled:opacity-50 disabled:cursor-not-allowed",
        // File input styles
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Input }
