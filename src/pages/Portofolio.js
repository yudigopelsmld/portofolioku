import React, { Component } from 'react'
import axios from 'axios';
//import AuthVerify from '../pages/AuthVerify';

class Portofolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isiPorto: [],
      isError: false,
      item:[],
      isiToken:this.props.isiToken,
    };
  }

  componentDidMount() {

    this.getData();
}

getData = async () => {
        
  var config = {
    headers: {
      Authorization : 'Bearer ' + this.state.isiToken,
      Accept: 'application/json'
    }
  };


      try {
          const response = await axios.get(`http://127.0.0.1:8000/api/portofolio`, config)
          if((response.data.message)!=='Unauthenticated.'){
          this.setState({ isError: false, isiPorto: response.data });
          }
          //const names = Array.keys(this.state.isiSkill);
          //console.log(this.props.isiPorto);

          } catch (error) {
            this.setState({ isError: true });
            //console.log(this.state.isError);
        }


  }
  
  
  render(){
    var items = this.state.isiPorto;
    //console.log(items);
    return (
    <div>
    <section id="portofolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Daftar Project</p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
            </ul>
          </div>
        </div>
        
        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
        {items.map(item => (
        <div className="col-md-6" key={item.id}>
          <div className="col-lg-6 portfolio-item">
          <h2>{item.nama}</h2>
            <div className="portfolio-wrap">
              <img src={`http://127.0.0.1:8000/gambar/${item.photo}`} className="img-fluid" alt=""/>
              <div className="portfolio-links">
              <a href={item.link} target='_blank' rel="noreferrer" title={item.nama}><i className="bx bx-link"></i></a>
              </div>
            </div>
          </div>
          </div>
        ))}
        </div>

      </div>
    </section>
    </div>
    )
  }
}

export default Portofolio