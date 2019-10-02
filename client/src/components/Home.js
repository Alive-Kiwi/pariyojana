import React from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import Background from '../components/images/home.png';
const cenStyle = {
  textAlign: 'center'
};

var sectionStyle = {
  width: '100%',
  height: '100vh',
  /*Just to imitate wide screen*/
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`
};

const backStyle = {
  backgroundColor: 'rgba(192,192,192,0.8)',
  paddingLeft: '30px',
  height: '270px'
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: ''
    };
  }

  handleSubmitUser = e => {
    e.preventDefault();
    const formData = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post('http://localhost:3005/users/login', formData).then(response => {
      if (response.data.errors) {
        this.setState(() => ({
          errors: response.data.errors,
          password: ''
        }));
      } else {
        // write this to localStorage
        const tokenData = jwt_decode(response.data.token);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', tokenData.roles);
        // redirect to contacts page
        this.props.history.push('/');
        // change the navigation links = update the state of isAuthenticated in the parent component
        this.props.handleAuthentication(true, tokenData.roles);
      }
    });
  };

  handleChange = e => {
    e.persist();
    this.setState(() => ({
      [e.target.name]: e.target.value
    }));
  };

  render() {
    // console.log(this.props)
    return (
      <div className="container-fluid">
        <div className="row" style={cenStyle}>
          <div className="col-12">
            <hr className="my-4" />
            <h1 className="display-4">Housing Management Service</h1>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row" style={sectionStyle}>
          <div className="col-md-2 offset-5">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <form onSubmit={this.handleSubmitUser.bind(this)}>
              <div style={backStyle}>
                <div className="row">
                  <h2>Login </h2>
                </div>
                {this.state.errors && (
                  <p className="alert alert-danger">{this.state.errors}</p>
                )}
                <div className="form-group row">
                  <label>
                    Email
                    <input
                      type="text"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Email"
                    />
                  </label>
                </div>

                <div className="form-group row">
                  <label>
                    Password
                    <input
                      type="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                      className="form-control"
                      placeholder="Password"
                    />
                  </label>
                </div>

                <div className="row">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
