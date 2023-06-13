import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from 'react';

const DarkModeContext = createContext<{
  dark: boolean;
  // eslint-disable-next-line no-unused-vars
  setDarkMode: (dark: boolean) => void;
}>({
  dark: true,
  setDarkMode: () => {
    return;
  },
});
export const useDarkMode = () => useContext(DarkModeContext);

export default function DarkMode({ children }: React.PropsWithChildren) {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('darkMode') === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.querySelector('html')?.classList.toggle('dark', isDark);
  }, [isDark]);

  function setDarkMode(dark: boolean) {
    setIsDark(dark);
  }

  const darkOpts = useMemo(
    () => ({
      dark: isDark,
      setDarkMode,
    }),
    [isDark]
  );

  return (
    <DarkModeContext.Provider value={darkOpts}>
      {children}
    </DarkModeContext.Provider>
  );
}
