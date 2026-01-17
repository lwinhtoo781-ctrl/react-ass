import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SettingsContext = createContext(null);

const STORAGE_KEY = "app-settings";
const DEFAULTS = { theme: "light", language: "en" };

export function SettingsProvider({ children }) {
  const [theme, setThemeState] = useState(DEFAULTS.theme);
  const [language, setLanguageState] = useState(DEFAULTS.language);

  // Load from localStorage on app start
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed = JSON.parse(raw);
      if (parsed?.theme === "light" || parsed?.theme === "dark") {
        setThemeState(parsed.theme);
      }
      if (parsed?.language === "en" || parsed?.language === "th") {
        setLanguageState(parsed.language);
      }
    } catch {
      // ignore invalid localStorage data
    }
  }, []);

  // Save to localStorage whenever theme/language changes
  useEffect(() => {
    const data = { theme, language };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [theme, language]);

  // Apply theme to whole app (CSS hook)
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setTheme = (nextTheme) => {
    if (nextTheme === "light" || nextTheme === "dark") setThemeState(nextTheme);
  };

  const setLanguage = (nextLang) => {
    if (nextLang === "en" || nextLang === "th") setLanguageState(nextLang);
  };

  const resetSettings = () => {
    setThemeState(DEFAULTS.theme);
    setLanguageState(DEFAULTS.language);
  };

  const value = useMemo(
    () => ({
      theme,
      language,
      setTheme,
      setLanguage,
      resetSettings,
    }),
    [theme, language]
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside SettingsProvider");
  return ctx;
}
