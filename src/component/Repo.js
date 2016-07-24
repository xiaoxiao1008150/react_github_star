import React from 'react';
import ReactDom from 'react-dom';

export default class Repo extends React.Component {

  render (){

    return(
      <div className="list">
         <h2><a href={this.props.data.html_url } target="_blank">{this.props.data.full_name}</a></h2>
         <p>{this.props.data.description}</p>
      </div>
    )
  }
}
