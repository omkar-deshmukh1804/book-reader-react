import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from  './components/MainComponent'


const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
    
  );
}

export default App;
