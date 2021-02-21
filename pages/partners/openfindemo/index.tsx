import React from 'react';

import MainPage from '../../../src/MainPage';

export default () => {
  return (
    <MainPage pageTitle="">
      <p>
        <h4>OpenFin</h4>
      </p>
      <div id="launcherOpenfin">
        <p>
          AdapTable runs in the Broswer or Electron with all functionality
          available for users (depending on their{' '}
          <a href="../../entitlements/">Entitlements</a>
          ).
        </p>
        <p>
          However if you are running AdapTable inside the popular{' '}
          <a href="https://openfin.co/" target="_blank">
            OpenFin container{' '}
          </a>
          then you get some extra features which we have added that take
          advantage of the many benefits that OpenFin brings.
        </p>
        <p>
          Run our{' '}
          <a
            href="https://github.com/AdaptableTools/openfin-demo"
            target="_blank"
          >
            AdapTable OpenFin Demo Application
          </a>{' '}
          project and see for yourself.
        </p>
        <p>
          The Demo illustrates 3 areas where AdapTable and OpenFin functionality
          combine in exciting ways:
        </p>
        <ul>
          <li>
            <b>Notifications</b> - AdapTable's powerful Alerts can be shown as
            OpenFin Notifications with action buttons
          </li>
          <li>
            <b>FDC3 Messages</b> - FDC3 broadcasts can be sent from AdapTable to
            other OpenFin windows via current channel (and internally through
            the IAB message bus)
          </li>
          <li>
            <b>Live 2-way Excel Integration</b> - Data can be exported from
            AdapTable to Excel and each updates in line with data changes made
            in the other. This includes full validation.
          </li>
        </ul>

        <p>
          Or you can{' '}
          <b>
            <a
              href="https://install.openfin.co/download/?fileName=adaptable_blotter_openfin&config=http://demo.adaptableblotter.com/app-demo.json"
              target="_blank"
            >
              Run OpenFin
            </a>
          </b>{' '}
          manually to see AdapTable running inside the OpenFin container.{' '}
        </p>
        <p>
          (The link will download the OpenFin installer - click the exe to run
          this demo page inside OpenFin. It will also create a shorcut in your
          windows menu under 'Adaptable Tools').
        </p>
        <p>
          Alternatively watch the (slightly dated) video below to see how
          OpenFin and AdapTable work together.
        </p>
        <p>
          <iframe
            width="840"
            height="480"
            src="https://www.youtube.com/embed/6Pf7BDUoe0I"
          />
          {/*
         

        <br /> Click the button to download the installer. You will need to launch the download executable that will
        install
        locally the required components and launch the demo automtically. 
      </p>
      <p>
        <table style="border-spacing: 20px 5px;border-collapse: separate;">
          <tbody>
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
           </tbody>
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
    </MainPage>
  );
};
