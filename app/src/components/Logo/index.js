import React from 'react';

import './index.css'
import logo from '../../assets/logo_dark.png';



export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
  );
}
