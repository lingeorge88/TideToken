import * as React from "react"
import { useLocation } from "react-router-dom"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const location = useLocation();

  // Check if current page is landing, sign in, or sign up
  const isAuthPage = location.pathname === '/' ||
                     location.pathname === '/signin' ||
                     location.pathname === '/signup';

  // Use gray-900 for auth pages, white for all other pages
  const textColorClass = isAuthPage ? 'text-gray-900' : 'text-white';

  return (
    (<input
      type={type}
      className={cn(
        `flex h-9 w-full ${textColorClass} rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`,
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
