import logo from './logo.svg';
import './App.css';
import image1 from './static/landing.webp';
import HeadingSVG from './title';
import { Component } from 'react';
import Whitebox from './Component';


function App() {
  return (
    <div className="App">
      <div style={{display:"flex", width:"50%"}}>
        <HeadingSVG/>
        <img src={image1} className="image"></img>
      </div>
      <div className="sidebar">
        <div>
          "Drizzle" & "Sizzle" <br/> <u>Extra Virgin Olive Oil</u>
        </div>
        <Whitebox />
      </div>
    </div>

  );
}

export default App;
 