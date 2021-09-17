import React , {useState} from 'react'
import Serviceapi from './Api/Serviceapi'
const Services = () => {
    const [Service,SetService]=useState(Serviceapi)
    return (
        <>
        <section className="service-main-container">
            <div className="container-main-container">
                <h1 className="main text-center fw-bold">How To Send Money</h1>
                <div className="row">
                    {
                        Service.map((curr)=>{
                            return (
                                <>
                                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                                        <i className= {`fontawsome-style ${curr.logo}`}></i>
                                        <h2 className="sub-heading">{curr.title}</h2>
                                        <p className="main-hero-para">{curr.info}</p>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>    
        </section>           
        </>
    )
}

export default Services