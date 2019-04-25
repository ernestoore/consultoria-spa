import React, {Component, Fragment} from 'react';
import img from '../../images/office.jpeg';
import logo from '../../images/Logo.jpeg';
import {Link} from 'react-router-dom';
import { HashLink as Linked } from 'react-router-hash-link';


class Header extends Component {
render(){
  return (
    <React.Fragment>
    <header>
    <div className ='banner'>
    <img src={logo} className="logoImage" alt="logo"/>
    </div>
    <div className="banner">
    <ul>
    <li className="first">
    <Link to="/">Inicio</Link>
    </li>
    <li>
    <Linked to="/#two">Servicios</Linked>
    </li>
    <li className="last">
    <Linked to="/#three" href="three">Contacto</Linked>
    </li>
    </ul>
    </div>
    </header>

    </React.Fragment>

  );
}
}
export default Header;
