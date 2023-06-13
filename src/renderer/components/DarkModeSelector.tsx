import React, { useState } from 'react';
import { useDarkMode } from './DarkMode';

export default function DarkModeSelector() {
  const darkMode = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function buttonClick(dark: boolean) {
    return () => {
      darkMode.setDarkMode(dark);
      setIsOpen(false);
    };
  }

  return (
    <div className="absolute right-0 top-0 mx-6 my-6">
      <button type="button" className="" onClick={handleClick}>
        <i className={`fas ${darkMode.dark ? 'fa-sun' : 'fa-moon'}`} />
      </button>
      <div className={`absolute text-center ${!isOpen && 'hidden'}`}>
        <button
          className={`${darkMode.dark && 'bg-gray-300'}`}
          type="button"
          onClick={buttonClick(true)}
        >
          Dark
        </button>
        <button
          className={`${!darkMode.dark && 'bg-gray-300'}`}
          type="button"
          onClick={buttonClick(false)}
        >
          Light
        </button>
      </div>
    </div>
  );
}
