import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import LaunchScreen from './screens/LaunchScreen';
import Setup from './screens/Setup';
import Signup from './screens/Signup';
import Home from './screens/Home';
import DiscountItem from './screens/DiscountItem';
import reportWebVitals from './reportWebVitals';

import './index.scss';

// const loggedIn = true;
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* <Route exact path="/" render={() => (
          true ? (
            <Redirect to="/launch"/>
          ) : (
            <Redirect to="/launch"/>
          )
        )}/> */}

        {/* <Route exact path="/launch">
          <Redirect to="/setup" />
        </Route> */}

        <Route path="/" component={LaunchScreen} exact />
        <Route path="/setup" component={Setup} // isLoggedin={true} name={'Anna'} true -> home // false -> three swipes
        />
        <Route path="/signup" component={Signup} />

        <Route path="/discounts" component={Home} />
        <Route path="/discount/:id" component={DiscountItem} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
