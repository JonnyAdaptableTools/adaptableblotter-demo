import React, { useEffect } from 'react';

import PACKAGE from '../package.json';

import '@adaptabletools/adaptableblotter/index.css';

import MainPage from '../src/MainPage';

const version = PACKAGE.version;
const versiondate = new Date().toISOString().slice(0, 10);

export default () => {
  return (
    <MainPage pageTitle="AdaptableBlotter Demos">
      <div
        style={{
          padding: 21,
        }}
      >
        <h3>Adaptable Blotter Demos</h3>
        <i>
          Version:&nbsp;
          {version}&nbsp;&nbsp;({versiondate})
        </i>
        <br />
        <br />
        <p>
          The Adaptable Blotter is the most advanced and powerful HTML5 DataGrid
          Solution on the market today.
          <br />
          It provides, out of the box, all the functionality that financial and
          other advanced users require to be productive and efficient. And which
          usually needs to be built on a bespoke basis for each project.
          <br />
          AdaptableBlotter.JS sits on top of (and integrates with) a number of
          HTML5 vendor DataGrids both vendor and open source.
          <br />
          Adaptable Blotter.JS is fully data-agnostic and can work with any data
          set, for any Desk, in any team, at any Location
          <br />
        </p>
        <p>
          <b>Functions</b> <br />
          The Adaptable Blotter contains a large number of 'functions' each of
          which corresponds to a particular DataGrid use case (e.g. Advanced
          Search, Bulk Update, Pie Chart etc.) <br />
          This site contains a bespoke demo for most of the functions in the
          Adaptable Blotter.
          <br />
        </p>
        <p>
          <b>The Demos</b> <br />
          When you release an application using the Adaptable Blotter you will
          typically ship it with{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029289152-Predefined-Config"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          - state that you have created at design time (eg. searches, layouts,
          styles, entitlements etc.)
          <br />
          You will also set up the Options you need for your Blotter using the{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/categories/360001777412-Blotter-Options"
            target="_blank"
          >
            Adaptable Blotter Options
          </a>{' '}
          object.
          <br />
          Each of these demos includes a small amount of Predefined Config
          relevant to that function in order to illustrate the potential usage,
          and adds non-default Blotter Options that are required (you can see
          both of these printed out underneath the demo).
          <br />
          The demos use the excellent{' '}
          <a href="https://www.ag-grid.com/" target="_blank">
            ag-Grid
          </a>{' '}
          as the underlying grid control (which{' '}
          <a
            href="https://medium.com/ag-grid/getting-more-from-your-datagrid-introducing-adaptable-blotter-2be5debd7e46"
            target="_blank"
          >
            integrates very well
          </a>{' '}
          with the Adaptable Blotter), and dummy data from the famous Microsoft
          Northwind database (Orders table). <br />
        </p>

        <p>
          <b>Integration</b>
          <br />
          It is trivial to set up the Adaptable Blotter and can be done with a
          single line of code.
          <br />
          See our{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/sections/360003854892-Integration"
            target="_blank"
          >
            Integration Help Pages
          </a>{' '}
          for more information and also this{' '}
          <a href="https://yg0we.codesandbox.io/" target="_blank">
            Live Example
          </a>{' '}
          (which you can download and experiment with it yourself using this{' '}
          <a
            href="https://codesandbox.io/s/adaptableblotterbasic-yg0we"
            target="_blank"
          >
            Sandbox
          </a>
          ).
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
          The Adaptable Blotter requires a commerical licence sold on an annual
          basis. This includes guaranteed quarterly (often monthly) updates
          together with full ongoing support.
          <br />
          We provide a range of licence options to suit each use case,
          including: <b>End User</b>, <b>Team</b>, <b>Universal</b>,{' '}
          <b>Developer</b> and <b>Trial</b>.
          <br />
          To find out more about various options on offer and how to join the
          Adaptable Blotter community, please email{' '}
          <a href="mailto:sales@adaptabletools.com">Adaptable Tools Sales</a>.
        </p>
        <p>
          <b>Grid Gurus</b>
          <br />
          When developing the Adaptable Blotter, the Adaptable Tools dev team
          learned everything there is to know (and more!) about all the
          DataGrids that we support, particularly the excellent ag-Grid.
          <br />
          We researched all the multiple set up and configuration options, the
          different ways to get data into the grid, the various display modes,
          whether to use server or client, when to group, aggregate or pivot,
          how best to update data and much, much more. <br />
          Our{' '}
          <b>
            <i>Grid Guru Service</i>
          </b>{' '}
          puts that unrivalled knowledge to good use by working with you when
          you set up your DataGrid to ensure that you are making the right
          decisions for your project and requirements. <br />
          We will work (on-site if you prefer) to set up your Grid in a bespoke
          fashion so that is ideally aligned with your use cases. This is
          particularly important at the start of the project when making the
          right architectural and design decisions can save you lots of money,
          time and support heartache down the line...
          <br />
        </p>
        <p>
          <b>Contibuting to our Source Code</b>
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
