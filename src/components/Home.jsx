import React from 'react';
import Image from '../nav/Image';
import ReactPlayer from 'react-player';
import './css/home.css';
// import VideoPlayer from 'react-video-js-player';
const videoSource = 'https://auto-system.onrender.com/api/9'


export default function Home() {

  return (
    <div className='home'>
      <ReactPlayer
        className="react-player"
        url={videoSource}
        playing={true}
        loop={true}
        // muted={true}
        // controls={true}
      />

      <div className="overlap">
        <div className="group-2">
          <div className="hi-i-am">
            Hi, I am
            <br />
            Maganda Shakul
          </div>
          <div className="text-wrapper-5">Musician, Artist, Designer</div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group flex">
              <a className="text-wrapper-6" href="#">
                Contact Me....
              </a>
            </div>
            <div className="div-wrapper flex">
              <a className="text-wrapper-6" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <Image />
      <hr />
    </div>
  );
}
