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
  });
  return <div>toggle darkmode</div>;
}
