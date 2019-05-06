import React, { ReactNode } from 'react';
import Link from 'next/link';

import logo from '../images/AdaptableBlotter.png';
import PACKAGE from '../package.json';

import 'adaptableblotter/base.css';
import 'adaptableblotter/themes/light.css';

const version = PACKAGE.version;
const versiondate = new Date().toISOString().slice(0, 10);

const LinkButton = ({
  href,
  children,
  prefetch
}: {
  href: string;
  prefetch: boolean;
  children: ReactNode;
}) => {
  return (
    <Link href={href} prefetch={prefetch}>
      <button style={{ height: 45, width: 150 }} className="btn btn-default">
        {children}
      </button>
    </Link>
  );
};

export default () => {
  return (
    <div className="container-fluid">
      <table>
        <tr>
          <td>
            <img src={logo} width="225" height="132" />
          </td>
          <td style={{ alignItems: 'baseline' }}>
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
          </td>

          <td>
            <h2>AdaptableBlotter.JS Demos</h2>
            <i>
              Version:
              {version}&nbsp;&nbsp;({versiondate})
            </i>
          </td>
        </tr>
      </table>
      <p>
        <b>The Adaptable Blotter</b>
        <br /> AdaptableBlotter.JS is a powerful DataGrid add-on that provides,
        out of the box, all the functionality that financial and other advanced
        users require to be productive and efficient. And which usually needs to
        be built on a bespoke basis for each project.
        <br />
        AdaptableBlotter.JS can be integrated with a number of different
        underlying HTML5 grids, both vendor and open source.
        <br />
        AdaptableBlotter.JS works with any dataset, any Grid type, any Desk, and
        in any Location
        <br />
        Adaptable Blotter.JS is fully data-agnostic and can work with any data
        set you provide it with.
        <br />
      </p>
      <b>Basic Demo</b>
      <br />
      This demo contains 2 instances of AdaptableBlotter.JS hosting dummy Sales
      Orders data from Microsoft's famous Northwind database:
      <li>
        the <b>ag-Grid</b> (in our opinion by the far best HTML5 GridControl on
        the market today and very highly recommended){' '}
      </li>
      <li>
        {' '}
        the <b>Hypergrid</b> (the best of the canvas-based grids){' '}
      </li>
      <p />
      <table style={{ borderSpacing: '20px 5px', borderCollapse: 'separate' }}>
        <tr>
          <td>
            <LinkButton prefetch href={'/aggridbasicdemo'}>
              <h5>ag-Grid Demo</h5>
            </LinkButton>
          </td>
          <td>
            <LinkButton href="/hypergridbasicdemo">
              <h5>Hypergrid Demo</h5>
            </LinkButton>
          </td>
        </tr>
      </table>
      <br />
      <b>Config / Theming Demo</b>
      <br />
      You can ship the applications you create using the Adaptable Blotter with{' '}
      <b>
        <a
          href="https://adaptabletools.zendesk.com/hc/en-us/sections/360003312052-Predefined-Config"
          target="_blank"
        >
          Predefined Configuration
        </a>
      </b>
      .
      <br />
      These are styles, searches, reports, layouts etc. that you create at
      design time so they are ready for your users to use from day 1.
      <br />
      Note: Predefined Configuration also includes permissions: it allows you to
      ship the Adaptable Blotter to your users with the{' '}
      <a
        href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168831-Permissions"
        target="_blank"
      >
        Entitlements
      </a>
      and permissions you need to ensure users only have access to the
      functionality they require.
      <br />
      <li>
        The <b>config</b> demo runs ag-Grid using the same data as in the basic
        demo above but with some additional predefined configuration.
      </li>
      <li>
        The <b>theming</b> demo runs the Blotter with dark theme set up (the
        Blotter ships with 2 themes - light and dark - but you can add any{' '}
        <a
          href="https://adaptabletools.zendesk.com/hc/en-us/articles/360025111951#UUID-aceb63bd-f5ff-ad17-157d-76a102529864"
          target="_blank"
        >
          Themes
        </a>{' '}
        you want). You can also set up the{' '}
        <a
          href="https://adaptabletools.zendesk.com/hc/en-us/sections/360003890091-Look-and-Feel"
          target="_blank"
        >
          Look and Feel
        </a>{' '}
        of the Blotter to use your own{' '}
        <a
          href="https://adaptabletools.zendesk.com/hc/en-us/articles/360024815132#UUID-b2f2bfab-af7e-3b93-e530-bdfddc892d5e"
          target="_blank"
        >
          Styles
        </a>
        .
      </li>
      <p />
      <table style={{ borderSpacing: '20px 5px', borderCollapse: 'separate' }}>
        <tr>
          <td>
            <LinkButton href="/aggridconfigdemo" prefetch>
              <h5>Config Demo</h5>
            </LinkButton>
          </td>
          <td>
            <LinkButton href="/aggridthemingdemo" prefetch>
              <h5>Theming Demo</h5>
            </LinkButton>
          </td>
        </tr>
      </table>
      <br />
      <b>Charting Demos</b>
      <br />
      We have teamed up with{' '}
      <a
        href="https://www.infragistics.com/products/ignite-ui-react/react/components/categorychart.html"
        target="_blank"
      >
        Infragistics
      </a>{' '}
      to offer Charting.
      <li>
        the <b>Basic Charts</b> demo runs Hypergrid using the same data as in
        the basic demo above but with some prebuilt charts we have added.
      </li>
      <li>
        the <b>World Stats Charts</b> demo runs ag-Grid using some country dummy
        data and 4 charts (as part of predefined config).
      </li>
      <p />
      <table style={{ borderSpacing: '20px 5px', borderCollapse: 'separate' }}>
        <tr>
          <td>
            <LinkButton href="/hypergridchartingdemo" prefetch>
              <h5>Basic Charts</h5>
            </LinkButton>
          </td>
          <td>
            <button
              style={{ height: 45, width: 150 }}
              className="btn btn-default"
              onClick={() =>
                (location.href = 'aggridworldstatschartingdemo.html')
              }
            >
              <h5>World Stats Charts</h5>
            </button>
          </td>
        </tr>
      </table>
      <p />
      <b>Grouping Demo</b>
      <br />
      AdaptableBlotter.JS does not provide grouping or aggregation capabilities
      itself. But we do guarantee that whre the underlying grid offers these
      capabilities, then they will run as normal when the Adaptable Blotter
      add-on is installed.
      <br /> Click button below to launch ag-Grid in full grouping and
      aggreagation mode and see how all the Adaptable Blotter functions continue
      to work even when you have multiple columns groups, row groups and
      aggregated columns.
      <table style={{ borderSpacing: '20px 5px', borderCollapse: 'separate' }}>
        <tr>
          <td>
            <button
              style={{ height: 45, width: 150 }}
              className="btn btn-default"
              onClick={() => (location.href = 'aggridgroupingdemo.html')}
            >
              <span>
                <h5>Grouping Demo</h5>
              </span>
            </button>
          </td>
        </tr>
      </table>
      <p />
      <b>2 Grid Demo</b>
      <br />
      This demo shows that you can have more than one Adaptable Blotter on the
      same page and each will have its own DataSet and configuration.
      <br />
      <table style={{ borderSpacing: '20px 5px', borderCollapse: 'separate' }}>
        <tr>
          <td>
            <button
              style={{ height: 45, width: 150 }}
              className="btn btn-default"
              onclick={() => (location.href = 'aggridmultiplegriddemo.html')}
            >
              <span>
                <h5>2 Grid Demo</h5>
              </span>
            </button>
          </td>
        </tr>
      </table>
      <p />
      <b>Performance</b>
      <br />
      <p>
        This demo is designed to allow you to evaluate AdaptableBlotter.JS
        running under 'normal' conditions. Use
        <a href="https://perf.adaptableblotter.com" target="_blank">
          Performance Monitor
        </a>
        to test AdaptableBlotter.JS under more extreme conditions of multiple
        conditions and searches, tens of thousands of rows, and 500,000 flashing
        and data updates per second.{' '}
      </p>
      <div id="launcherOpenfin">
        <p>
          <b>OpenFin Demo (featuring 'Live Updates')</b>
          <br />
          This{' '}
          <a href="https://youtu.be/6Pf7BDUoe0I" target="_blank">
            video
          </a>{' '}
          shows AdaptableBlotter.JS running in the
          <a href="https://openfin.co" target="_blank">
            OpenFin
          </a>{' '}
          container. One exciting feature this provides is, that after exporting
          to Excel, any changes subsequently made to your report data in the
          Blotter, will automatically update in Excel.
          {/*
        <br /> Click the button to download the installer. You will need to launch the download executable that will
        install
        locally the required components and launch the demo automtically. It will also create a shorcut in your windows
        menu under 'Adaptable Tools'
      </p>
      <p>
        <table style="border-spacing: 20px 5px;border-collapse: separate;">
          <tr>
            <td>
              <button style="height:45px; width:150px" class="btn btn-default">
                 <span>
                  <h5>Run OpenFin demo</h5>
                </span>
              </button>
              <script>
                function launchOpenfin() {
                  if (document.URL.indexOf("beta") > -1) {
                    location.href = 'https://install.openfin.co/download/?fileName=adaptable_blotter_openfin&config=http://beta.adaptableblotter.com/app-beta.json'
                  }
                  else {
                    location.href = 'https://install.openfin.co/download/?fileName=adaptable_blotter_openfin&config=http://demo.adaptableblotter.com/app-demo.json'
                  }
                }
              </script>
            </td>
          </tr>
        </table>
              */}
        </p>
      </div>
      {/*
    <script>
      if (isRunningInOpenfin()) {
        document.getElementById("launcherOpenfin").style.visibility = "collapse"
      }
      function isRunningInOpenfin() {
        return 'fin' in window && 'desktop' in fin;
      }
    </script>*/}
      <p>
        <b>Multiple Blotters and Components (using Finsemble)</b>
        <br />
        This{' '}
        <a href="https://chartiq.wistia.com/medias/0uk4ylf12g" target="_blank">
          video
        </a>{' '}
        simulates a life-like trading application with 3 instances of the
        Adaptable Blotter (for Trade, Price and Position), a chart window and a
        news feed.
        <br /> By leveraging the
        <a href="https://www.chartiq.com/finsemble/" target="_blank">
          Finsemble
        </a>{' '}
        framework, the 3 Blotters are able to share data, updates and filters,
        and can also communicate 2-ways with the 3rd party components.
      </p>
      {/*
    <table style="border-spacing: 20px 5px;border-collapse: separate;">
      <tr>
        <td>
          <button style="height:45px; width:150px" class="btn btn-default" target="_blank"
            onclick="location.href='https://beta.adaptableblotter.com/finsembledemo/Adaptable-Blotter-finsemble-beta-installer.zip' ">
            <span>
              <h5>Multi-Blotter Demo</h5>
            </span>
          </button>
        </td>
      </tr>
    </table>
    */}
      <p>
        Read more on the features of this demo at this
        <a
          href="https://www.linkedin.com/pulse/vive-la-html5-revolution-jonny-wolfson/"
          target="_blank"
        >
          blog piece
        </a>
        .
      </p>
      <p>
        <b>Installation and Integration</b>
        <br />
        For information on installing and running AdaptableBlotter.JS please
        read the
        <a
          href="https://adaptabletools.zendesk.com/hc/en-us/sections/360003854892-Integration"
          target="_blank"
        >
          Integration
        </a>
        section in our Help.
      </p>
      <p>
        <b>Help</b>
        <br />
        If you require further information please visit our
        <a href="http://adaptabletools.com" target="_blank">
          Website
        </a>{' '}
        or use the
        <a href="https://adaptabletools.zendesk.com/hc/en-us" target="_blank">
          Online Help
        </a>
        .
      </p>
      <p>
        <b>Licence and Pricing</b>
        <br /> The Adaptable Blotter is free for development (and evaluation)
        use. And we also offer a free Community Licence for students in full
        time education, charities and open-source projects.
        <br /> For all other usage, an <b>annual licence must be purchased</b>.
        (This licence covers both AdaptableBlotter.NET and AdaptableBlotter.JS
        versions, and includes 12 monthly updates and full support).
        <br />
        If you would like to do a POC using the Adaptable Blotter, please get in
        touch.
        <br />
        For more information please see the LICENSE file or contact
        <a href="mailto:support@adaptabletools.com">Adaptable Tools Support</a>.
      </p>
      <p>
        <b>Source Code</b>
        <br /> The Repository for the AdaptableBlotter.JS Demo is located in
        <a
          href="https://github.com/jonnyadaptabletools/adaptableblotter-demo"
          target="_blank"
        >
          Github
        </a>
        .
      </p>
    </div>
  );
};
