import React from "react";
import {NavLink} from 'react-router-dom'


class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  
  
  render () {
    let header = this.props.header;
    return (
      
      <header className="header">
        <ul>
          {
            header.map(el => {
              return <li key={el.id}><NavLink to={el.href}>{el.title}</NavLink></li>
            })
          }
        </ul>
      </header>
    );
  }
}

export default Header