import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcontextmenudemo')}
      pageTitle={'Context Menu Demo'}
      description={
        <div>
          <h4>Context Menu Demo</h4>
          <p>
            The Grid Info button (the button in the Home Toolbar with the info
            sign) provides at a glace summary information about your instance of
            Adaptable.
          </p>
          <p>
            It contains 2 tabs: <b>Grid Properties</b> which provides licence,
            column and row information for the grid, and{' '}
            <b>Adaptable Options</b> which displays your AdaptableBlotterOptions
            values.
          </p>
          <p>
            You can turn this off by setting <i>ShowAboutButton</i> to false in
            in{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_dashboardstate_.dashboardstate.html"
              target="_blank"
            >
              Dashboard Config
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
