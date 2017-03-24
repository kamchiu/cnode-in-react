import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import './AppBar.css';

class AppBar extends Component {
  render() {
    return (
      <div className="header">
        <button className="menu-btn">
          <svg viewBox="0 0 24 24" className="left-menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
        </button>
        <h1 className="app-title">CNodejs 中文社区</h1>
      </div>
    );
  }
}

export default AppBar;
