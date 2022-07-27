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
import Services from './pages/Services';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isiData: [],
      isError: false,
      isiToken: 'abcde',
      isiEmail: 'cvmiladiyyah@gmail.com',
      isiPassword: 'arbiamel',
    };
  }

  componentDidMount() {
    this.getData();
}

  //Get Api Users
  getData = async () => {
    /*
    var config = {
      headers: {
        Authorization : 'Bearer ' + this.state.isiToken,
        Accept: 'application/json'
      }
    };
    */

    var krm = {
      email: this.state.isiEmail,
      password: this.state.isiPassword
    };

        try {
            const response = await axios.post(`http://127.0.0.1:8000/api/login`, krm)
            //if((response.data.success)===true){
            this.setState({ isError: false, isiData: response.data.data, isiToken: response.data.token });
            //console.log(this.state.isiToken);
            
            } catch (error) {
              this.setState({ isError: true });
              //console.log(error);
          }

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
        if((response.data.success)===true){
        //console.log(response.data);
        //this.setState({ token: response.data.token });
        this.setState({ users: response.data });
        //var allData = [response.data.user];
        //allData.push(response.data.token);
        //console.log(allData);
        }
      })
      .catch(error => {
        console.log('error', error);
      });

  }
  */
  
  render() {
    if ((this.state.isError)===true) {
      return (
        <div>
          <h1>Terjadi Error Saat Memuat Data</h1>
        </div>
      )
    }else{
  return (
    <Router>
    <div>
      
      <Header/>
        <main id="main">
        <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home 
        isiData={this.state.isiData}
        />}></Route>
        <Route path="/about" element={<About
        isiData={this.state.isiData}/>}></Route>
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
}

export default App;
