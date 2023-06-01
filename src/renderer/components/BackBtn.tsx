import React from 'react';
import { Link } from 'react-router-dom';

export default function BackBtn() {
  return (
    <Link to="/">
      <i className="fas fa-arrow-left" /> Acceuil
    </Link>
  );
}
