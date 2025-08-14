"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";
import { useTheme } from "next-themes";

export function ScheduleCallFloat() {
  const { theme } = useTheme();
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "joao-victor-tessarolo-z8jhc2" });

      // Força a reinicialização do UI quando o tema mudar
      cal("ui", {
        theme: theme === "dark" ? "dark" : "light",
        cssVarsPerTheme: {
          dark: { "--brand-color": "#000000" },
          light: { "--brand-color": "#ffffff" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // Adiciona listener para mudanças de tema
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleThemeChange = (e: MediaQueryListEvent) => {
        const newTheme = e.matches ? "dark" : "light";
        cal("ui", {
          theme: newTheme,
          cssVarsPerTheme: {
            dark: { "--brand-color": "#000000" },
            light: { "--brand-color": "#ffffff" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      };

      mediaQuery.addEventListener('change', handleThemeChange);

      return () => {
        mediaQuery.removeEventListener('change', handleThemeChange);
      };
    })();
  }, [theme]);
  return (
    <Button
      // variant={"outline"}
      data-cal-namespace="joao-victor-tessarolo-z8jhc2"
      data-cal-link="joao-victor-tessarolo-z8jhc2"
      data-cal-config='{"layout":"month_view"}'
      className="group/cal fixed z-50 md:bottom-5 bottom-20 right-5 w-12 h-12 rounded-full hover:px-4 hover:w-auto p-2 duration-300 transition-all ease-out dark:border-white/[0.2] dark:bg-transparent bg-background backdrop-blur-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
    >
      <div className="flex items-center gap-2">
        <p className="group-hover/cal:block hidden duration-300 transition-all ease-out">
          Schedule Meeting
        </p>
        <CalendarDays strokeWidth={1} />
      </div>
    </Button>
  );
}
