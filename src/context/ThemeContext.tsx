import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeState>({} as ThemeState);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    if (window?.matchMedia) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
