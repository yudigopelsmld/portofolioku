import React, { Component } from 'react'
//import { aboutData } from '../data/aboutData';
//import { homeData } from '../data/homeData'
//import { resumeData } from '../data/resumeData'
import axios from 'axios';

class Resume extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isiResume: [],
      isiKerja: [],
      isiCert: [],
      isError: false,
      item:[],
      experience:[]
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
          this.setState({ isError: false, isiResume: response.data });
          
          //const names = Array.keys(this.state.isiSkill);
          //console.log(this.props.isiResume);

          } catch (error) {
            this.setState({ isError: true });
            //console.log(error);
        }

        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/kerja`, config)
          //if((response.data.success)===true){
          this.setState({ isError: false, isiKerja: response.data });
          
          //const names = Array.keys(this.state.isiSkill);
          //console.log(this.state.isiKerja);

          } catch (error) {
            this.setState({ isError: true });
            //console.log(error);
        }

        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/sertifikat`, config)
          //if((response.data.success)===true){
          this.setState({ isError: false, isiCert: response.data });
          
          //const names = Array.keys(this.state.isiSkill);
          //console.log(this.state.isiKerja);

          } catch (error) {
            this.setState({ isError: true });
            //console.log(error);
        }
  }
  
  
  render(){
    var items = this.state.isiResume;
    var itemsKerja = this.state.isiKerja;
    var itemsCert = this.state.isiCert;
    //console.log(itemsKerja);
    return (
<div>
  <section id="resume" className="resume">
  <div className="container">

    <div className="section-title">
      <h2>Resume</h2>
      <p>Daftar Pekerjaan dan Pendidikan</p>
    </div>

    <div className="row">
   
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
        </div>
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 className="resume-title">Professional Experience</h3>
        {itemsKerja.map(experience => (
        <div key={experience.id}>
          <div className="resume-item">
            <h4>{experience.pekerjaan}</h4>
            <h5>{experience.tahun_awal} - {experience.tahun_akhir}</h5>
            <p><em>{experience.perusahaan5} </em></p>
          </div>
        </div>
        ))}
      </div>
    </div>
    <div className="row">
    <div className="col-lg-6" data-aos="fade-up">
       
       <h3 className="resume-title">Education</h3>
       {items.map(item => (
       <div className="col-lg-6" key={item.id}>
       <div className="resume-item">
         <h4>{item.tahun_awal} - {item.tahun_akhir}</h4>
         <h5>{item.jurusan}</h5>
         <p><em>{item.sekolah}</em></p>

       </div>
       </div>
       ))}
     </div>

      

      
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
        <h3 className="resume-title">Certificate</h3>
        {itemsCert.map(cert => (
        <div key={cert.id}>
          <div className="resume-item">
            <h4>{cert.nama}</h4>
            <h5>{cert.tanggal}</h5>
            <p><em>{cert.detail} </em></p>
            <img src={`http://127.0.0.1:8000/gambar/${cert.gambar}`} className="img-fluid" alt=""/>
          </div>
        </div>
        ))}
      </div>

    </div>

  </div>
  </section>
</div>
    )
  }
}

export default Resume