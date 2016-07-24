import React from 'react';
import ReactDom from 'react-dom';

export default class IndexPage extends React.Component {

  render (){
    return(
      <div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <img src="http://www.molecularecologist.com/wp-content/uploads/2013/11/github-logo.jpg"/>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <h3>特点</h3><br/>
          <ul className="list-group">
            <li className="list-group-item">使用React 组件实现</li>
            <li className="list-group-item">运用axios发送请求</li>
            <li className="list-group-item">运用react-router实现路由</li>
            <li className="list-group-item">调用Github api</li>
            <li className="list-group-item">使用Bootstrap样式</li>
          </ul>
        </div>
      </div>
    )
  }
}
