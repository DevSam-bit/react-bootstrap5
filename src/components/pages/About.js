import React from 'react';
import VMC from './include/Vmc';

function Aboutus() {
    return (
        <div>
            {/* <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>About Us</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">
                                Home / About Us
                            </h6>
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="section border-bottom">
                <div className="container">
                    <h1 className='text-center about-us'>About Us</h1>
                    <h5 className='main-heading'>Our Company</h5>
                    <div className="underline"></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A quam ullam saepe dolor aspernatur quisquam voluptatum iste labore voluptate nesciunt?
                    </p>
                </div>
            </section>

            <VMC />
        </div>
    );
}

export default Aboutus;