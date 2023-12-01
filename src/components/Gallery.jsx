import React from 'react'
import {joecalih, abstralofficial, soundtrap} from './new/Images.jsx'
export default function Gallery() {
    return (
        <section class="artists-section section-padding" id="section_3">
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col-12 text-center">
                        <h2 class="mb-4">Gallery</h2>
                    </div>

                    <div class="col-lg-5 col-12">
                        <div class="artists-thumb">
                            <div class="artists-image-wrap">
                                <img src={joecalih}
                                    class="artists-image img-fluid" />
                            </div>

                            <div class="artists-hover">

                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 col-12">
                        <div class="artists-thumb">
                            <div class="artists-image-wrap">
                                <img src={abstralofficial}
                                    class="artists-image img-fluid" />
                            </div>

                            <div class="artists-hover">

                            </div>
                        </div>

                        <div class="artists-thumb">
                            <img src={soundtrap}
                                class="artists-image img-fluid" />

                            <div class="artists-hover">


                                <p class="mb-0">
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
