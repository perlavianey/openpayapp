import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Routes from './Routes';
import './index.css'
import logo from './assets/img/logo.png'


class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <img src={logo} className="logo" alt='openPay-logo'/>
        </header>
        <section className="content">
          <Routes/>
        </section>
        <footer className="footer">
          <div className='footerContent'>
            <p>Developed by Perla Vianey</p>
            <a target='_blank' href="https://www.linkedin.com/in/pvramosr/"><i className="fab fa-linkedin"></i></a>
            <a target='_blank' href="https://github.com/perlavianey"><i className="fab fa-github-alt"></i></a>
          </div>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);