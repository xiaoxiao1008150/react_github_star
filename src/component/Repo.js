import React from 'react';
import ReactDom from 'react-dom';

export default class Repo extends React.Component {
  render (){
    return(
      <div>
         <h2><a href={this.props.data.full_name}>{this.props.data.description}</a></h2>
         <p>{this.props.data.html_url}</p>
      </div>
    )
  }
}
