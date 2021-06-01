import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcalendardemo')}
      pageTitle={'Calendar Demo'}
      description={
        <div>
          <p>
            Some functionality in AdapTable (e.g. Filters or Queries) requires
            knowledge of the user's when calculating Next or Previous Working
            Day.
          </p>
          <p>
            To do this a Holiday Calendar is used. The default is 'United
            States' but you can change that via the 'currentCalendar' property
            in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/general-options"
              target="_blank"
            >
              General Options
            </a>{' '}
            .
          </p>
          <p>
            This example we have set the 'Current Calendar' in Config to be
            France which is what AdapTable will now use when working out if a
            particular Date is a holiday or not.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/general-options"
            target="_blank"
          >
            General Options
          </a>{' '}
        </div>
      }
    />
  );
};
