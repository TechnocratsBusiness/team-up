import React from 'react';
import Navigation from './components/Navigation/Navigation.js';
import Body from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js';
import './App.css';
class App extends React.Component {
  render(){
    return(
      <div>
        <Navigation />
        <Body />
        <Footer />
      </div>
      )
  }
}

export default App;
