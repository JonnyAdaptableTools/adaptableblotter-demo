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
          The Adaptable Blotter runs in the Broswer or Electron with all
          functionality available for users (depending on their{' '}
          <a href="../admin/aggridentitlementsdemo/">Entitlements</a>).
        </p>
        <p>
          However if you are running the Adaptable Blotter inside the popular{' '}
          <a href="https://openfin.co/" target="_blank">
            OpenFin container
          </a>{' '}
          then you get some extra features which we have added that take
          advantage of the many benefits that OpenFin brings.
        </p>
        <p>
          One of these is <b>Live Updates</b>. When running in OpenFin if you
          export data to Excel, then any changes made to your data in the
          Blotter (either user edits or ticking data changes) are immediately
          reflected in Excel also.
        </p>
        <p>
          Try it for yourself:{' '}
          <b>
            <a
              href="https://install.openfin.co/download/?fileName=adaptable_blotter_openfin&config=http://demo.adaptableblotter.com/app-demo.json"
              target="_blank"
            >
              Run OpenFin
            </a>
          </b>{' '}
          to see the Adaptable Blotter running inside OpenFin and then export
          data to Excel.{' '}
        </p>
        <p>
          (The link will download the OpenFin installer - click the exe to run
          this demo page inside OpenFin. It will also create a shorcut in your
          windows menu under 'Adaptable Tools').
        </p>
        <p>
          Alternatively watch the video below to see how OpenFin and the
          Adaptable Blotter work together.
        </p>
        <p>
          <iframe
            width="840"
            height="630"
            src="https://www.youtube.com/embed/6Pf7BDUoe0I"
          ></iframe>
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
