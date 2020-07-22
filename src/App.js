import React from 'react';
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from './Assets/Products.png'
import img2 from './Assets/Products2.jpg'
import './app.css'


function App() {
  return (
    <div className="App">
      <Carousel>
        <div>
          <img src={img1}/>
        </div>
        <div>
          <img src={img2}/>
        </div>
        
      </Carousel>
    </div>
  );
}

export default App;
