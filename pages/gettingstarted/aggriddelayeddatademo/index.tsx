import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/gettingstarted/aggriddelayeddatademo')}
      pageTitle={'Delayed Data Demo'}
      description={
        <div>
          <p>
            Frequently your Grid Data will arrive AFTER the grid has rendered.
          </p>
          <p>
            This can be handled in ag-Grid GridOptions directly and then
            everything will flow through.
          </p>
          <p>
            However AdapTable provides the <b>loadGridData</b> function in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
              target="_blank"
            >
              Grid API
            </a>{' '}
            which is designed for this precise use case (for subsequent
            refreshes you can use <i>setGridData</i>).
          </p>
          <p>
            The function will load the data in the grid and then make sure that
            anything that is dependent on that data load will also run (e.g.{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
              target="_blank"
            >
              includeExpandedRowGroups
            </a>
            ).
          </p>
          <p>
            This demo loads the data 3 seconds after the grid is initialised -
            and adds the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-functions/format-column-function"
              target="_blank"
            >
              Format Columns
            </a>{' '}
            to 'Invoiced Cost' and 'Order Date' columns.
          </p>
          <p>
            Then after another 3 seconds it adds 2 extra columns - 'Package
            Cost' and 'Company' - which AdapTable handles very smoothly.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
            target="_blank"
          >
            Grid API
          </a>{' '}
        </div>
      }
    />
  );
};
