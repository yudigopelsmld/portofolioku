//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portofolio from './pages/Portofolio';
//import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isiData: [],
      isError: true,
      isiToken: 'abcde',
      isiEmail: 'cvmiladiyyah@gmail.com',
      isiPassword: 'arbiamel',
      url : 'http://127.0.0.1:8000/api/',
    };
  }

  componentDidMount() {
    this.checkUser();
    if(this.state.isError === true){
      this.getData();
    }
    //this.getData();
}

checkUser = async () => {
  //check data user
  //this.setState({ isiToken:  'abcde' });
  var config = {
    headers: {
      Authorization : 'Bearer ' + this.state.isiToken,
      Accept: 'application/json'
    }
  };

  try {
    const response = await axios.get(this.state.url + 'user', config)
    //if((response.data.success)===true){
    this.setState({ isError: false });
    //console.log(response.data);
    //}
    } catch (error) {
      //this.setState({ isError: true });
      console.log(error);
  }
    //this.setState({ isiToken:  'abcde' });
  //check data user

}


  //Get Api Users
  getData = async () => {

    var krm = {
      email: this.state.isiEmail,
      password: this.state.isiPassword
    };

        try {
            const response = await axios.post(this.state.url + 'login', krm)
            //if((response.data.success)===true){
            this.setState({ isError: false, isiData: response.data.data, isiToken: response.data.token });
            //console.log(response.data);
            //}
            } catch (error) {
              this.setState({ isError: true });
              //console.log(error);
          }

    }
  
  render() {
    if ((this.state.isError)===true) {
      return (
        <div>
          <h1>Loading Data...</h1>
        </div>
      )
    }else{
  return (
    <Router>
    <div>
      <Header
      isiData={this.state.isiData}
      />
        <main id="main">
        <Routes>
        <Route exact path="/" element={<Home
        isiData={this.state.isiData}
        />}></Route>
        <Route path="/home" element={<Home 
        isiData={this.state.isiData}
        />}></Route>
        <Route path="/about" element={<About
        isiData={this.state.isiData}
        isiToken={this.state.isiToken}
        />}></Route>
        <Route path="/resume" element={<Resume
        isiData={this.state.isiData}
        isiToken={this.state.isiToken}
        />}></Route>
        <Route path="/portofolio" element={<Portofolio
        isiToken={this.state.isiToken}
        />}></Route>
        <Route path="/contact" element={<Contact
        isiData={this.state.isiData}
        isiToken={this.state.isiToken}
        />}></Route>
        </Routes>
        </main>
      <Footer/>
    </div>
    </Router>
  );
        }
}
}

export default App;
