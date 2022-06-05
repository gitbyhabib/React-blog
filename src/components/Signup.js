import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Signup extends Component {
  render() {
    return (
      <div>

<div class="row m-0 d-flex justify-content-center mt-5  text-center ">

            <form class='border p-2 rounded'>
            <h4 class='text-center'>Signup Form</h4>
            <div class="form-outline my-4 ">
                <input type="name" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">Username</label>
            </div>
            <div class="form-outline my-4 ">
                <input type="email" id="loginEmail" class="form-control" />
                <label class="form-label" for="loginEmail">Email</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="loginPassword" class="form-control" />
                <label class="form-label" for="loginPassword">Password</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="loginPassword" class="form-control" />
                <label class="form-label" for="loginPassword">Confirm Password</label>
            </div>

            <div class="row mb-4">
                <div class="col-md-6 d-flex justify-content-center">
                <div class="form-check mb-3 mb-md-0">
                    <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                    <label class="form-check-label" for="loginCheck"> I agree terms and conditions </label>
                </div>
                </div>
                <div class="col-md-6 d-flex justify-content-center">
                <Link to="/forgetpass" >Forgot password?</Link>
                </div>
            </div>
            
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign Up</button>

            <div class="text-center">
                <p>Already a member?  <Link to="/login" >Login</Link> </p>
            </div>
            </form>
        </div>
      </div>
    )
  }
}
