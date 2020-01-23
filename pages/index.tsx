import React from 'react';

import PACKAGE from '../package.json';

import MainPage from '../src/MainPage';

const version = PACKAGE.version;
const versiondate = new Date().toISOString().slice(0, 10);

export default () => {
  return (
    <MainPage pageTitle="AdapTable Demos">
      <div
        style={{
          padding: 21,
        }}
      >
        <h3>AdapTable Demos</h3>
        <i>
          Version:&nbsp;
          {version}&nbsp;&nbsp;({versiondate})
        </i>
        <br />
        <br />
        <p>
          <h3>
            AdapTable is the most advanced and powerful HTML5 Data Management
            Solution on the market today.
          </h3>
          AdapTable provides, out of the box, all the functionality that
          financial and other advanced users require to be productive and
          efficient. And which usually needs to be built on a bespoke basis for
          each project.
          <br />
          AdapTable sits on top of (and integrates with) a number of HTML5
          vendor DataGrids both vendor and open source.
          <br />
          AdapTable is fully data-agnostic and can work with any data set, for
          any Desk, in any team, at any Location
          <br />
        </p>
        <p>
          <b>Functions</b> <br />
          AdapTable contains a large number of 'functions' each of which
          corresponds to a particular DataGrid use case (e.g. Advanced Search,
          Bulk Update, Pie Chart etc)
        </p>
        <p>
          This site contains a bespoke demo for most of the functions in
          AdapTable.
        </p>
        <p>
          <b>The Demos</b> <br />
          There are many demos on this site each of which illustrate an
          AdapTable function, or an <i>AdaptableOption</i>, a UI feature or a
          piece of admin or advanced functionality.
          <br />
          You can see a full list of the available demos{' '}
          <a href="/AdaptableDemoList" target="_self">
            here
          </a>
          .
        </p>
        <p>
          <b>Predefined Config</b> <br />
          When you release an application using AdapTable you will typically
          ship it with{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754817-Predefined-Config"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          - state that you have created at design time (eg. searches, layouts,
          styles, entitlements etc.)
          <br />
          You will also set up the Options you need for your grid instance using
          the{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754498-Adaptable-Options"
            target="_blank"
          >
            Adaptable Options
          </a>{' '}
          object.
          <br />
          Each of these demos includes a small amount of Predefined Config
          relevant to that function in order to illustrate the potential usage,
          and adds non-default <i>AdaptableOptions</i> that are required (you
          can see both of these printed out underneath the demo).
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
          with AdapTable), and dummy data from the famous Microsoft Northwind
          database (Orders table). <br />
        </p>

        <p>
          <b>Integration</b>
          <br />
          It is trivial to set up AdapTable and can be done with a single line
          of code.
          <br />
          See our{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754578-Integration"
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
          AdapTable.
          <br />
          However, for those who prefer to implement the tool using a JavaScript
          Framework / Library we provide 2 options:
        </p>
        <ul>
          <li>
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754997-React-Wrapper"
              target="_blank"
            >
              React Wrapper
            </a>
          </li>
          <li>
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755017-Angular-Wrapper"
              target="_blank"
            >
              Angular Wrapper
            </a>
          </li>
        </ul>

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
          <b>Version</b>
          <br />
          The demos on this site use Version 6 of AdapTable. This contains some
          big changes (and improvements) from previous versions. If you are new
          to Version 6 please read the{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/upgrade-guide.md"
            target="_blank"
          >
            Upgrade Guide
          </a>
          .
        </p>
        <p>
          <b>Github Examples</b>
          <br />
          The AdapTable dev team have produced some custom examples to fit
          particular use cases that our users have requested. <br />
          These are found on Github. These include:{' '}
        </p>
        <ul>
          <li>
            <a
              href="https://github.com/AdaptableTools/example-adaptableblotter-angular-aggrid"
              target="_blank"
            >
              Using the Angular wrapper
            </a>{' '}
          </li>
          <li>
            <a
              href="https://github.com/AdaptableTools/example-adaptableblotter-ipushpull-integration"
              target="_blank"
            >
              iPushPull Integration
            </a>{' '}
          </li>
          <li>
            <a
              href="https://github.com/AdaptableTools/example-adaptableblotter-with-parceljs"
              target="_blank"
            >
              Using ParcelJS to build a minified file
            </a>{' '}
          </li>
        </ul>

        <p>
          <b>Licence and Pricing</b>
          <br />
          AdapTable requires a commerical licence sold on an annual basis. This
          includes guaranteed quarterly (often monthly) updates together with
          full ongoing support.
          <br />
          We provide a range of licence options to suit each use case,
          including: <b>End User</b>, <b>Team</b>, <b>Universal</b>,{' '}
          <b>Developer</b> and <b>Trial</b>.
          <br />
          To find out more about various options on offer and how to join the
          AdapTable community, please{' '}
          <a href="mailto:sales@adaptabletools.com">
            email Adaptable Tools Sales
          </a>
          .
        </p>
        <p>
          <b>Grid Gurus</b>
          <br />
          When developing AdapTable, the Adaptable Tools dev team learned
          everything there is to know (and more!) about all the DataGrids that
          we support, particularly the excellent ag-Grid.
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
