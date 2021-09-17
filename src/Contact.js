import React, { useState } from 'react'
import img from './images/img3.jpg'
const Contact = () => {
    const [Userdata, SetUserdata] = useState({
        firstName: "",
        lastName: "",
        phoneNo: "",
        email: "",
        address: "",
        message: "",
    });
    let name, value
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        SetUserdata({ ...Userdata, [name]: value })
    };
    const submitdata = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phoneNo, email, address, message } = Userdata;
        if(firstName && lastName && phoneNo && email && address && message){
        const res = fetch('https://reactfirebasewebsite-2ae4b-default-rtdb.firebaseio.com/userDataRecords.json',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstName, lastName, phoneNo, email, address, message
                })
            }
        );
        if (res) {
            SetUserdata({
                firstName: "",
                lastName: "",
                phoneNo: "",
                email: "",
                address: "",
                message: "",
            })
            alert("Data Stored Successfully")
        }
        else {
            alert("Plz fill the data properly")
        }
    }
    else {
        alert("Plz fill the data properly")
    }
    }
    return (
        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold d-flex justify-content-center flex-column align-items-start">Contact with our sales team</h1>
                                    <p className="main-hero-para">Lorem Ipsum is simply dummy text of
                                        the printing and typesetting industry. Lorem Ipsum has been the
                                        industry's standard dummy
                                    </p>
                                    <figure>
                                        <img src={img} alt="contact-us" className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST" >
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="firstName" id="" className="form-control" placeholder="First Name" autocomplete="off" value={Userdata.firstName} onChange={postUserData} />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="lastName" id="" className="form-control" placeholder="Last Name" autocomplete="off" value={Userdata.lastName} onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="phoneNo" id="" className="form-control" placeholder="Phone Number" autocomplete="off" value={Userdata.phoneNo} onChange={postUserData} />
                                            </div>
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text" name="email" id="" className="form-control" placeholder="Email-Id" autocomplete="off" value={Userdata.email} onChange={postUserData} />                                           </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text" name="address" id="" className="form-control" placeholder="Add Address" autocomplete="off"  value={Userdata.address} onChange={postUserData} />
                                            </div>
                                            <div className="col-12">
                                                <input type="text" name="message" id="" className="form-control" placeholder="Enter Your Message" autocomplete="off" value={Userdata.message} onChange={postUserData} />
                                            </div>
                                        </div>
                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" className="main-hero-para">
                                                Lorem Ipsum is simply dummy text of
                                                the printing and typesetting industry.
                                            </label>
                                        </div>
                                        <button type="submit" className="btn btn-style w-100" onClick={submitdata}>Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
