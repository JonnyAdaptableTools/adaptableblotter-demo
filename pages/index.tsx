import React, { useEffect } from 'react';

import logo from '../images/AdaptableBlotter.png';
import PACKAGE from '../package.json';

import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

import MainPage from '../src/MainPage';

const version = PACKAGE.version;
const versiondate = new Date().toISOString().slice(0, 10);

export default () => {
  useEffect(() => {
    document.documentElement.classList.remove('ab--theme-dark');
    document.documentElement.classList.add('ab--theme-light');
  });

  return (
    <MainPage pageTitle="AdaptableBlotter Demos">
      <div style={{ padding: 20 }}>
        <h2>Home Page</h2>
        <i>
          Version:
          {version}&nbsp;&nbsp;({versiondate})
        </i>
        <p>Will explain about the demos</p>
        <img src={logo} width="54" height="34" />
      </div>
    </MainPage>
  );
};
