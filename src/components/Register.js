import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BtnNormal, BtnSpinner } from "./common/Button";
import TextFieldGroup from "./common/TextFieldGroup";

export class Register extends Component {
  constructor() {
    super(); 

    this.state = {
      username: "",
      email: "",
      password: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors) {
      return {
        errors: nextProps.errors,
      };
    }
    return null;
  }

  onSubmit (e) {
    e.preventDefault()

    const payload = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
      };
    }


  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-5">
              <div className="d-flex align-items-center min-vh-100">
                <div className="w-100 d-block bg-white shadow-lg rounded my-5">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="p-5">
                        <div className="text-center">
                        <div>
                          <h4 className="heading py-3"><span className="bold">Superb</span>Books</h4>
                        </div>
                        </div>
                        <h1 className="h5 mb-1">Create an Account!</h1>
                        <p className="text-muted mb-4">
                          Don't have an account? Create your own account, it
                          takes less than a minute
                        </p>
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <input 
                            type="text" 
                            placeholder="Username" 
                            id="name" 
                            className="form-control p-4" 
                            value={this.state.username}
                            required
                            onChange={this.onChange}
                          />
                        </div>

                        <div className="form-group">
                          <input 
                            type="email" 
                            placeholder="Email" 
                            id="email" 
                            className="form-control p-4" 
                            value={this.state.email}
                            required
                            onChange={this.onChange}
                            error={errors.email}
                            tabindex="1"
                          />
                        </div>

                        <div className="form-group">
                          <input 
                            type="password" 
                            placeholder="Password" 
                            id="password" 
                            className="form-control p-4" 
                            value={this.state.password}
                            required
                            onChange={this.onChange}
                            error={errors.password}
                            tabindex="1"
                          />
                        </div>
                          
                         
                        <button className="btn button btn-block">Register</button>

                        </form>

                        <div className="row mt-4">
                          <div className="col-12 text-center">
                            <p className="text-muted mb-2">
                              <Link
                                to="/forgot"
                                className="text-muted font-weight-medium ml-1"
                              >
                                Forgot your password?
                              </Link>
                            </p>
                            <p className="text-muted mb-0">
                              Already have an account?
                              <Link
                                to="/"
                                className="text-muted font-weight-medium ml-1"
                              >
                                <strong>Login</strong>
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Register;
