import React, { Component } from 'react'
//import { skillData } from '../data/skillData'
import axios from 'axios';

// nama class diawali huruf kapital (uppercase)
class Skill extends Component {

    constructor(props) {
        super(props);
        this.state = {
          isiSkill: [],
          isError: false,
        };
      }

      
    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        
        var config = {
          headers: {
            Authorization : 'Bearer ' + this.props.token,
            Accept: 'application/json'
          }
        };

    
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/skill`, config)
                //if((response.data.success)===true){
                this.setState({ isError: false, isiSkill: response.data });
                
                //const names = Array.keys(this.state.isiSkill);
                //console.log(names);

                } catch (error) {
                  this.setState({ isError: true });
                  //console.log(error);
              }

              //var items=this.state.isiSkill.map(data => ({value: data.id, nama: data.nama}));
              //console.log(items);
        }
        

    render(){
        var items = this.state.isiSkill;
        //console.log(items);
        return (
            
<div>
    <section id="skills" className="skills section-bg">
    <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row skills-content" >
        <div className="col-lg-12" data-aos="fade-up" >
          {items.map(item => (
            <div className="progress" key={item.id}>
              <span className="skill">{item.nama}<i className="val">{item.nilai}%</i></span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
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

export default Skill