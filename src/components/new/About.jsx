import React from 'react'
import './css/abouts.css'
import './css/bootstrap.min.css'
// import './css/bootstrap-icons.css'
import { images } from './Images'
export default function About() {
    return (
        <section class="about-section section-padding" id="section_2">
            <div class="container">
                <div class="row">

                    <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
                        <div class="services-info">
                            <h2 class="text-white mb-4">About</h2>

                            <p class="text-white">
                                my name is Bruno and I am a DJ and producer. I have been playing music for 10 years and I
                                have been producing for 5 years. I have played in many clubs and festivals. I have
                                played in many clubs and festivals. I have played in many clubs and festivals. I have

                            </p>

                            <h6 class="text-white mt-4">Once in Lifetime Experience</h6>

                            <p class="text-white">
                                I have played in many clubs and festivals. I have played in many clubs and festivals. I
                                have played in many clubs and festivals. I have played in many clubs and festivals. I
                                have played in many clubs and festivals. I have played in many clubs and festivals. I
                                have played in many clubs and festivals. I have played in many clubs and festivals. I
                                have played in many clubs and festivals. I have played in many clubs and festivals. I
                                have played in many clubs and festivals. I have played in many clubs and festivals. I
                                have played in many clubs and festivals. I have played in many clubs and festivals.
                            </p>

                            <h6 class="text-white mt-4">Whole Night Party</h6>

                            <p class="text-white">Please tell your friends about our website. Thank you.</p>
                        </div>
                    </div>

                    <div class="col-lg-6 col-12">
                        <div class="about-text-wrap">
                            <img src={images} class="about-image img-fluid" />

                            <div class="about-text-info d-flex">
                                <div class="d-flex">
                                    <i class="about-text-icon bi-person"></i>
                                </div>


                                <div class="ms-4">
                                    <h3>a happy moment</h3>

                                    <p class="mb-0">your amazing festival experience with us</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}
