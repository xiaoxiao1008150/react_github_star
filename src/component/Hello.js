import React from 'react';
import ReactDom from 'react-dom';
import Repo from './Repo';
import axios from 'axios';
import Loading from 'react-loading'
import { Router, Route, Link, browserHistory } from 'react-router'


export default class Hello extends React.Component {
  render (){
    return <h1>Hello</h1>
  }
}
