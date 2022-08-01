import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => (
    <div>
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li><Link to="/" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
        <li><Link to="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
        <li><Link to="/resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
        <li><Link to="/portofolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portofolio</span></Link></li>
        <li><Link to="/contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
        </ul>
    </nav>
    </div>
    )

export default Navbar