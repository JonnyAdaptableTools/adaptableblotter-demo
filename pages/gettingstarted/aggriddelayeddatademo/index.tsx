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
            There are many ways to handle this - and you can update ag-Grid
            GridOptions directly and then everything will flow through.
          </p>
          <p>
            However AdapTable provides the *loadGridData* function in{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
              target="_blank"
            >
              Grid API
            </a>{' '}
            which is designed for this precise use case (for subsequent
            refreshes you can use *setGridData* ).
          </p>
          <p>
            The function will load the data in the grid and then make sure that
            anything that is dependent on that data load will also run
          </p>
          <p>
            For instance, if{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
              target="_blank"
            >
              includeExpandedRowGroups
            </a>{' '}
            is set to true, then any opened groups saved in the Layout will
            re-open at the start-up; try it by opening a row group and
            refreshing the page.
          </p>
        </div>
      }
      helpResources={<div></div>}
    />
  );
};
