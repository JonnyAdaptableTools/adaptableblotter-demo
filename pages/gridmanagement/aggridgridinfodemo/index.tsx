import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridgridinfodemo')}
      pageTitle={'Grid Info Demo'}
      description={
        <div>
          <p>
            The Grid Info function (its icon is the 'info' sign) provides at a
            glace summary information about your instance of Adaptable.
          </p>
          <p>The Grid Info 'popup' contains 2 tabs: </p>
          <ul>
            <li>
              <b>Grid Properties</b> which provides licence, column and row
              information for the grid
            </li>
            <li>
              <b>Adaptable Options</b> which displays your AdaptableOptions
              values
            </li>
          </ul>
          <p>
            Most users access this function through the Dashboard as 'GridInfo'
            is one of the default items in the <b>VisibleButtons</b> property in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html#visiblebuttons"
              target="_blank"
            >
              Dashboard Config
            </a>
            .
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          .
        </div>
      }
    />
  );
};
