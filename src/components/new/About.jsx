import React, { useRef, useEffect, useState } from 'react';

import './css/abouts.css'
import './css/bootstrap.min.css'
// import './css/bootstrap-icons.css'
import allimages, { images } from './Images'
import data from '../../magandabio';

export default function About() {
    const img2 = useRef(null);
    const [isInViewport, setIsInViewport] = useState(false);

    const handleIntersection = (entries) => {
        const entry = entries[0];
        setIsInViewport(entry.isIntersecting);
    };

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust this threshold based on your needs (0.5 means at least 50% of the target is visible)
        };

        const observer = new IntersectionObserver(handleIntersection, options);
        observer.observe(img2.current);

        return () => {
            observer.disconnect();
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
                            <img src={allimages[14]} ref={img2} className={`about-image img-fluid ${isInViewport ? 'in-view' : 'below'}`} />
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )



}
