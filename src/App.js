//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Switch, Redirect } from "react-router-dom";
import axios from 'axios';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portofolio from './pages/Portofolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      about: '',
      isiToken: '',
      isiEmail: 'cvmiladiyyah@gmail.com',
      isiPassword: 'arbiamel',
    };
  }

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
        if((response.data.success)===true){
        //console.log(response.data);
        this.setState({ token: response.data.token });
        this.setState({ users: response.data.user });
        //console.log(this.state.users);
        }
      })
      .catch(error => {
        console.log('error', error);
      });


      
  }
  
  render() {
  return (
    <Router>
    <div>
      <Header/>
        <main id="main">
        <Routes>
        <Route exact path="/" element={<Home
        
        users = { this.state.users }
        />}></Route>
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
