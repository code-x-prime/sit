import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "glow"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    if (variant === "ghost" || variant === "link") {
      return (
        <button
          ref={ref}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",
            className
          )}
          {...props}
        >
          {children}
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          "bg-navy/85 hover:bg-navy no-underline group cursor-pointer relative shadow-[0_4px_20px_-4px_rgba(0,51,102,0.4)] rounded-full p-px text-xs font-semibold leading-6 text-white inline-flex items-center justify-center transition-all duration-300",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(245,184,0,0.4)_0%,rgba(245,184,0,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </span>
        <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-navy-dark py-1.5 px-6 ring-1 ring-white/10 w-full h-full">
          <span>{children}</span>
          <svg
            fill="none"
            height="14"
            viewBox="0 0 24 24"
            width="14"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:translate-x-0.5 text-amber"
          >
            <path
              d="M10.75 8.75L14.25 12L10.75 15.25"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
            />
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-amber/0 via-amber/90 to-amber/0 transition-opacity duration-500 group-hover:opacity-100" />
      </button>
    )
  }
)
Button.displayName = "Button"

export interface LinkButtonProps extends React.ComponentProps<typeof Link> {
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "glow"
}

function LinkButton({
  className,
  variant = "default",
  children,
  ...props
}: LinkButtonProps) {
  if (variant === "ghost" || variant === "link") {
    return (
      <Link
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      className={cn(
        "bg-navy/85 hover:bg-navy no-underline group cursor-pointer relative shadow-[0_4px_20px_-4px_rgba(0,51,102,0.4)] rounded-full p-px text-xs font-semibold leading-6 text-white inline-flex items-center justify-center transition-all duration-300",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(245,184,0,0.4)_0%,rgba(245,184,0,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center justify-center z-10 rounded-full bg-navy-dark py-1.5 px-6 ring-1 ring-white/10 w-full h-full">
        <span>{children}</span>
        <svg
          fill="none"
          height="14"
          viewBox="0 0 24 24"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:translate-x-0.5 text-amber"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-amber/0 via-amber/90 to-amber/0 transition-opacity duration-500 group-hover:opacity-100" />
    </Link>
  )
}

export { Button, LinkButton }
