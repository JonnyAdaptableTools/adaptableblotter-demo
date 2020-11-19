import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/lookups/aggridmaxitemsqueriesdemo')}
      pageTitle={'Max Items Displayed in Queries Demo'}
      description={
        <div>
          <p>
            When getting distinct column values for display (either in the
            column filter dropdown) AdapTable will show the first 2,000 distinct
            values for that column.
          </p>
          <p>
            However, if you would prefer to return a larger result set, you can
            set the the <b>maxColumnValueItemsDisplayed</b> property of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/query-options"
              target="_blank"
            >
              Query Options
            </a>{' '}
            to a different value.
          </p>
          <p>
            This example we have set the value to 20. Open the column filter for
            the 'Contact' column and you will see only 20 items displayed
            (instead of the many hundred we show in other demos).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/query-options"
            target="_blank"
          >
            Adaptable Options
          </a>
        </div>
      }
    />
  );
};
