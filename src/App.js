import React, { Component } from 'react';
//import logo from './papa_gully.jpeg';
import './App.css';
import { Zoom } from 'react-slideshow-image';

const images = [
  '/slide_2.jpg',
  '/slide_3.jpg',
  '/slide_4.jpg'
];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}


class App extends Component{
  render() {
  return (
    <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
  )
  }
}

export default App;
