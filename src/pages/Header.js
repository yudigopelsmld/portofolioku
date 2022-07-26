import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import { homeData } from '../data/homeData'

const Header = () => (
    <div>
    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                    <img src={homeData.imageprofile} alt="" className="img-fluid rounded-circle"/>
                    <h1 className="text-light"><Link to="/">Alex Smith</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                            <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                            <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                            <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                            <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                        </div>
                    </div>

                    <Navbar/>
                </div>
            </header>
    </div>
    )

export default Header