import React, { ReactNode, useEffect } from 'react';
import Link from 'next/link';

import logo from '../images/AdaptableBlotter.png';
import PACKAGE from '../package.json';

import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import '../DemoPage/demo.css';

const version = PACKAGE.version;
const versiondate = new Date().toISOString().slice(0, 10);

export default () => {
  useEffect(() => {
    document.documentElement.classList.remove('ab--theme-dark');
    document.documentElement.classList.add('ab--theme-light');
  });

  return (
    <div>
      <div className="sidenav">
        <a href="">Home</a>
        <a href="aggridbasicdemo">Basic</a>
        <a href="aggridthemingdemo">Theme</a>
        <a href="aggriddashboarddemo">Dashboard</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div className="main">
        <h2>Home Page</h2>
        <i>
          Version:
          {version}&nbsp;&nbsp;({versiondate})
        </i>
        <p>Will explain about the demos</p>
        <img src={logo} width="225" height="132" />
      </div>
    </div>
  );
};
