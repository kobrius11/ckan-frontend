"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem as UIBreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface BreadcrumbItem {
  href: string
  text: string
}

export function DynamicBreadcrumbs() {
  const pathname = usePathname()

  function generateBreadcrumbs(): BreadcrumbItem[] {
    // Break down the path between "/"s, removing empty entities
    // Ex: "/my/nested/path" --> ["my", "nested", "path"]
    const pathSegments = pathname.split("/").filter((segment) => segment.length > 0)

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    const crumblist = pathSegments.map((segment, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + pathSegments.slice(0, idx + 1).join("/")

      // Format the title: replace hyphens with spaces and capitalize
      const text = segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

      return { href, text }
    })

    // Add in a default "Home" crumb for the top-level
    return [{ href: "/", text: "Home" }, ...crumblist]
  }

  const breadcrumbs = generateBreadcrumbs()

  // Don't render breadcrumbs if we're on the home page
  if (pathname === "/") {
    return null
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1

          return (
            <div key={crumb.href} className="flex items-center">
              <UIBreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{crumb.text}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={crumb.href}>{crumb.text}</Link>
                  </BreadcrumbLink>
                )}
              </UIBreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
