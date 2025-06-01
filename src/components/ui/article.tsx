import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const articleVariants = cva("", {
  variants: {
    variant: {
      default: "",
      container: "w-full mx-auto px-4 sm:px-6 md:px-8 max-w-[90rem]",
      grid: "grid gap-4",
      flexRow: "flex flex-row",
      flexCol: "flex flex-col",
      flexCenter: "flex justify-center items-center",
      flexBetween: "flex justify-between items-center",
      flexStart: "flex justify-start items-center",
      flexEnd: "flex justify-end items-center",
    },
    width: {
      default: "",
      full: "w-full",
      auto: "w-auto",
      screen: "w-screen",
      half: "w-full sm:w-1/2",
      third: "w-full sm:w-1/2 md:w-1/3",
      twoThirds: "w-full sm:w-full md:w-2/3",
      quarter: "w-full sm:w-1/2 md:w-1/4",
      threeQuarters: "w-full sm:w-full md:w-3/4",
      fit: "w-fit",
      max: "w-max",
      min: "w-min",
      xs: "w-full xs:w-xs",
      sm: "w-full sm:w-sm",
      md: "w-full md:w-md",
      lg: "w-full lg:w-lg",
      xl: "w-full xl:w-xl",
      "2xl": "w-full 2xl:w-2xl",
    },
    height: {
      default: "",
      full: "h-full",
      auto: "h-auto",
      screen: "h-screen",
      half: "h-1/2",
      third: "h-1/3",
      twoThirds: "h-2/3",
      quarter: "h-1/4",
      threeQuarters: "h-3/4",
      fit: "h-fit",
      max: "h-max",
      min: "h-min",
      mobileScreen: "h-[100dvh]", // Uses dynamic viewport height for mobile
    },
    padding: {
      none: "p-0",
      xs: "p-1",
      sm: "p-2",
      md: "p-3 md:p-4",
      lg: "p-4 md:p-6",
      xl: "p-6 md:p-8",
      "2xl": "p-8 md:p-10",
      y: "py-3 md:py-4",
      x: "px-3 md:px-4",
      "y-lg": "py-4 md:py-6",
      "x-lg": "px-4 md:px-6",
      safe: "px-4 py-3 md:p-4 safe-area-inset", // Respects safe areas on mobile
      touch: "p-4", // Good size for touch targets
    },
    margin: {
      none: "m-0",
      xs: "m-1",
      sm: "m-2",
      md: "m-3 md:m-4",
      lg: "m-4 md:m-6",
      xl: "m-6 md:m-8",
      "2xl": "m-8 md:m-10",
      y: "my-3 md:my-4",
      x: "mx-3 md:mx-4",
      "y-lg": "my-4 md:my-6",
      "x-lg": "mx-4 md:mx-6",
      auto: "mx-auto",
      "bottom-safe": "mb-4 md:mb-4 safe-area-bottom", // Respects bottom safe area
    },
  },
  defaultVariants: {
    variant: "default",
    width: "default",
    height: "default",
    padding: "none",
    margin: "none",
  },
});
function Article({
  className,
  variant,
  width,
  height,
  padding,
  margin,
  ...props
}: React.ComponentProps<"article"> & VariantProps<typeof articleVariants>) {
  return (
    <article
      data-slot="article"
      className={cn(
        articleVariants({ variant, width, height, padding, margin, className })
      )}
      {...props}
    />
  );
}

function ArticleHeader({
  className,
  ...props
}: React.ComponentProps<"article"> & VariantProps<typeof articleVariants>) {
  return (
    <article
      data-slot="article"
      className={cn(
        articleVariants({ className })
      )}
      {...props}
    />
  );
}

export { Article };
