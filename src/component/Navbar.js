import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'


export default class Navbar extends React.Component {
  render (){
    return (
    	<div>
    	  <nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			  
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li onClick={this.handleClick}><Link to="/"> 首页</Link></li>
			        <li><Link to="cui">git排名</Link></li>
			        <li><Link to="hello">其他</Link></li>
			      </ul>
			    
			      
			    </div>
			  </div>
		  </nav>
		  {this.props.children}
		</div>

    	)
  }
}
