import { useEffect, useState } from "react";
import { isPrerendering } from "@/lib/prerender";

export type TimeTheme = "light" | "dark";

// Daytime in the visitor's local time gets the light theme, evenings get dark.
const DAY_START_HOUR = 7;
const NIGHT_START_HOUR = 19;

function themeForNow(): TimeTheme {
  if (isPrerendering) return "light";
  const hour = new Date().getHours();
  return hour >= DAY_START_HOUR && hour < NIGHT_START_HOUR ? "light" : "dark";
}

export function useTimeOfDayTheme(): TimeTheme {
  const [theme, setTheme] = useState<TimeTheme>(themeForNow);

  useEffect(() => {
    const id = window.setInterval(() => setTheme(themeForNow()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  return theme;
}
