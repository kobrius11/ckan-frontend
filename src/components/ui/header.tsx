import * as React from "react";
import { cn } from "@/lib/utils";

function Header({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="header"
      className={cn(
        "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
      {...props}
    />
  );
}

function HeaderContainer({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-container"
      className={cn("@container/header-container ", className)}
      {...props}
    />
  );
}

function HeaderContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-container"
      className={cn("px-6", className)}
      {...props}
    />
  );
}

function HeaderItem({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="header-item"
      className={cn("", className)}
      {...props}
    />
  );
}

export { Header, HeaderContainer, HeaderContent, HeaderItem };
