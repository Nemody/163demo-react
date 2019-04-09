import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './HomeNav.styl';
export default class HomeNav extends Component {
    static propTypes = {
      navList: PropTypes.array.isRequired
    };

    render(){
      const {navList} =this.props;
      return (
        <section className="nav-container">
          <ul className="nav-box">
            {
              navList.map((nav, index) => (
                <li className="nav-item"  key={index}>
                  <img src={nav.picUrl} alt="导航列表" />
                  <span>{nav.text}</span>
                </li>)
              )
            }
        </ul>
    </section>
        )
    }
}