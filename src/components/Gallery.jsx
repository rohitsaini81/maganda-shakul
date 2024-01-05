import React from 'react'
import allimages from './new/Images.jsx'
export default function Gallery() {
// React.useEffect(()=>{
//     window.addEventListener('scroll',()=>{
//         const scrollY = window.scrollY;
//         const gallery = document.querySelector('#section_3');
//         const galleryTop = gallery.offsetTop;
//         const galleryHeight = gallery.clientHeight;
//         if(galleryTop==scrollY){
//             scrollTo(scrollY,scrollY+galleryHeight+100)}
//         console.log(scrollY)

//     })
// },[])
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
                                <img src={allimages[1]}
                                style={{objectFit: "contain",height: "50rem",width: "20rem"}}
                                    className="artists-image img-fluid" />
                            </div>

                            <div className="artists-hover">

                            </div>
                        </div>
                    </div>
                    
{/* 2 */}
                    <div className="col-lg-5 col-12">
                        <div className="artists-thumb">
                            <div className="artists-image-wrap">
                                <img src={allimages[14]}
                                    className="artists-image img-fluid" />
                            </div>

                            <div className="artists-hover">

                            </div>
                        </div>

                        <div className="artists-thumb">
                            <img src={allimages[12]}
                                className="artists-image img-fluid" />

                            <div className="artists-hover">


                                <p className="mb-0">
                                    {/* <strong>Youtube Channel:</strong>
                                    <a href="#">Bruno Official</a> */}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
