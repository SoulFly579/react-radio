import './App.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import React, { useState } from 'react';
import { data } from "./data";

function App() {
    const [url,setUrl] = useState(null);

  return (
    <div className="App">
      <header>
        <div className="header__logo">
            <img src="https://www.pngkey.com/png/full/22-224230_radio-station-png-clip-art-freeuse-library-radio.png" alt=""/>
        </div>
      </header>
      <div className="container">
        {data.map((radio)=>{
        return (           
                    <div className="radio__container">
                        <div className="radio">
                            <div className="radio__logo">
                                <img src={radio.photo} alt="radioimage" />
                            </div>
                            <div className="radio__name">
                                {radio.name}
                            </div>
                            <a className="radio__play" href="#" onClick={()=>{ setUrl(radio);}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                    <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
        )
        })}
      </div>
      {url ? <AudioPlayer
            src={url.link}
            showJumpControls={false}
            autoPlay={true}
            className={"radio__player"}
        /> : ""}
        
    </div>
  );
}

export default App;
