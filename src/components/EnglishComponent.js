import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Navbar from './NavbarComponent';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import PDFViewer from 'pdf-viewer-reactjs'
// import {englishPdfRender} from './englishPdfRender';

const EnglishComponent = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onLoad = ({numPages}) => {
    setNumPages(numPages);
  }
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
      <audio id="eng-1" src="audio/english/eng-1.mp3"></audio>
      <audio id="eng-2" src="audio/english/eng-2.mp3"></audio>
      <audio id="eng-3" src="audio/english/eng-3.mp3"></audio>
      <audio id="eng-4" src="audio/english/eng-4.mp3"></audio>
      <audio id="eng-5" src="audio/english/eng-5.mp3"></audio>
      <audio id="eng-6" src="audio/english/eng-6.mp3"></audio>
      <audio id="eng-7" src="audio/english/eng-7.mp3"></audio>
      <audio id="eng-8" src="audio/english/eng-8.mp3"></audio>
      <audio id="eng-9" src="audio/english/eng-9.mp3"></audio>
      <audio id="eng-10" src="audio/english/eng-10.mp3"></audio>
      <audio id="eng-11" src="audio/english/eng-11.mp3"></audio>
      <audio id="eng-12" src="audio/english/eng-12.mp3"></audio>
      <audio id="eng-13" src="audio/english/eng-13.mp3"></audio>
      <audio id="eng-14" src="audio/english/eng-14.mp3"></audio>
      <audio id="eng-15" src="audio/english/eng-15.mp3"></audio>
      <audio id="eng-16" src="audio/english/eng-16.mp3"></audio>
      <audio id="eng-17" src="audio/english/eng-17.mp3"></audio>
      <audio id="eng-18" src="audio/english/eng-18.mp3"></audio>
      <audio id="eng-19" src="audio/english/eng-19.mp3"></audio>
      <audio id="eng-20" src="audio/english/eng-20.mp3"></audio>

      <div className="books behind" >
          <div className="container u-margin-top-big-reverse">
            <p className="page-info text-center">
              <strong>English</strong>  - Page <span id="page-num"></span> of <span id="page-count"></span>
            </p>
            <canvas className="canvas onhover" id="pdf-render">
            </canvas> <br />
            <Document file="'../../public/docs/english/english-1-20.pdf'" onLoadSuccess={onLoad}>
              <Page pageNumber={pageNumber} />
              <h3>Page Number {pageNumber} of {numPages}</h3>
            </Document>
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
        <script  crossOrigin src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>
        <script defer src="./englishPdfRender.js"></script>
    </section>
    );
    
}

export default EnglishComponent;
