import React from 'react';
import { Link } from 'react-router-dom';


// import { Container } from './styles';

export default function SideMenu() {
  return (
    <div className="menu">
        Menu
        <Link to="/">
          <button type="button">
            Logout
          </button>
       </Link>
      </div>
  );
}
