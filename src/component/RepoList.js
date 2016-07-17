import React from 'react';
import ReactDom from 'react-dom';
import Repo from './Repo';
import axios from 'axios';
import Loading from 'react-loading'
import { Router, Route, Link, browserHistory } from 'react-router'


export default class RepoList extends React.Component {
  state = {
    // full_name:"",
    // desc:"",
    // url:"",
    rep:null
  }
  componentWillMount(){

  }
  componentDidMount(){
    // console.log('this',this)
    axios.get("https://api.github.com/search/repositories?q=stars:>1+language:javascript&sort=stars&order=desc")
         .then( function (response) {
                 this.setState({
                    rep:response.data.items,
                  })
    }.bind(this))
    

  }

  render (){
    
    if(this.state.rep == null){
      // console.log("loading")
      return  <div style={{marginTop: "200px", width:"64px",marginRight:"auto",marginLeft:"auto"}}><Loading type='spokes' color='black'/></div>
    }else{
      return(
        <div>
          {this.state.rep.map(function(item){
            return(<div><Repo data={item} /></div>)
          })}
    


        </div>
      )
    }
      

        
      


     // return arr
      
    
  }
}
