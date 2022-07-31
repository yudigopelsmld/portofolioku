import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
//import { homeData } from '../data/homeData'

const Header = (props) => (
    <div>
    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <header id="header">
                <div className="d-flex flex-column">
                    <div className="profile">
                    <img src={`http://127.0.0.1:8000/gambar/${props.isiData.photo}`} alt="" className="img-fluid rounded-circle"/>
                    <h1 className="text-light"><Link to="/">{props.isiData.name}</Link></h1>
                        <div className="social-links mt-3 text-center">
                            <a className='twitter' href="http://twitter.com/yudigopels" target='_blank' rel="noopener"><i className="bx bxl-twitter"></i></a>
                            <a className='linkedin' href="https://www.linkedin.com/in/yudi-susanto/" target='_blank' rel="noopener"><i className="bx bxl-linkedin"></i></a>
                        </div>
                    </div>

                    <Navbar/>
                </div>
            </header>
    </div>
    )

export default Header