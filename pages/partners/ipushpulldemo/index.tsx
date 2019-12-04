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
            The Adaptable Blotter natively exports data to the clipboard, csv,
            JSON and (coming soon) PDF.
          </p>
          <p>
            However if want to share your reports more widely, (e.g. with
            Symphony chat correspondents or you want to see Live Excel) then we
            you can do so via our partner{' '}
            <a href="https://www.ipushpull.com/" target="_blank">
              iPushpull
            </a>
            .
          </p>
          <p>
            If you are an existing iPushPull user then all you need to do is
            provide an{' '}
            <a
              href="https://bitbucket.org/ipushpull/ipushpull-js/src/master/"
              target="_blank"
            >
              iPushPull object
            </a>{' '}
            (which will include your credentials) in the{' '}
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
            To export data: simply select <i>Start Sync with iPushPull</i> from
            the Dropdown in the Export toolbar, type your iPushPull username and
            password (which you can supply in{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_partnerstate_.ipushpullstate.html"
              target="_blank"
            >
              iPushPull State
            </a>{' '}
            ), select the folder / page in iPushPull which should display this
            data, and click 'Export to iPushPull'. You will now see your
            (ticking) Blotter data in iPushPull.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://github.com/AdaptableTools/example-adaptableblotter-ipushpull-integration/blob/master/index.ts"
              target="_blank"
            >
              Github Example
            </a>{' '}
            |{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_partnerstate_.ipushpullstate.html"
              target="_blank"
            >
              Predefined Config
            </a>{' '}
            |{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_partnerapi_.partnerapi.html"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            |{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360004099278-iPushPull-FAQ"
              target="_blank"
            >
              FAQ
            </a>{' '}
            |{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360004003298-iPushPull"
              target="_blank"
            >
              Videos
            </a>{' '}
            |{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755297-iPushPull"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
