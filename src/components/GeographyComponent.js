import React from 'react';
import { Link } from 'react-router-dom';
import {geographyPdfRender} from './geographyPdfRender';

const GeographyComponent = () => {
    
    const playSound = (soundObject) => {                      //this needs some more attention
        var thissound = document.getElementById(soundObject);
        var playPromise = thissound.play();
        if (playPromise !== undefined)
        {
          playPromise
            .then(_ => {
              console.log(`this is working`);
            })
            .catch(() => console.log(`Error caught in play`));
          }
      }
      
      const stopSound = (soundObject) => {
        var thissound = document.getElementById(soundObject);
        thissound.pause();
        thissound.currentTime = 0;
      }
    return (
        <section>
        <nav id="navbar">
        <Link
          id="logo-link"
          onMouseOver={() => playSound('book-reader')}
          onMouseOut={() => stopSound('book-reader')}
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
            onMouseOver={() => playSound('home')}
            onMouseOut={() => stopSound('home')}
            >Home
            </Link>
          </li>
          <li>
            <Link to="books"
            onMouseOver={() => playSound('books')}
            onMouseOut={() => stopSound('books')}
            >Books
            </Link>
          </li>
          <li className="u-px-medium">
            <Link to="/aboutus"
            onMouseOver={() => playSound('about')}
            onMouseOut={() => stopSound('about')}
            >About</Link
            >
          </li>
        </ul>
      </nav>
  
    <audio id="home" src="audio/home.mp3"></audio>
    <audio id="books" src="audio/books.mp3"></audio>
    <audio id="about" src="audio/about.mp3"></audio>
    <audio id="contact" src="audio/contact.mp3"></audio>
    <audio id="book-reader" src="audio/book-reader.mp3"></audio>
    <audio id="prev-page" src="audio/prev-page.mp3"></audio>
    <audio id="next-page" src="audio/next-page.mp3"></audio>
    <audio id="geo-1" src="audio/geography/geo-1.mp3"></audio>
    <audio id="geo-2" src="audio/geography/geo-2.mp3"></audio>
    <audio id="geo-3" src="audio/geography/geo-3.mp3"></audio>
    <audio id="geo-4" src="audio/geography/geo-4.mp3"></audio>
    <audio id="geo-5" src="audio/geography/geo-5.mp3"></audio>
    <audio id="geo-6" src="audio/geography/geo-6.mp3"></audio>
    <audio id="geo-7" src="audio/geography/geo-7.mp3"></audio>
    <audio id="geo-8" src="audio/geography/geo-8.mp3"></audio>
    <audio id="geo-9" src="audio/geography/geo-9.mp3"></audio>
    <audio id="geo-10" src="audio/geography/geo-10.mp3"></audio>
    <audio id="geo-11" src="audio/geography/geo-11.mp3"></audio>
    <audio id="geo-12" src="audio/geography/geo-12.mp3"></audio>
    <audio id="geo-13" src="audio/geography/geo-13.mp3"></audio>
    <audio id="geo-14" src="audio/geography/geo-14.mp3"></audio>
    <audio id="geo-15" src="audio/geography/geo-15.mp3"></audio>
    <audio id="geo-16" src="audio/geography/geo-16.mp3"></audio>
    <audio id="geo-17" src="audio/geography/geo-17.mp3"></audio>
    <audio id="geo-18" src="audio/geography/geo-18.mp3"></audio>
    <audio id="geo-19" src="audio/geography/geo-19.mp3"></audio>
    <audio id="geo-20" src="audio/geography/geo-20.mp3"></audio>
      <div className="books behind" >
          <div className="container u-margin-top-big-reverse">
            <p className="page-info text-center">
              <strong>English</strong>  - Page <span id="page-num"></span> of <span id="page-count"></span>
            </p>
            <canvas className="canvas onhover" id="pdf-render"></canvas> <br />
            <div className="button-parent">
  
              <button
                onMouseOver={() => playSound('prev-page')}
                onMouseOut={() => stopSound('prev-page')}
                className="btn"
                id="prev-page-btn"
              >
                <i className="fas fa-arrow-circle-left"></i> 
                
                Prev Page
              </button>
              <button
              onMouseOver={() => playSound('next-page')}
              onMouseOut={() => stopSound('next-page')}
                className="btn "
                id="next-page-btn"
              >
                Next Page 
                <i className="fas fa-arrow-circle-right"></i>
              </button>
            </div> 
        </div>
        </div>
            <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
            {geographyPdfRender}  
    </section>
    );
    
}

export default GeographyComponent;
