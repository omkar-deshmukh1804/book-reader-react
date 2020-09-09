import React from 'react';
import { Link } from 'react-router-dom';

const AboutUsComponent = () => {
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
        <audio id="about" src="audio/about.mp3"></audio>
        <audio id="objective" src="audio/About/objective.mp3"></audio>
        <audio id="how-works" src="audio/About/how-works.mp3"></audio>
        <audio id="h3-sub1" src="audio/About/h3-1.mp3"></audio>
        <audio id="h3-sub2" src="audio/About/h3-2.mp3"></audio>
        <audio id="meet" src="audio/About/meet.mp3"></audio>
        <audio id="mam" src="audio/About/mam.mp3"></audio>
        <audio id="vinit" src="audio/About/vinit.mp3"></audio>
        <audio id="omkar" src="audio/About/omkar.mp3"></audio>
        <audio id="viraj" src="audio/About/viraj.mp3"></audio>
        <audio id="mam-title" src="audio/About/mam-title.mp3"></audio>
        <audio id="student-title" src="audio/About/student-title.mp3"></audio>
        <audio id="footer" src="audio/About/footer.mp3"></audio>

        <header className="header-2"></header>
        <div className="u-margin-bottom-medium"></div>
        <main>
          <section className="section-about u-margin-bottom-huge">
            <div
            onMouseOver={() => playSound('about')}
            onMouseOut={() => stopSound('about')}
            className="u-center-text u-margin-top-big"
            >
              <h2 className="heading-secondary-about">
                About
              </h2>
            </div>
    
            <div className="row">
              <div className="col-1-of-2">
                <h3
                  onMouseOver={() => playSound('objective')}
                  onMouseOut={() => stopSound('objective')}
                  className="heading-tertiary u-margin-bottom-small"
                >
                  Our Objective
                </h3>
    
                <p
                  className="paragraph"
                  onMouseOver={() => playSound('h3-sub1')}
                  onMouseOut={() => stopSound('h3-sub1')}
                >
                  Our goal is to bridge the gaps the visually impaired students face
                  to provide a solution which can make knowledge extraction and
                  learning a fun process.
                </p>
    
                <h3
                  className="heading-tertiary u-margin-bottom-small"
                  onMouseOver={() => playSound('how-works')}
                  onMouseOut={() => stopSound('how-works')}
                >
                  How it works?
                </h3>
                <p
                  className="paragraph"
                  onMouseOver={() => playSound('h3-sub2')}
                  onMouseOut={() => stopSound('h3-sub2')}
                >
                  Students can select books and simply select a page to listen to
                  the page of their choice. The app uses OCR with TTS technology,
                  where data from the books are scanned and converted into audio
                  format.
                </p>
              </div>
              <div className="col-1-of-2">
                <div className="composition">
                  <img
                    src="img/child-img/child-img-1.jpg"
                    alt="Photo1"
                    className="composition__photo composition__photo--p1"
                  />
                  <img
                    src="img/child-img/child-img-4.jpg"
                    alt="Photo2"
                    className="composition__photo composition__photo--p2"
                  />
                  <img
                    src="img/child-img/child-img-3.jpg"
                    alt="Photo3"
                    className="composition__photo composition__photo--p3"
                  />
                </div>
              </div>
            </div>
          </section>
    
          <section className="section-about u-margin-bottom-medium">
            <div
              className="u-center-text u-margin-top-medium"
              onMouseOver={() => playSound('meet')}
              onMouseOut={() => stopSound('meet')}
            >
              <h2 className="heading-secondary-about">
                Meet The Team
              </h2>
            </div>
    
            <div className="row">
              <div className="composition">
                <div className="u-center-text u-margin-bottom-medium">
                  <img src="img/avatar/maam.png" alt="Photo1" />
                  <div className="avatar-text">
                    <h3
                    onMouseOver={() => playSound('mam')}
                    onMouseOut={() => stopSound('mam')}
                      className="heading-secondary-about avatar-h3"
                    >
                      Mohini Chaudhari
                    </h3>
                    <h4
                    onMouseOver={() => playSound('mam-title')}
                    onMouseOut={() => stopSound('mam-title')}
                      className="avatar-h4"
                    >
                      Assistant Professor, VIT (Mumbai)
                    </h4>
                  </div>
                </div>
                <div className="col-1-of-3">
                  <img src="img/avatar/vinit.png" alt="Photo1" />
                  <div className="avatar-text">
                    <h3
                    onMouseOver={() => playSound('vinit')}
                    onMouseOut={() => stopSound('vinit')}
                      className="avatar-h3"
                    >
                      Vinit Raut
                    </h3>
                    <h4
                    onMouseOver={() => playSound('student-title')}
                    onMouseOut={() => stopSound('student-title')}
                      className="avatar-h4"
                    >
                      B.E Compter Engineering, VIT (Mumbai)
                    </h4>
                  </div>
                </div>
                <div className="col-1-of-3">
                  <img src="img/avatar/omkar.png" alt="Photo1" />
                  <div className="avatar-text">
                    <h3
                    onMouseOver={() => playSound('omkar')}
                    onMouseOut={() => stopSound('omkar')}
                      className="avatar-h3"
                    >
                      Omkar Deshmukh
                    </h3>
                    <h4
                    onMouseOver={() => playSound('student-title')}
                    onMouseOut={() => stopSound('student-title')}
                      className="avatar-h4"
                    >
                      B.E Compter Engineering, VIT (Mumbai)
                    </h4>
                  </div>
                </div>
                <div className="col-1-of-3">
                  <img src="img/avatar/viraj.png" alt="Photo1" />
                  <div className="avatar-text">
                    <h3
                    onMouseOver={() => playSound('viraj')}
                    onMouseOut={() => stopSound('viraj')}
                      className="avatar-h3"
                    >
                      Viraj Kamtekar
                    </h3>
                    <h4
                    onMouseOver={() => playSound('student-title')}
                    onMouseOut={() => stopSound('student-title')}
                      className="avatar-h4"
                    >
                      B.E Compter Engineering, VIT (Mumbai)
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          <footer
          onMouseOver={() => playSound('footer')}
          onMouseOut={() => stopSound('footer')}
            id="footer"
          >
            <p className="u-center-text footer-primary">
              Built with <i className="fas fa-heart"></i> for students by students in
              2020
            </p>
          </footer>
        </main>
    </section>


    )
    
}

export default AboutUsComponent;
