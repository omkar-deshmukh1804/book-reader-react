import React from 'react';
import { Link } from 'react-router-dom';


const BooksComponent = () => {

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
      <audio id="read-books" src="audio/read-books.mp3"></audio>
      <audio id="english" src="audio/english.mp3"></audio>
      <audio id="history" src="audio/history.mp3"></audio>
      <audio id="geography" src="audio/geography.mp3"></audio>
  
      <section className="books">
        <div className="u-center-text u-margin-bottom-big">
          <h2
          onMouseOver={() => playSound('read-books')}
          onMouseOut={() => stopSound('read-books')}
            className="heading-secondary"
          >
            Read Books
          </h2>
        </div>
  
        <div className="row">
          <div className="col-1-of-3">
            <Link to="/english"
            onMouseOver={() => playSound('english')}
            onMouseOut={() => stopSound('english')}
            >
              <div className="book-box">
                <i className="book-icon icon-basic-book-pen"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">English</h3>
                <p className="book-text u-font-large">
                  To be, or not to be: that is the question
                </p>
              </div>
            </Link>
          </div>
  
          <div className="col-1-of-3">
            <div className="book-box">
              <Link to="/history"
              onMouseOver={() => playSound('history')}
              onMouseOut={() => stopSound('history')}
              >
                <i className="book-icon icon-basic-compass"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">History</h3>
                <p className="book-text u-font-large">
                  Those who forget the history are condemn to repeat it
                </p>
              </Link>
            </div>
          </div>
  
          <div className="col-1-of-3">
            <div className="book-box">
              <Link to="geography"
              onMouseOver={() => playSound('geography')}
              onMouseOut={() => stopSound('geography')}
              >
                <i className="book-icon icon-basic-world"></i>
                <h3 className="heading-tertiary u-margin-bottom-small">Geography</h3>
                <p className="book-text u-font-large">
                  Exploring the unexplored, a wanderlust journey
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
    );
}

export default BooksComponent;
