import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Detail from "./container/detail/index"
import Error from "./container/404page/index"
import { lazy, Suspense } from 'react';

const ErrorPage = lazy(() => import('./container/404page/index'))

function PrivateRoute() {
  const auth = false;
  return (
    auth ? <Detail/> :
    <div>You don't have permision</div>
  )
}

ReactDOM.render(
  <Router>
    <div>
      <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/detail/:id" component={Detail}/>
            <PrivateRoute path="/profile"/>
            <Redirect from="/home" to ="/"/>
            <Redirect from="/homepage" to ="/"/>
            <Route component={ErrorPage}/>
          </Switch>
        </Suspense>
    </div>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
