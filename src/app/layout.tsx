import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/config/site.config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { TopNavbar } from "@/components/top-navbar";
import BottomNavbar from "@/components/bottom-navbar";
import { ScheduleCallFloat } from "@/components/cal";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner";
import SunlightBackground from "@/components/custom/sunlight-bg";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s - ${DATA.name}`,
  },
  icons: {
    icon: "/favicon.svg",
  },
  description: DATA.description,
  keywords: [
    "João Tessarolo",
    "João Tessarolo Portfolio",
    "João Tessarolo Projects",
    "João Tessarolo Blogs",
    "João Tessarolo Resume",
    "João Tessarolo Contact",
    "João Tessarolo Instagram",
    "João Tessarolo Youtube",
    "João Tessarolo Email",
    "João Tessarolo LinkedIn",
    "João Tessarolo GitHub",
    "João Tessarolo Twitter",
    "joaotessarolo",
  ],
  authors: [
    {
      name: `${DATA.name}`,
      url: DATA.url,
    },
  ],
  creator: `${DATA.name}`,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    // images: [
    //   {
    //     url: DATA.prevImage,
    //   },
    // ],
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto flex flex-col justify-center py-6 sm:py-12 px-6",
          fontSans.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
          <SunlightBackground>
            <TooltipProvider delayDuration={0}>
              <div className="hidden md:block">
                <TopNavbar />
              </div>
              {children}
              <div className="block md:hidden">
                <BottomNavbar />
              </div>
              <ScheduleCallFloat />
              <Analytics />
              <Toaster />
            </TooltipProvider>
          </SunlightBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
