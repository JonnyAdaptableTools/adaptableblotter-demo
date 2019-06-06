import React, { useEffect } from 'react';

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
          The Adaptable Blotter is the most advanced and powerful HTML5 DataGrid
          Solution on the market today.
          <br />
          It provides, out of the box, all the functionality that financial and
          other advanced users require to be productive and efficient. And which
          usually needs to be built on a bespoke basis for each project.
          <br />
          AdaptableBlotter.JS sits on top of (and integrates with) a number of
          HTML5 vendor DataGrids both vendor and open source including the
          market-leading ag-Grid (which we are using for these demos).
          <br />
          Adaptable Blotter.JS is fully data-agnostic and can work with any data
          set, for any Desk, in any team, at any Location
          <br />
        </p>
        <p>
          <b>Functions</b> <br />
          The Adaptable Blotter contains a large number of functions each of
          which corresponds to a particular Grid action (e.g. Advanced Search,
          Bulk Update, Pie Chart etc.)
          <br />
        </p>
        <p>
          <b>The Demos</b> <br />
          When you release an application using the Adaptable Blotter you will
          typically ship it with Predefined Config - state that you have created
          at design time (eg. searches, layouts, styles, entitlements etc.)
          <br />
          The demos on this site each demonstrate one of the functions in the
          Adaptable Blotter.
          <br /> Each demo uses the excellent{' '}
          <a href=" https://www.ag-grid.com/" target="_blank">
            ag-Grid
          </a>{' '}
          as the underlying grid control, and dummy data from the famous
          Microsoft Northwind database (Orders table). <br />
          Each demo also includes a small amount of Predefined Config relevant
          to that function in order to illustrate the potential usage (which you
          can see printed out underneath the demo).
          <br />
        </p>

        <p>
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
        </p>
        <p>
          <b>Framework Wrappers</b>
          <br />
          All the examples in this demo use the 'vanilla' JavaScript version of
          the Adaptable Blotter.
          <br />
          However, for those who prefer to implement the tool using a JavaScript
          Framework / Library we provide 2 options: a{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360024888851-React-Wrapper"
            target="_blank"
          >
            React Wrapper
          </a>{' '}
          and a{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360024888791-Angular-Wrapper"
            target="_blank"
          >
            Angular Wrapper
          </a>
          .
          <br />
        </p>
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
          The Adaptable Blotter is free for evaluation use via the Community
          Edition (which is also available for use by charities, open-source
          projects and students in full time education). This gives full access
          to all features in the Adaptable Blotter but state cannot be saved or
          pre-loaded.
          <br />
          For all other usage a commerical annual licence must be purchased,
          which provides full state management capabilities. A commercial
          licence also guarantees quarterly updates together with full ongoing
          support.
          <br />
          We also provide support for more formal trials and POCs, and offer a
          range of tailored licence alternatives depending on desired usage.
          <br />
          To find out more about becoming an Adaptable Blotter user, please
          email{' '}
          <a href="mailto:sales@adaptabletools.com">Adaptable Tools Sales</a>.
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
          <br />
          We welcome - and value - the many contributions and pull requests we
          receive from the development community; if you want to get involved in
          the project please contact email{' '}
          <a href="mailto:support@adaptabletools.com">
            Adaptable Tools Support
          </a>
        </p>
      </div>
    </MainPage>
  );
};
