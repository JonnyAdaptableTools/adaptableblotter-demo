import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggridsystemfiltersdemo')}
      pageTitle={'System Filters Demo'}
      description={
        <div>
          <p>
            AdapTable provides a range of useful System Filters (e.g. 'Blanks',
            'Zero', 'Yesterday') to complement any Custom Filters provided by
            users at design-time.
          </p>
          <p>
            System Filters appear in both the Quick Filter Bar and the Filter
            Form
          </p>
          <p>
            By default <b>all</b> System Filters will be shown. However the
            `SystemFilters` property of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/filter-config"
              target="_blank"
            >
              Filter State
            </a>{' '}
            allows you to choose which (if any) you want available.
          </p>

          <p>
            In this example we have stipulated that just a small selection of
            System Filters are available: 'Positive', 'Zero', 'Contains',
            'Equals', 'Is', 'On'.{' '}
          </p>

          <p>
            And we then use the 'Positive' System Filter as the Column Filter
            for the 'Order Chg.' column.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/filter-function"
            target="_blank"
          >
            Filter ReadMe
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/filter-config"
            target="_blank"
          >
            Filter Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/filter-api"
            target="_blank"
          >
            Filter Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/filter-options"
            target="_blank"
          >
            Filter Options
          </a>
        </div>
      }
    />
  );
};
