import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridcalendardemo')}
      pageTitle={'Calendar Demo'}
      description={
        <div>
          <h4>Calendar Demo</h4>
          <p>
            Some functionality in the Adaptable Blotter (e.g. Filters or
            Queries) requires knowledge of the user's when calculating Next or
            Previous Working Day.
          </p>
          <p>
            To do this a Holiday Calendar is used. The default is 'United
            States' but you can change that through Predefined Config or at
            run-time through the Calendars Function.
          </p>
          <p>
            This example we have set the 'Current Calendar' in Config to be
            France which is what the Adaptable Blotter will now use when working
            out if a particular Date is a holiday or not.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005167871-Calendars"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585252-Calendar-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009004991-Calendars-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
