import { TooltipProvider } from "@/components/ui/tooltip"
import type React from "react"

export function TooltipProviderWrapper(
    { children }:
        { children: React.ReactNode }) {
    return (
        <TooltipProvider>
            {children}
        </TooltipProvider>
    )
}

