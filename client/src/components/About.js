import React from 'react';
// import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const cenStyle = {
  textAlign: 'center',
  fontWeight: 'bold'
};
const paraStyle = {
  textAlign: 'center',
  textJustify: 'inter-word',
  fontSize: '25px',
  paddingLeft: '50px',
  paddingRight: '50px'
};

// import '../../public/images/'
const About = props => {
  return (
    <div className="container-fluid p-0">
      <div className="jumbotron p-0" style={{ height: '100vh' }}>
        <h1 className="display-4" style={cenStyle}>
          Housing Society Management
        </h1>

        <hr className="my-4" />

        <p style={paraStyle}>
          Welcome to Housing Society Management. An online society and
          accounting management portal. A unique platform which can be used by
          Cooperative Housing Societies / Resident Welfare Association (RWA) /
          Apartment Association etc. This platform expands transparency and aims
          to strengthen the bond among members and Managing Committee.
        </p>
        <br></br>
        <p style={paraStyle}>
          It is one of the best integrated solutions for Housing Society
          accounting and billing. Our Housing Society Management portal can
          accommodate all kinds of maintenance bill settings as may be required
          by the appartment owners. It’s an automated accounting and billing
          portal which promotes digitization of complete books of account.
        </p>
      </div>
    </div>
  );
};

export default About;
