import RepoList from './component/RepoList';
import Hello from './component/Hello';
import Navbar from './component/Navbar';
import IndexPage from './component/IndexPage';
import ReactDom from 'react-dom'
import React from 'react'
import { IndexRoute, Router, Route, Link, browserHistory } from 'react-router'

// let data =[
//   {title:'www.baidu.com',desc:'百度链接'},
//
// ]

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Navbar}>
      <IndexRoute component={IndexPage} />
	    <Route path="cui" component={RepoList}/>
	    <Route path="hello" component={Hello}/>
    </Route>
  </Router>
,
  document.getElementById('app')
);
