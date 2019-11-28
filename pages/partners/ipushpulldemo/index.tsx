import React from 'react';

import MainPage from '../../../src/MainPage';

export default () => {
  return (
    <MainPage pageTitle="">
      <p>
        <h4>iPushPull</h4>
      </p>
      <p>
        The Adaptable Blotter natively exports data to the clipboard, csv and
        (coming soon) PDF.
      </p>
      <p>
        However if want to share your reports more widely(e.g. with Symphony
        chat correspondents or with Live Excel) then we you can do so via our
        partner{' '}
        <a href="https://www.ipushpull.com/" target="_blank">
          iPushpull
        </a>
        .
      </p>
      <p>
        You need to be an existing iPushPull user and fill in your user
        credentials in the{' '}
        <a
          href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_partnerconfigstate_.partnerconfigstate.html"
          target="_blank"
        >
          Partner Config section
        </a>{' '}
        section of Adaptable Blotter state. .
      </p>
      <p>
        Then when you wish to Export, simply select 'iPushPull' from the
        Dropdown in the Export toolbar, type in your username and password and
        you will be able to export to iPushPull.
      </p>
      <p>
        The videos below show how to export to / from iPushPull using the
        Adaptable Blotter.
      </p>
      <p>
        <iframe
          width="840"
          height="480"
          src="https://www.youtube.com/embed/_YK4T4xvnTU"
        />
        <br />
        <iframe
          width="840"
          height="480"
          src="https://www.youtube.com/embed/HUm9dzdX9dE"
        />
      </p>
    </MainPage>
  );
};
