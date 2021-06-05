import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import el1 from '../../assets/third-screen/el1.svg'
import el2 from '../../assets/third-screen/el2.svg'
import logo from '../../assets/third-screen/logo.svg'


const index = () => {
  return (
    <div className="third-screen_container">

      <div className="container_header">
        <img className="header_logo" src={logo} alt=""/>

        <div className="header_text">
          <p>корки та крихти</p>
          <p>вулиця Лесі Українки, 27 Львів</p>
        </div>

      </div>

      <img className="container_el1" src={el1} alt=""/>
      <img className="container_el2" src={el2} alt=""/>

      <div className="container_footer">
        <div className="footer_text">
          <p>сендвіч з куркою та томатами</p>
          <p>Доступно 12.11.2020 - 24.12.2020</p>
          <p>Цільнозерновий хліб, смажена курочка, моцарела, помідор, сир гауда, листя салату та шпинат</p>
        </div>

        <Link to="/">
          <button className="footer_button">вибрати</button>
        </Link>
      </div>
    </div>
  );
};

export default index;