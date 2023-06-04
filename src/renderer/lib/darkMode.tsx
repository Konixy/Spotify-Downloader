import { useEffect } from 'react';

// export function initDarkMode() {
//   if (
//     localStorage.theme === 'dark' ||
//     (!('theme' in localStorage) &&
//       window.matchMedia('(prefers-color-scheme: dark)').matches)
//   ) {
//     document.documentElement.classList.add('dark');
//   } else {
//     document.documentElement.classList.remove('dark');
//   }
// }

// export function setDarkMode(state: boolean) {}

export default function DarkMode() {
  const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, [systemDarkMode]);
  return <div>{systemDarkMode.matches && 'dark'}</div>;
}
