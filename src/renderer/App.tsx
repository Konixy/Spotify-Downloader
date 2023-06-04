import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import Spotify from './Spotify';
import YouTube from './YouTube';
import DarkMode from './lib/darkMode';

function Hello() {
  return (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col text-center">
      <DarkMode />
      <div className="mb-10 text-5xl">
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text font-extrabold text-transparent">
          Bienvenue
        </span>
        ,
      </div>
      <div className="text-xl">Choisis une plateform :</div>
      <div className="flex justify-between">
        <Link to="/spotify" className="btn bg-[#1DB954] text-white">
          <i className="fab fa-spotify mr-1" /> Spotify
        </Link>
        <Link to="/youtube" className="btn bg-[#FF0000] text-white">
          <i className="fab fa-youtube mr-1" /> YouTube
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/youtube" element={<YouTube />} />
      </Routes>
    </Router>
  );
}
