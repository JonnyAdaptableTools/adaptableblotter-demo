import React from 'react';

import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/partners/aggridipushpulldemo')}
      pageTitle={'iPushPull Demo'}
      description={
        <div>
          <p>
            <h4>iPushPull</h4>
          </p>
          <p>
            The Adaptable Blotter natively exports data to the clipboard, csv
            and (coming soon) PDF.
          </p>
          <p>
            However if want to share your reports more widely(e.g. with Symphony
            chat correspondents or with Live Excel) then we you can do so via
            our partner{' '}
            <a href="https://www.ipushpull.com/" target="_blank">
              iPushpull
            </a>
            .
          </p>
          <p>
            You need to be an existing iPushPull user and provide your user
            credentials in the{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_partnerstate_.ipushpullstate.html"
              target="_blank"
            >
              iPushPull property
            </a>{' '}
            of{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_partnerstate_.partnerstate.html"
              target="_blank"
            >
              Partner State
            </a>{' '}
            in Predefined Config.
          </p>
          <p>
            Then when you wish to Export, simply select 'iPushPull' from the
            Dropdown in the Export toolbar, type in your username and password
            and you will be able to export to iPushPull.
          </p>
          <p>
            You can see how to export to / from iPushPull using the Adaptable
            Blotter with these{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360004003298-iPushPull"
              target="_blank"
            >
              videos
            </a>
          </p>
        </div>
      }
    />
  );
};
