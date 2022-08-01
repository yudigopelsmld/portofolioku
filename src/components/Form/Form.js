import React from 'react'

const form = (props) => (
    <form onSubmit={props.onSubmitForm} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    name="nama" 
                    className="form-control" 
                    value={props.nama}
                    onChange={props.onChange} 
                    required/>
                </div>
                <div className="form-group col-md-6">
                  <label>Your Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    value={props.email}
                    onChange={props.onChange} 
                    required/>
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea 
                className="form-control" 
                name="pesan" 
                rows="10" 
                value={props.pesan}
                onChange={props.onChange} 
                required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">{props.notif}</div>
                <div className="error-message"></div>
                <div className="sent-message">{props.notif}</div>
              </div>
              <div className="text-center">
                <button 
                    type="submit"
                    disabled={props.buttonDisabled}
                    >Send Message
                </button>
            </div>
            </form>
    
)

export default form