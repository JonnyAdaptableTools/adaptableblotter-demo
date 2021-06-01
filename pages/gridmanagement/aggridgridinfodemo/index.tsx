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
          <p>The Grid Info 'popup' contains 3 tabs: </p>
          <ol>
            <li>
              <b>Grid Properties</b>: provides licence, column and row
              information for the grid
            </li>
            <li>
              <b>Adaptable Options</b>: displays your AdaptableOptions values
            </li>
            <li>
              <b>Column</b>: shows information about which AdapTable Modules are
              active for a given column.
            </li>
          </ol>
          <p>The Grid Info popup can be acccessed in multiple ways:</p>
          <ul>
            <li>
              The 'GridInfo' button in the <a href="../dashboard">Dashboard</a>{' '}
              - one of the default items in the <b>VisibleButtons</b> property
              in{' '}
              <a
                href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config#visiblebuttons"
                target="_blank"
              >
                Dashboard Config
              </a>
              .
            </li>
            <li>
              <i>Show Info</i> menu option in the{' '}
              <a href="../menus/aggridcolumnmenudemo">Column Header menu</a>{' '}
              (with Options to open on either the Grid or Column tabs)
            </li>
            <li>
              <i>Show Info</i> menu option in the{' '}
              <a href="../menus/aggridcontextmenudemo">Context menu</a> menu
              (with Options to open on either the Grid or Column tabs)
            </li>
          </ul>
          <p>Most users access this function through the Dashboard as</p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/grid-info-module"
            target="_blank"
          >
            Grid Info Function Module
          </a>
        </div>
      }
    />
  );
};
