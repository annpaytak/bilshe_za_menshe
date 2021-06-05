import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from '../../assets/second-screen/logo.png'
import el from '../../assets/second-screen/el.svg'

const SecondScreen = () => {
  const [blockHeight, setBlockHeight] = useState(406);

  const handleScroll = event => {
    // let scrollTop = window.scrollY,
    //   minHeight = 30,
    //   height = Math.max(minHeight, 200 - scrollTop);
      setBlockHeight(blockHeight-10);

      console.log(event.target.clientHeight);
  }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   }
  // }, [])

  return (
    <div className="second-screen_container">
      <div className="container_back" style={{height: blockHeight}}></div>

      <img className="container_el" src={el} alt=""/>

      <div className="container_content" onScroll={(e) => handleScroll(e)}>
        <img className="content_logo" src={logo} alt=""/>

        <div className="content_header">
          <h1>уся випічка</h1>
          <h1>в сільпо</h1>
        </div>

        <p className="content_date">Доступно 12.11.2020 - 24.12.2020</p>
        
        <p className="content_text">Знижка розповсюджується на усю випічку власного виробництва: 
        хліб, булочки, багети, слойки, пиріжки та ще безліч усього безпосередньо в супермаркетах.
        "Ми щодня печемо хліб, булочки, багети, слойки, пиріжки та ще безліч усього безпосередньо 
        в супермаркетах. Наша гаряча випічка продається тільки в «Сільпо». Деякі рецепти ми запозичили 
        у французів, а щодо деяких радилися з іноземними пекарями. Власна пекарня «Сільпо» приймає великі замовлення."</p>
      </div>

      <Link to="/third">
        <button className="container_button">вибрати</button>
      </Link>
    </div>
  );
};

export default SecondScreen;