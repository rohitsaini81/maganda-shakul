import React from 'react'
import './css/abouts.css'
import './css/bootstrap.min.css'
// import './css/bootstrap-icons.css'
import { images } from './Images'

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
  
    const backgroundImageStyle = {
      color: isAtBottom ? 'transparent' :`hsl(${scrollPercentage}, 50%, 50%)`, };
  




    return (
        <section class="section-animation about-section section-padding" id="about">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                        <div class="services-info">
                            <h2 class="text-white mb-4">About</h2>

                            <p class="text-white">
                                my name is Rohit Saini and I am a DJ and producer. I have been playing music for 10 years and I
                                have been producing for 5 years. I have played in many clubs and festivals. I have
                                played in many clubs and festivals. I have played in many clubs and festivals. I have

                            </p>

                            <h6 class="text-white mt-4">Once in Lifetime Experience</h6>

                            <p class="text-white">
                                I have played in many clubs and festivals. I have played in many clubs and festivals. I
                                have played in many clubs and festivals. I have played in many clubs and festivals. I
                                have played in many clubs and festivals. I have played in many clubs and festivals. I
                                I have played in many clubs and festivals.
                            </p>

                            <h6 class="text-white mt-4">Whole Night Party</h6>

                            <p class="text-white">Please tell your friends about. Thank you.</p>
                        </div>
                    </div>

                    <div class="col-lg-6 col-12">
                        <div class="about-text-wrap">
                            <img src={images} class="about-image img-fluid" />

                            
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
   


}
