import React from 'react'
import img1 from './images/payment.jpg'
import img2 from './images/pay.jpg'
const header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
                            <h1 className="display-2">Online Payment Made<br />Easy For You</h1>
                            <p className="main-hero-para">
                                Contrary to popular belief, Lorem Ipsum is not simply random text.
                                It has roots in a piece of classical Latin literature from 45 BC, making it over
                                2000 years old. Richard McClintock, 
                            </p>
                            <h3>Get Early Access For Youself</h3>
                            <div className="input-group mt-3">
                                <input type="text" className="rounded-pill w-75 me-3 p=2 form-control-text" placeholder="Enter your email" />
                                <div className="input-group-button">
                                    Get it now
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                            <img src={img2} alt="heroing" className="img-fluid main-hero-img1" />
                            <img src={img1} alt="heroing" className="img-fluid main-hero-img2" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default header