import React from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = ({onPlaySound, onStopSound}) => {
    return (
        <nav id="navbar">
        <Link
          id="logo-link"
          onMouseOver={() => onPlaySound('book-reader')}
          onMouseOut={() => onStopSound('book-reader')}
          to="/home"
        >
          <h1 className="logo">
            <span className="text-primary">
              <i className="fas fa-book-open"></i> Book</span
            >Reader
          </h1>
        </Link>
  
        <ul>
          <li>
            <Link
            to="/home"
            onMouseOver={() => onPlaySound('home')}
            onMouseOut={() => onStopSound('home')}
            >Home
            </Link>
          </li>
          <li>
            <Link to="books"
            onMouseOver={() => onPlaySound('books')}
            onMouseOut={() => onStopSound('books')}
            >Books
            </Link>
          </li>
          <li className="u-px-medium">
            <Link to="/aboutus"
            onMouseOver={() => onPlaySound('about')}
            onMouseOut={() => onStopSound('about')}
            >About</Link
            >
          </li>
        </ul>
      </nav>
    );
}

export default NavbarComponent;
