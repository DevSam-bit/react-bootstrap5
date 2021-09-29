import React from 'react';

function Contactus() {
    return (
        <div>   
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className='col-md-6 border-right'>
                                    <h6>Contact Form</h6>
                                    <hr />
                                    <div className="form-group mb-3">
                                        <label htmlFor=""className="mb-1" >Full Name</label>
                                        <input className='form-control' type="text" placeholder='Enter Full Name' />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor=""className="mb-1" >Phone Number</label>
                                        <input className='form-control' type="text" placeholder='Enter Full Name' />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor=""className="mb-1" >Email Address</label>
                                        <input className='form-control' type="text" placeholder='Enter Full Name' />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label htmlFor=""className="mb-1" >Message</label>
                                        <textarea name="" id="" rows="5" className='form-control' placeholder='Type your message....'></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type='button' className='btn btn-primary shadow w-100'>Send Message</button>
                                    </div>
                                </div>
                                <div className='col-md-6 border-start'>
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline"></div>
                                    <p>
                                        #007, Kingsman Avenue, Kiev, Ukraine
                                    </p>
                                    <p>
                                        +380123456789
                                    </p>
                                    <p>
                                        email@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contactus;