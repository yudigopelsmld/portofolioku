//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Switch, Redirect } from "react-router-dom";
//import axios from 'axios';
//import Navbar from './components/Navbar/Navbar';
//import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portofolio from './pages/Portofolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

class App extends Component {
/*
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isiToken: '',
      isiEmail: 'cvmiladiyyah@gmail.com',
      isiPassword: 'arbiamel',
    };
  }
/*
  componentDidMount() {
    //this.setState({ token:'dfdd' });
    //console.log(token);
    var data = {
      email: this.state.isiEmail,
      password: this.state.isiPassword
  }
    axios
      .post('http://127.0.0.1:8000/api/login', data)
      .then(response => {
        console.log(response.data);
        this.setState({ token: response.data.token });
      })
      .catch(error => {
        console.log('error', error);
      });
      
  }
  */
  render() {
  return (
    <Router>
    <div>
    <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
        <header id="header">
            <div className="d-flex flex-column">
                <div className="profile">
                <img src="assets/img/profile-img.jpg" alt="" className="img-fluid rounded-circle"/>
                <h1 className="text-light"><Link to="/">Alex Smith</Link></h1>
                    <div className="social-links mt-3 text-center">
                        <Link to="#" className="twitter"><i className="bx bxl-twitter"></i></Link>
                        <Link to="#" className="facebook"><i className="bx bxl-facebook"></i></Link>
                        <Link to="#" className="instagram"><i className="bx bxl-instagram"></i></Link>
                        <Link to="#" className="google-plus"><i className="bx bxl-skype"></i></Link>
                        <Link to="#" className="linkedin"><i className="bx bxl-linkedin"></i></Link>
                    </div>
                </div>

                <nav id="navbar" className="nav-menu navbar">
                <ul>
                <li><Link to="/home" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
                <li><Link to="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
                <li><Link to="/resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
                <li><Link to="/portofolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
                <li><Link to="/services" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></Link></li>
                <li><Link to="/contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
                </ul>
                </nav>
            </div>
        </header>
        

        <main id="main">
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/resume" element={<Resume/>}></Route>
        <Route path="/portofolio" element={<Portofolio/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
        </main>
        <Footer/>
    </div>
    </Router>
  );
}
}

export default App;
