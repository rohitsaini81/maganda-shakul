import React from 'react';


const About = () => {
 return (
    <div>
        {/* contact with us */}
      <div className="text-wrapper-8">Get in touch</div>
        <div className="group-3">
          <div className="text-wrapper-9">What i do</div>
          <div className="frame">
            <div className="overlap-group-2">
              <div className="text-wrapper-10">
                Software
                <br />
                Development
              </div>
              <img
                className="vector"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/6560374d16a8a1edc69dea3f/releases/656038ab33de24a54f80d66c/img/vector.png"
              />
            </div>
            <div className="overlap-2">
              <div className="web-development">
                Web
                <br />
                Development
              </div>
              <img
                className="vector-2"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/6560374d16a8a1edc69dea3f/releases/656038ab33de24a54f80d66c/img/vector-1.png"
              />
              <div className="rectangle" />
            </div>
            <div className="overlap-3">
              <div className="text-wrapper-10">
                Web
                <br />
                Design
              </div>
              <img
                className="vector-3"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/6560374d16a8a1edc69dea3f/releases/656038ab33de24a54f80d66c/img/vector-2.png"
              />
            </div>
          </div>
        </div>
    </div>
 );
};

export default About;