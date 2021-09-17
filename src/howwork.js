import React, { useState } from 'react'
import workapi from './Api/workapi'
const Howwork = () => {
    const [Workdata, SetWorkdata] = useState(workapi);
    console.log(Workdata)
    return (
        <>
            <section>
                <div className="work-container container">
                    <h1 className="main-heading text-center">How Does It Works</h1>
                    <div class="row">
                        {
                            workapi.map((curr) => {
                                const {id,logo,title,info}=curr;
                                return <>
                                    <div className="col-12 col-lg-4 text-center work-container-subdiv">
                                    <i class={`fontawsome-style ${logo}`}></i>
                                    <h2 className="sub-heading">{title}</h2>
                                    <p className="main-hero-para w-100">{info}</p>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Howwork
