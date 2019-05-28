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
        <h3>Adaptable Blotter Demos</h3>
        <i>
          Version:&nbsp;
          {version}&nbsp;&nbsp;({versiondate})
        </i>
        <br />
        <br />
        <p>
          <b>Background</b> <br />
          The Adaptable Blotter is the market leading HTML5 DataGrid Solution.
          <br />
          It provides, out of the box, all the functionality that financial and
          other advanced users require to be productive and efficient. And which
          usually needs to be built on a bespoke basis for each project.
          <br />
          AdaptableBlotter.JS can be integrated with a number of different
          underlying HTML5 grids, both vendor and open source.
          <br />
          AdaptableBlotter.JS works with any dataset, any Grid type, any Desk,
          and in any Location
          <br />
          Adaptable Blotter.JS is fully data-agnostic and can work with any data
          set you provide it with.
          <br />
          <p>
            It sits on top of (and integrates with) a number of HTML5 vendor
            DataGrids including ag-Grid.{' '}
          </p>
        </p>
        <b>Integration</b>
        <br />
        It is trivial to set up the Adaptable Blotter and can be done with a
        single line of code.
        <br />
        See this{' '}
        <a href="https://yg0we.codesandbox.io/" target="_blank">
          Live Example
        </a>{' '}
        and download it and experiment with it yourself using this{' '}
        <a
          href="https://codesandbox.io/s/adaptableblotterbasic-yg0we"
          target="_blank"
        >
          Sandbox
        </a>
        .
        <br />
        <p>
          <b>Help</b>
          <br />
          If you require further information please visit our{' '}
          <a href="http://adaptabletools.com" target="_blank">
            Website
          </a>{' '}
          or use the{' '}
          <a href="https://adaptabletools.zendesk.com/hc/en-us" target="_blank">
            Online Help
          </a>
          .
        </p>
        <p>
          <b>Licence and Pricing</b>
          <br />
          The Adaptable Blotter is free for evaluation use. We also seek to make
          it available for use by charities, open-source projects and students
          in full time education.
          <br />
          For all other usage and, access to the full range of features, an
          annual licence must be purchased. This includes monthly updates
          together with ongoing support.
          <br />
          We also provide support for more formal trials, and offer a range of
          licence alternatives depending on desired usage.
          <br />
          To find out more about becoming an Adaptable Blotter user, please
          email{' '}
          <a href="mailto:support@adaptabletools.com">
            Adaptable Tools Support
          </a>
          .
        </p>
        <p>
          <b>Source Code</b>
          <br /> The Repository for the AdaptableBlotter.JS Demo is located in{' '}
          <a
            href="https://github.com/jonnyadaptabletools/adaptableblotter-demo"
            target="_blank"
          >
            Github
          </a>
          .
        </p>
      </div>
    </MainPage>
  );
};
