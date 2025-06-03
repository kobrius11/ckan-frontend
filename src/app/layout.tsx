export const dynamic = "force-dynamic";

import "@/app/styles/globals.css";
import { geistMono, geistSans } from "@/app/fonts";
import { ThemeProvider } from "@/components/theme/theme-provider"
import SiteHeader from "@/components/header/site-header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <SiteHeader />
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
