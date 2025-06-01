import * as React from "react"

import { cn } from "@/lib/utils"

function Div({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="div"
      className={cn(
        "p-6",
        className
      )}
      {...props}
    />
  )
}

export { Div }
