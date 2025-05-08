"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
  attribute?: "class" | "data-theme";
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent mismatch

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
