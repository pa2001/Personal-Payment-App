import React ,{useState} from 'react'
import img from './images/img.jpg'
import img2 from './images/img2.jpg'
import Howtouse from './Api/Howtouse'
const AboutUs = () => {
    const [about,setAbout]=useState(Howtouse)
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                            <img src={img} alt="aboutus"/>
                        </div>
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                --AVAILABLE ON GOOGLE AND IOS STORES ONLY
                            </h3>
                            <h1 className="main-title">
                                How To Use The App?
                            </h1>
                            {about.map((curr)=>{
                            return (
                                <>
                                    <div className="row our-services-info">
                                        <div className="col-1 our-services-number">
                                            {curr.id}
                                        </div>
                                        <div className="col-10 our-services-data">
                                            <h2>{curr.title}</h2>
                                            <p className="main-hero-para">
                                                {curr.info}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            );
                            })}
                            <br/>
                            <button className="btn-style btn-style-border ">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-7 our-services our-services-rightside-content d-flex justify-content-center flex-column align-items-start">
                        <h3 className="mini-title">
                                --SUPPORT IN ANY LANGUAGE
                            </h3>
                            <h1 className="main-title">
                                World Class Support <br/> Is Here
                            </h1>
                            {about.map((curr)=>{
                            return (
                                <>
                                    <div className="row our-services-info">
                                        <div className="col-1 our-services-number">
                                            {curr.id}
                                        </div>
                                        <div className="col-10 our-services-data fw-bold">
                                            <h2>{curr.title}</h2>
                                            <p className="main-hero-para">
                                                {curr.info}
                                            </p>
                                        </div>
                                    </div>
                                </>
                            );
                            })}
                            <br/>
                            <button className="btn-style btn-style-border ">Learn More</button>
                        </div>
                        <div className="col-12 col-lg-5 our-services-rightside-img">
                            <img src={img2} alt="aboutus"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
