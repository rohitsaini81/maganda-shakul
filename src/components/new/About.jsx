import React from 'react'
import './css/abouts.css'
import './css/bootstrap.min.css'
// import './css/bootstrap-icons.css'
import { images } from './Images'
import data from '../../magandabio';

export default function About() {


    const [scrollPercentage, setScrollPercentage] = React.useState(0);
    const [isAtBottom, setIsAtBottom] = React.useState(false);
   
  
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const scrollPercentage = (currentScroll / scrollHeight) * 100;
     setIsAtBottom(currentScroll === scrollHeight)
  
      setScrollPercentage(scrollPercentage);
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  




    return (
        <section className=" section-animation about-section section-padding" id="about">
            <div className="bg-35 container">
                <div className="row">

                    <div className="col-lg-6 col-12 mb-4 mb-lg-0 flex align-items-center">
                        <div className="services-info">
                            <h2 className="text-white mb-4">About</h2>

                            <p className="text-white">
                              {data.introduction}
                            </p>

                            <h6 className="text-white mt-4">Once in Lifetime Experience</h6>

                            <p className="text-white">
                                {data.bio}
                            </p>

                            <h6 className="text-white mt-4">Me</h6>

                            <p className="text-white">{data.title}</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="about-text-wrap">
                            <img src={images} className="about-image img-fluid" />

                            
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
   


}
