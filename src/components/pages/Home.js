import React from 'react';
import Slider from '../includes/Slider';
import VMC from './include/Vmc';
import { Link } from 'react-router-dom';
import services2 from '../images/services2.jpg';

function Home() {
    return (
        <div>
            <Slider />

            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className='main-heading'>Our Company</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore pariatur at nam earum odio dolorem voluptatem accusamus velit eveniet? Officia saepe porro consequatur nemo voluptatem cum voluptates unde, officiis ipsam assumenda eius, neque quae ex culpa? Dolorum accusamus accusantium, reprehenderit excepturi adipisci delectus id fugit neque amet enim cupiditate eaque?
                            </p>
                            <Link to='/about' className='btn btn-warning shadow'>Read More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our vision, mission and values */}
            <VMC />

            {/* Our Services */}
            <section className="section border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className='main-heading'>Our Services</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={services2} alt="services" className='w-100 border-bottom' />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste porro repellat, quisquam veniam maxime.
                                    </p>
                                    <Link to="/services" className="btn btn-link" >read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={services2} alt="services" className='w-100 border-bottom' />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste porro repellat, quisquam veniam maxime.
                                    </p>
                                    <Link to="/services" className="btn btn-link" >read more</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow">
                                <img src={services2} alt="services" className='w-100 border-bottom' />
                                <div className="card-body">
                                    <h6>Service 1</h6>
                                    <div className="underline"></div>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste porro repellat, quisquam veniam maxime.
                                    </p>
                                    <Link to="/services" className="btn btn-link" >read more</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        
        </div>
    );
}

export default Home;