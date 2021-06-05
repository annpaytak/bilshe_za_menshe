import React, {useState, useEffect} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const FirstScreen = () => {
  const [values, setValues] = useState([]);
  const valuesTexts = [
    ['супермаркети', 'та гіпермаркети'],
    'кафе',
    'ресторани',
    ['крамниці', 'крафтових', 'продуктів'],
    'кав’ярні',
    'пекарні'
  ];

  const handleValue = index => {
    // let tmp = values;
    if (!values.includes(index)) {
      // tmp.push(index);
      // console.log(tmp, index);
      setValues([index, ...values]);
    } else {
      setValues(values.filter(el => el !=index));
    }
  }

  useEffect(() => {
    console.log(values);
  }, [values])

  return (
    <div className="first-screen_container">
      <nav className="container_nav-list">
        <button>Улюблене</button>
        <button>Категорії</button>
        <button>Знижки</button>
      </nav>

      <div className="container_header">
        <h1>Виберіть</h1>
        <h1>категорії</h1>
      </div>

      <div className="container_list">
        {valuesTexts.map((el, index) => (
          <button key={index} className={values.includes(index) ? "buttonPressed" : "buttonStatic"} onClick={() => handleValue(index)}>
            {Array.isArray(el) ? (
              <>
                <span>супермаркети</span>
                <span>та гіпермаркети</span>
              </>
            ) : (<>{el}</>)}
          </button>
        ))}
        
        {/* <button>кафе</button>
        <button>ресторани</button>
        <button>
          <span>крамниці</span>
          <span>крафтових</span>
          <span>продуктів</span>
        </button>
        <button>кав’ярні</button>
        <button>пекарні</button> */}
      </div>

      <Link to="/second">
        <button className="container_button">вибрати</button>
      </Link>
    </div>
  );
};

export default FirstScreen;