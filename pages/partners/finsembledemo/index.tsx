import React from 'react';

import MainPage from '../../../src/MainPage';
import finsembleDemoImage from '../../../images/FinsembleDemo.png';

export default () => {
  return (
    <MainPage pageTitle="">
      <p>
        <h4>Finsemble</h4>
      </p>
      <p>
        The Adaptable Blotter is designed to run in single or multiple blotter
        mode. Its easy to create many instances of the Blotter and have them
        share data, events and state.
      </p>
      <p>
        However if you want to enjoy cutting-edge multiple blotter functionality
        then we partner with{' '}
        <a href="https://www.chartiq.com/finsemble/" target="_blank">
          Finsemble
        </a>{' '}
        (by ChartIQ) which offers a fantastic multi-windowed, multi-application
        experience.
      </p>
      <p>
        We have a demo coming soon but in the meantime see this{' '}
        <a href="https://www.youtube.com/watch?v=amhRqx1FFsc" target="_blank">
          video
        </a>{' '}
        that shows 3 Adaptable Blotters running inside Finsemble.
      </p>
      <p>
        <br />
        <img src={finsembleDemoImage} style={{ maxWidth: '70%' }} />
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
