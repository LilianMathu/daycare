import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="/navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        <a className="navbar-brand" href="/">Grow n' Play</a>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a href="/routine">Routine</a></li>
          <li><a href="/attendance">Attendance</a></li>
          <li><a href="/meals">Meals</a></li>
          <li><a href="/monitoring">Monitoring</a></li>
          <li><a href="/chat">Chat</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/admin">Admin</a></li>

        </ul>
      </div>
    </div>
  </nav>
  

    );
            };
        
    export default Navbar;