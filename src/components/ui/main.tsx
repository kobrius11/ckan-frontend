import * as React from "react"

import { cn } from "@/lib/utils"

function Main({ className, ...props }: React.ComponentProps<"main">) {
  return (
    <main
      data-slot="main"
      className={cn(
        "px-6",
        className
      )}
      {...props}
    />
  )
}

export { Main }
