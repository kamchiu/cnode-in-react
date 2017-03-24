import React from 'react';
import AppBar from '../../components/app-bar/AppBar.jsx';

const Layout = (props) => (
  <div>
    <AppBar />
    {props.children}
  </div>
);

export default Layout;
