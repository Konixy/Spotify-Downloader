import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from 'react';

const DarkModeContext = createContext<{
  dark: boolean;
  auto: boolean;
  // eslint-disable-next-line no-unused-vars
  setMode: (mode: string) => void;
}>({
  dark: true,
  auto: true,
  setMode: () => {
    return;
  },
});
export const useDarkMode = () => useContext(DarkModeContext);

export default function DarkMode({ children }: React.PropsWithChildren) {
  const [isAuto, setIsAuto] = useState(
    window.localStorage.getItem('darkMode') === 'auto'
  );
  const [isDark, setIsDark] = useState(
    isAuto
      ? window.matchMedia('(prefers-color-scheme: dark)').matches
      : localStorage.getItem('darkMode') === 'dark'
  );

  function onThemeChange(e: MediaQueryListEvent) {
    console.log('theme change event', isAuto);
    if (isAuto === true) setIsDark(e.matches);
  }

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onThemeChange);
    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', onThemeChange);
    };
  }, []);

  useEffect(() => {
    document.querySelector('html')?.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    if (!isAuto) {
      window.localStorage.setItem('darkMode', isDark ? 'dark' : 'light');
    } else {
      setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
      window.localStorage.setItem('darkMode', 'auto');
    }
  }, [
    isAuto,
    isDark,
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  ]);

  function setMode(mode: string) {
    if (mode === 'auto') setIsAuto(true);
    else if (mode === 'dark') {
      setIsAuto(false);
      setIsDark(true);
    } else if (mode === 'light') {
      setIsAuto(false);
      setIsDark(false);
    }
  }

  const darkOpts = useMemo(
    () => ({
      dark: isDark,
      auto: isAuto,
      setMode,
    }),
    [isAuto, isDark]
  );

  return (
    <DarkModeContext.Provider value={darkOpts}>
      {children}
    </DarkModeContext.Provider>
  );
}
