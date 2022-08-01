import React, { Component } from 'react';
import Form from '../components/Form/Form';
//import { aboutData } from '../data/aboutData'
import axios from 'axios';

//const Contact = (props) => (
  class Contact extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nama: '',
        email: '',
        pesan: '',
        buttonDisabled: false,
        notif: '',
      };
    }

    inputOnChangeHandler = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    onSubmitHandler = e => {
      e.preventDefault();
      this.setState({ buttonDisabled: true });
      var payload = {
        nama: this.state.nama,
        email: this.state.email,
        pesan: this.state.pesan,
      };
  
      // url untuk form create
      var config = {
        headers: {
          Authorization : 'Bearer ' + this.props.isiToken,
          Accept: 'application/json'
        }
      };
      var url = 'http://127.0.0.1:8000/api/email';
      //if (this.state.formStatus === 'create') {
        this.addMessage(url,config,payload);
        /*
      } else {
        // url untuk form edit
        url = `https://reqres.in/api/users/${this.state.memberIdSelected}`;
        this.editMember(url, payload);
      }
      */
    };

    addMessage = (url,config,payload) => {
      this.setState({notif:'Loading'})
      axios
        .post(url,payload,config)
        .then(response => {
          //var members = [...this.state.members];
          //members.push(response.data);
          this.setState({ notif: 'Your message has been sent. Thank you!' });
          this.setState({
            buttonDisabled: false,
            nama: '',
            email: '',
            pesan: '',
          });
          //console.log(response.data)
        })
        .catch(error => {
          //console.log(error);
          this.setState({ pesan: error });
        });
    };

    

    render(){
      return (
    <div>
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact details that can be reached</p>
        </div>

        <div className="row" data-aos="fade-in">

          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>{this.props.isiData.alamat}, {this.props.isiData.negara}</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>{this.props.isiData.email}</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>{this.props.isiData.phone}</p>
              </div>

            </div>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <Form
              onSubmitForm={this.onSubmitHandler}
              onChange={this.inputOnChangeHandler}
              nama={this.state.nama}
              email={this.state.email}
              pesan={this.state.pesan}
              notif={this.state.notif}
              buttonDisabled={this.state.buttonDisabled}
            />
          </div>

        </div>

      </div>
    </section>
    </div>
          )
        }
    }

export default Contact