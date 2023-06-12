import React, { useState } from 'react';
import BackBtn from './components/BackBtn';

export default function Spotify() {
  const [url, setUrl] = useState('');
  const [btnLabel, setBtnLabel] = useState('Télécharger');
  const [isBusy, setIsBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleDownload() {
    if (isBusy) return;
    setError(null);
    setIsBusy(true);
    setBtnLabel('Vérification...');
    window.electron.ipcRenderer.sendMessage('check-url', url);
    window.electron.ipcRenderer.on(
      'check-url',
      (arg: { url: string; valid: boolean; error?: string }) => {
        if (arg.url !== url) return;
        if (arg.valid) {
          // setBtnLabel('Récupération des informations...');
          setIsBusy(false);
          setError(null);
          setBtnLabel('Url valid!');
        } else {
          setIsBusy(false);
          setError(`Invalid url: ${arg.error}`);
          setBtnLabel('Télécharger');
        }
      }
    );
  }

  return (
    <div>
      <BackBtn />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col text-center">
        <div className="mb-16 flex flex-row text-center">
          <i className="fab fa-spotify mr-2 text-6xl text-[#1DB954]" />
          <span className="bg-gradient-to-r from-[#1DB954] to-purple-400 bg-clip-text text-6xl font-extrabold text-transparent">
            Spotify
          </span>
        </div>
        {error && <div className="text-red-700">{error}</div>}
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="https://open.spotify.com/example"
            value={url}
            disabled={isBusy}
            onChange={(e) => setUrl(e.target.value)}
            className="w-[75vh] rounded-xl border-2 border-gray-900 py-2 pl-4 pr-20 text-black outline-none dark:border-gray-100 dark:bg-black dark:text-white"
          />
          <input
            type="button"
            value="Coller"
            className="-ml-16 text-black dark:text-white"
            onClick={async () =>
              !isBusy && setUrl(await navigator.clipboard.readText())
            }
          />
        </div>
        <button
          type="submit"
          disabled={isBusy}
          className="btn mt-10 bg-gradient-to-r from-green-500 to-green-300 text-xl disabled:bg-gray-300"
          onClick={handleDownload}
        >
          {btnLabel}
        </button>
      </div>
    </div>
  );
}
