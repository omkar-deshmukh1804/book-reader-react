import React from 'react';
import AboutUs from './AboutUsComponent'
import Books from './BooksComponent'
import English from './EnglishComponent'
import Geography from './GeographyComponent';
import History from './HistoryComponent';
import { Switch, Route, Link, Redirect, BrowserRouter } from 'react-router-dom';


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

        <Link to="/books"
          className="btn btn-white btn-animated"
          onMouseOver={() => playSound('main-button')}
          onMouseOut={() => stopSound('main-button')}
        >Discover all Books
        </Link>
      </div>
    </header>
    </section>
    )
}
const MainComponent = () => {
  return (
      <BrowserRouter>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/books" component={Books}></Route>
            <Route path="/english" exact component={English} ></Route>
            <Route path="/history" exact component={History} ></Route>
            <Route path="/geography" exact component={Geography} ></Route>
            <Redirect to="/home" />
        </Switch>
      </BrowserRouter>
     
    );
}

export default MainComponent;
