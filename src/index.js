import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom';
import { Game } from "./pages/Game/Game";
import { Menu } from "./pages/Menu/Menu";
import { Home } from "./pages/Home/Home";
const routing = (
  <Router basename={'/src'}>
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/game" component={ Game } />
        <Route path="/menu" component={ Menu } />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
