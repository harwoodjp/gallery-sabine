import normalize from "normalize.css"
import scss from "../css/style.scss"
import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom'

import Exhibition from "./components/Exhibition"
import Library from "./components/Library"

ReactDOM.render(
	<Router history={browserHistory}>
		<div>
      <Route exact path="/" component={Exhibition}/>
      <Route path="/archive" component={Library}/>
    </div>
    </Router>,
	document.getElementById("app")
);
