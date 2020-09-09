import React from 'react';
import {historyPdfRender} from './historyPdfRender';
import Navbar from './NavbarComponent';

const HistoryComponent = () => {
    
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
        <Navbar onPlaySound={(soundObject) =>  playSound(soundObject)}
        onStopSound={(soundObject) => stopSound(soundObject)} />
  
      <audio id="home" src="audio/home.mp3"></audio>
      <audio id="books" src="audio/books.mp3"></audio>
      <audio id="about" src="audio/about.mp3"></audio>
      <audio id="contact" src="audio/contact.mp3"></audio>
      <audio id="book-reader" src="audio/book-reader.mp3"></audio>
      <audio id="prev-page" src="audio/prev-page.mp3"></audio>
      <audio id="next-page" src="audio/next-page.mp3"></audio>  
      <audio id="his-1" src="audio/history/his-1.mp3"></audio>
      <audio id="his-2" src="audio/history/his-2.mp3"></audio>
      <audio id="his-3" src="audio/history/his-3.mp3"></audio>
      <audio id="his-4" src="audio/history/his-4.mp3"></audio>
      <audio id="his-5" src="audio/history/his-5.mp3"></audio>
      <audio id="his-6" src="audio/history/his-6.mp3"></audio>
      <audio id="his-7" src="audio/history/his-7.mp3"></audio>
      <audio id="his-8" src="audio/history/his-8.mp3"></audio>
      <audio id="his-9" src="audio/history/his-9.mp3"></audio>
      <audio id="his-10" src="audio/history/his-10.mp3"></audio>
      <audio id="his-11" src="audio/history/his-11.mp3"></audio>
      <audio id="his-12" src="audio/history/his-12.mp3"></audio>
      <audio id="his-13" src="audio/history/his-13.mp3"></audio>
      <audio id="his-14" src="audio/history/his-14.mp3"></audio>
      <audio id="his-15" src="audio/history/his-15.mp3"></audio>
      <audio id="his-16" src="audio/history/his-16.mp3"></audio>
      <audio id="his-17" src="audio/history/his-17.mp3"></audio>
      <audio id="his-18" src="audio/history/his-18.mp3"></audio>
      <audio id="his-19" src="audio/history/his-19.mp3"></audio>
      <audio id="his-20" src="audio/history/his-20.mp3"></audio>
      <audio id="his-21" src="audio/history/his-21.mp3"></audio>
      <audio id="his-22" src="audio/history/his-22.mp3"></audio>
      <audio id="his-23" src="audio/history/his-23.mp3"></audio>
      <audio id="his-24" src="audio/history/his-24.mp3"></audio>
      <audio id="his-25" src="audio/history/his-25.mp3"></audio>
      <audio id="his-26" src="audio/history/his-26.mp3"></audio>
      <audio id="his-27" src="audio/history/his-27.mp3"></audio>
      <audio id="his-28" src="audio/history/his-28.mp3"></audio>
      <audio id="his-29" src="audio/history/his-29.mp3"></audio>
      <audio id="his-30" src="audio/history/his-30.mp3"></audio>
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
            {historyPdfRender}  
    </section>
    );
    
}

export default HistoryComponent;
