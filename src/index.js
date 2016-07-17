import RepoList from './component/RepoList';
import Hello from './component/Hello';
import Navbar from './component/Navbar';
import ReactDom from 'react-dom'
import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'

// let data =[
//   {title:'www.baidu.com',desc:'百度链接'},
//
// ]

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Navbar}>
	    <Route path="cui" component={RepoList}/>
	    <Route path="hello" component={Hello}/>
    </Route>
  </Router>
,
  document.getElementById('app')
);	

