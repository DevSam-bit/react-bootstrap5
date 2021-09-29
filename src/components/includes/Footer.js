import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr />
                        <p className='text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, eaque.</p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr />
                        <div><Link to='/'>Home</Link></div>
                        <div><Link to='/about'>About</Link></div>
                        <div><Link to='/contact'>Contact</Link></div>
                        <div><Link to='/'>Blog</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr />
                        <div><p className="text-white mb-1">#007, Kingsman Avenue, Kiev, Ukraine</p></div>
                        <div><p className="text-white mb-1">+380987654321</p></div>
                        <div><p className="text-white mb-1">+380123456789</p></div>
                        <div><p className="text-white mb-1"></p>email@gmail.com</div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Footer;