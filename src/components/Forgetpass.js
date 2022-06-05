import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Forgetpass extends Component {
  render() {
    return (
      <div>
<div class="row d-flex justify-content-center mt-5  text-center ">
            <form class='border p-2 rounded'>
            <div class="form-outline my-4 ">
                <input type="email" id="loginEmail" class="form-control" />
                <label class="form-label" for="loginEmail">Email or username</label>
            </div>

            <button type="submit" class="btn btn-primary btn-block mb-4">Reset password</button>

            <div class="text-center">
                <p>Not a member?<Link to="/signup" >Signup</Link></p>
            </div>
            </form>
        </div>
      </div>
    )
  }
}
