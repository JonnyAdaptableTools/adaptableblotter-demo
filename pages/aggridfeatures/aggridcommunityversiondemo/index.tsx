import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/aggridfeatures/aggridcommunityversiondemo'
      )}
      pageTitle={'Community Version Demo'}
      description={
        <div>
          <p>
            This demo shows AdapTable using just the ag-Grid Community version
            (i.e. with <b>none</b> of the ag-Grid Enterprise features
            available.)
          </p>
          <p>
            When this is the case AdapTable will still work with the vast
            majority of its features enabled - e.g. Layout, Flashing Cells,
            Smart Edit, Calculated Column, FreeText Column etc. (as shown here)
          </p>
          <p>
            Likewise all the advanced features AdapTable offers such as the
            No-Code version, Team Sharing, Audit Log, Advanced Search, Server
            Validation, Alerts, Schedules etc. are present.
          </p>{' '}
          <p>
            However, functions which support advanced ag-Grid features only
            available in ag-Grid Enterprise Edition <b>are missing</b> e.g.
            support for Master / Detail or Tree Grids.
          </p>
          <p>
            Note that as the normal ag-Grid Menu is missing (because it is an
            Enterprise) feature, AdapTable adds its own Column Header Menu -
            with support for user-defined menu items.
          </p>
          <p>
            <b>
              In order to run this demo you will need first to click the 'Clear
              State' button at the top of the page.
            </b>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/guides/adaptable-aggrid-guide.md"
            target="_blank"
          >
            Adaptable and ag-Grid Guide
          </a>
          .
        </div>
      }
    />
  );
};
