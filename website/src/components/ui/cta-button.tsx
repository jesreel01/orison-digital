import React from 'react'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

interface CtaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  variant?: 'default' | 'outline'
  className?: string
}

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ children = "Let's grow", variant = 'default', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'group relative overflow-hidden',
          'inline-flex items-center justify-center',
          'px-12 py-6 min-h-[56px]',
          'rounded-full font-medium text-base',
          'transition-all duration-300 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-2',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          
          // Variant styles
          variant === 'default' && [
            'bg-violet-600 text-white',
            'hover:bg-violet-800',
            'focus:ring-[#7C3AED]/50',
            'shadow-lg hover:shadow-xl',
          ],
          variant === 'outline' && [
            'border-2 border-[#7C3AED] text-[#7C3AED] bg-transparent',
            'hover:bg-[#7C3AED] hover:text-white',
            'focus:ring-[#7C3AED]/50',
          ],
          
          className
        )}
        {...props}
      >
        {/* Sizing span for dynamic width */}
        <span className="invisible opacity-0 pointer-events-none">
          {children}
        </span>

        {/* Arrow icon centered, fades out on hover */}
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <ArrowUpRight className="w-8 h-8 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:translate-y-[-120%]" />
        </span>

        {/* Animated text slides up and fades in on hover */}
        <span className="absolute left-0 right-0 flex items-center justify-center transition-all duration-500 ease-in-out translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-xl">
          {children}
        </span>
      </button>
    )
  }
)

CtaButton.displayName = 'CtaButton'

export default CtaButton