import Axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        email:null,
        password:null
      }
     // this.handleInputChange = this.handleInputChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state);
    console.log(this.state)
    event.preventDefault();
    
  }
  
 
  
  render() {
    return (
      <div>
        <div className="row d-flex justify-content-center mt-5  text-center ">
  

            <form className='border p-2 rounded' >
            <h4 className='text-center'>Login Form</h4>
            <div className="form-outline my-4 ">
                <input type="email/name" id="loginName" name="email"   onChange={this.handleChange} className="form-control" />
                <label className="form-label" >Email or username</label>
            </div>

            <div className="form-outline mb-4">
                <input type="password" id="loginPassword" name='password'  onChange={this.handleChange}  className="form-control" />
                <label className="form-label" >Password</label>
            </div>

            <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                
                </div>
                <div className="col-md-6 d-flex justify-content-center">
                <Link to="/forgetpass" >Forgot password?</Link>
                </div>
            </div>
            
            <button type="submit" onClick={this.handleSubmit}  className="btn btn-primary btn-block mb-4">Sign in</button>

            <div className="text-center">
                <p>Not a member?<Link to="/signup" >Signup</Link></p>
            </div>
            </form>
        </div>
      </div>
    )
  }

  login(event){
  
    event.preventDefault();

   
    var { uname, pass } = document.forms[0];
        
    
    console.log(this.document.forms[0])
  }


}
