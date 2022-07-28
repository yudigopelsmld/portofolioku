import React, { Component } from 'react'
//import { aboutData } from '../data/aboutData';
//import { homeData } from '../data/homeData'
import { resumeData } from '../data/resumeData'
import axios from 'axios';

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isiResume: [],
      isError: false,
    };
  }

  componentDidMount() {
    this.getData();
}

getData = async () => {
        
  var config = {
    headers: {
      Authorization : 'Bearer ' + this.props.isiToken,
      Accept: 'application/json'
    }
  };


      try {
          const response = await axios.get(`http://127.0.0.1:8000/api/education`, config)
          //if((response.data.success)===true){
          //this.setState({ isError: false, isiResume: response.data });
          
          //const names = Array.keys(this.state.isiSkill);
          console.log(response.data);

          } catch (error) {
            this.setState({ isError: true });
            //console.log(error);
        }

        //var items=this.state.isiSkill.map(data => ({value: data.id, nama: data.nama}));
        //console.log(items);
  }
  
  
  render(){
    var items = this.state.isiResume;
    console.log(items);
    return (
<div>
  <section id="resume" className="resume">
  <div className="container">

    <div className="section-title">
      <h2>Resume</h2>
      <p>Daftar Pekerjaan dan Pendidikan</p>
    </div>

    <div className="row">
    {items.map(item => (
      <div className="col-lg-6" data-aos="fade-up">

        <h3 className="resume-title">Summary</h3>
        <div className="resume-item pb-0">
          <h4>{this.props.isiData.name}</h4>
          <p><em>{this.props.isiData.tentang}</em></p>
          <ul>
            <li>{this.props.isiData.alamat}, {this.props.isiData.negara}</li>
            <li>{this.props.isiData.phone}</li>
            <li>{this.props.isiData.email}</li>
          </ul>
        </div>

       
        <h3 className="resume-title" key={item.id}>Education</h3>
        
        <div className="resume-item">
          <h4>{item.id}</h4>
          <h5>{item.tahun_awal}</h5>
          <p><em>{resumeData.sekolah1}</em></p>
          <p>{resumeData.detail1}</p>
        </div>
      </div>
      ))}

      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 className="resume-title">Professional Experience</h3>

        <div className="resume-item">
            <h4>{resumeData.jabatan5}</h4>
            <h5>{resumeData.thnjabat5}</h5>
            <p><em>{resumeData.perusahaan5} </em></p>
            <ul>
              <li>{resumeData.tugas5}</li>
            </ul>
          </div>

          <div className="resume-item">
            <h4>{resumeData.jabatan4}</h4>
            <h5>{resumeData.thnjabat4}</h5>
            <p><em>{resumeData.perusahaan4} </em></p>
            <ul>
              <li>{resumeData.tugas4}</li>
            </ul>
          </div>

        <div className="resume-item">
            <h4>{resumeData.jabatan3}</h4>
            <h5>{resumeData.thnjabat3}</h5>
            <p><em>{resumeData.perusahaan3} </em></p>
            <ul>
              <li>{resumeData.tugas3}</li>
            </ul>
          </div>

          <div className="resume-item">
            <h4>{resumeData.jabatan2}</h4>
            <h5>{resumeData.thnjabat2}</h5>
            <p><em>{resumeData.perusahaan2} </em></p>
            <ul>
              <li>{resumeData.tugas2}</li>
            </ul>
          </div>
            
          <div className="resume-item">
            <h4>{resumeData.jabatan1}</h4>
            <h5>{resumeData.thnjabat1}</h5>
            <p><em>{resumeData.perusahaan1} </em></p>
            <ul>
              <li>{resumeData.tugas1}</li>=
            </ul>
          </div>
      </div>
    </div>

  </div>
  </section>
</div>
    )
  }
}

export default Resume