import React from 'react'
import logo from './Images/logo.png'

import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <div>


            <footer className="mt-5 bg-dark text-light py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={logo} alt="Company Logo" className="logo img-fluid" />
                        </div>
                        <div className="col-md-4">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><NavLink className='text-white' to="/">Home</NavLink></li>
                                <li><NavLink className='text-white' to="/about">About Us</NavLink></li>
                                <li><NavLink className='text-white' to="#">Services</NavLink></li>
                                <li><NavLink className='text-white' to="signup">Contact Us</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <p><a className='text-white' href='mailto:shivanijangid136@gmail.com'>Email : shivanijangid136@gmail.com</a></p>
                            <p><a className='text-white' href='tel:+91 7827531446'>Phone : +91 7827531446</a></p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-md-12 text-center">
                            &copy; 2023 shiv. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!-- Add Bootstrap JS and jQuery scripts --> */}
            {/* <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> */}



        </div>
    )
}

export default Footer