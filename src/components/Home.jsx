import React from 'react';
import ReactPlayer from 'react-player';
import './css/home.css';
import { profile } from './new/Images';
// import VideoPlayer from 'react-video-js-player';
// import { drumvideo } from './new/Images';
const videosource = 'https://youtu.be/LQV_j47pjUQ?si=AwpXVHZMra-0slIC'



export default function Home() {

  return (
    <section id='home'>
    <div className='home'>
      <div className="overlap">
        <div className="group-2">
          <div className="hi-i-am">
            {/* Hi, I am
            <br /> */}
            Maganda Shakul 
          </div>
          <div className="text-wrapper-5">Musician, Artist, Designer</div>
          <div className="overlap-group-wrapper">
            <div className="custom-border-btn overlap-group flex">
              <a className="btn" href="#">
                Contact Me....
              </a>
            </div>
            <div className="div-wrapper flex">
              <a className="custom-btn" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <img src={profile} alt="its me" className="img" />
      </div>
      <hr />
      </div>
      <ReactPlayer
        className="react-player"
        url={videosource}
        // playing={true}
        loop={true}
        muted={true}
        // controls={true}
      />
      {/* <div className="react-player">
        <img src={profile} alt="LALALALA" />
      </div> */}
    </section>
  );
}
