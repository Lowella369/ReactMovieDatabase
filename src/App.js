import React from 'react'
//Components
import Header from './components/Header'
import Home from './components/Home'

//styles
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
