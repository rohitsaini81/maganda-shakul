import React from 'react'
import {joecalih, abstralofficial, soundtrap} from './new/Images.jsx'
export default function Gallery() {
    return (
        <section className="artists-section section-padding" id="section_3">
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-12 text-center">
                        <h2 className="mb-4">Gallery</h2>
                    </div>

                    <div className="col-lg-5 col-12">
                        <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <img src={joecalih}
                                    className="artists-image img-fluid" />
                            </div>

                            <div className="artists-hover">

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-12">
                        <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <img src={abstralofficial}
                                    className="artists-image img-fluid" />
                            </div>

                            <div className="artists-hover">

                            </div>
                        </div>

                        <div className="artists-thumb">
                            <img src={soundtrap}
                                className="artists-image img-fluid" />

                            <div className="artists-hover">


                                <p className="mb-0">
                                    <strong>Youtube Channel:</strong>
                                    <a href="#">Bruno Official</a>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
