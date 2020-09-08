import React from 'react';
import AboutUs from './AboutUsComponent'
import Books from './BooksComponent'
import { Switch, Route, Link, Redirect } from 'react-router-dom';

const Home = () => {

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
      <a
        id="logo-link"
        onMouseOver={() => playSound('book-reader')}
        onMouseOut={() => stopSound('book-reader')}
        href="index.html"
      >
        <h1 className="logo">
          <span className="text-primary">
            <i className="fas fa-book-open"></i> Book
            </span>Reader
        </h1>
      </a>

      <ul>
        <li>
          <div
            onMouseOver={() => playSound('home')}
            onMouseOut={() => stopSound('home')}
          > <Link to="/home" >Home</Link></div>
        </li>
        <li>
          <div
            onMouseOver={() => playSound('books')}
            onMouseOut={() => stopSound('books')}
            > <Link to="/books">Books</Link></div>
        </li>
        <li className="u-px-medium">
          <div
            onMouseOver={() => playSound('about')}
            onMouseOut={() => stopSound('about')}
            > <Link to="/aboutus" >About </Link></div>
        </li> 
      </ul>
    </nav>

    <audio id="home" src="audio/home.mp3"></audio>
    <audio id="books" src="audio/books.mp3"></audio>
    <audio id="about" src="audio/about.mp3"></audio>
    <audio id="contact" src="audio/contact.mp3"></audio>
    <audio id="book-reader" src="audio/book-reader.mp3"></audio>
    <audio id="secondary-heading" src="audio/heading-secondary.mp3"></audio>
    <audio id="main-button" src="audio/main-button.mp3"></audio>

    <header className="header">
      <div className="text-box">
        <h1 className="heading-primary">
          <span
            className="heading-primary-main"
            onMouseOver={() => playSound('book-reader')}
            onMouseOut={() => stopSound('book-reader')}
            >Book Reader
            </span> 
          <span
            className="heading-primary-sub"
            onMouseOver={() => playSound('secondary-heading')}
            onMouseOut={() => stopSound('secondary-heading')}
            >Education is a gift every kid deserves.
          </span>
        </h1>

        <div
          className="btn btn-white btn-animated"
          onMouseOver={() => playSound('main-button')}
          onMouseOut={() => stopSound('main-button')}
        ><Link to="/books">Discover all Books</Link> 
        </div>
      </div>
    </header>
    </section>
    )
}
const MainComponent = () => {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/books" component={Books}></Route>
            <Redirect to="/home" />
        </Switch>
    );
}

export default MainComponent;
