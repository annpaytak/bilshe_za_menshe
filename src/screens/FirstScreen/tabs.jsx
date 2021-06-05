import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';

const TabPanel = ({  children, value, index }) => {
  return (
    <div role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    // aria-labelledby={`simple-tab-${index}`}
    >
      <div className="container_header">
        <h1>Виберіть</h1>
        <h1>категорії</h1>
      </div>

      <div className="container_list">
        <button>
          <span>супермаркети</span>
          <span>та гіпермаркети</span>
        </button>
        <button>кафе</button>
        <button>ресторани</button>
        <button>
          <span>крамниці</span>
          <span>крафтових</span>
          <span>продуктів</span>
        </button>
        <button>кав’ярні</button>
        <button>пекарні</button>
      </div>

      <Link to="/second">
        <button className="container_button">вибрати</button>
      </Link>
    </div>
  )
}

const FirstScreen = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="first-screen_container">
      <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Улюблене" />
        <Tab label="Категорії" />
        <Tab label="Знижки" />
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0} />
    <TabPanel value={value} index={1} />
    <TabPanel value={value} index={2} />

      {/* <nav className="container_nav-list">
        <button>Улюблене</button>
        <button>Категорії</button>
        <button>Знижки</button>
      </nav> */}
    </div>
  );
};

export default FirstScreen;