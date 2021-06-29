import React from 'react';

import MainPage from '../../../src/MainPage';

export default () => {
  return (
    <MainPage pageTitle="">
      <p>
        <h4>OpenFin</h4>
      </p>
      <div style={{ background: 'lightgray', padding: '20px', margin: '10px' }}>
        <h3>
          <a
            href="https://us02web.zoom.us/rec/share/2rSh-BJQNtTRclh9FEilFZAVZv0VUUl58pElImiPXPzTJJYykslVA1WFf5MqxMv-.4K1_UC74tsPj9qG4"
            target="_blank"
          >
            Watch the AdapTable / OpenFin Webinar
          </a>{' '}
          which showcased the many integrations between these 2 leading products
        </h3>
      </div>
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
          Watch the video below which illustrates 3 areas where AdapTable and
          OpenFin functionality combine in exciting ways:
        </p>
        <ul>
          <li>
            <b>Notifications</b> - AdapTable's powerful Alerts can be shown as
            OpenFin Notifications with action buttons
          </li>
          <li>
            <b>FDC3 Messages</b> - FDC3 Instrument Column broadcasts can be sent
            from AdapTable to other OpenFin windows via current channel (and
            internally through the OpenFin FDC3 api)
          </li>
          <li>
            <b>Live 2-way Excel Integration</b> - Data can be exported from
            AdapTable to Excel and each updates in line with data changes made
            in the other. This includes full validation and audit.
          </li>
        </ul>
        <p>
          <iframe
            width="840"
            height="480"
            src="https://www.youtube.com/embed/mSYfQ_x0pP8"
          />
        </p>{' '}
        <p>
          Alternatively, run our{' '}
          <a
            href="https://github.com/AdaptableTools/openfin-demo"
            target="_blank"
          >
            AdapTable OpenFin Demo Application
          </a>{' '}
          project and see for yourself how OpenFin and AdapTable work together.
        </p>
      </div>
    </MainPage>
  );
};
