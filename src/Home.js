import React from 'react';
import './Home.scss';
import MainSides from './Components/MainSides';
import NavBar from './Components/NavBar';

import mountainImage from './1 Assets/Mountain.png';

function Home() {
  return (
    <div className="App" >
      <div>
        <img className="imageTop" src={mountainImage} alt="A blurred mountain"/>
        
      </div>

      <div className="main">
        <NavBar/>
        <br/>
        <div className="central">
          <MainSides />
        </div>
      </div>
      
    </div>
  );
}

export default Home;
