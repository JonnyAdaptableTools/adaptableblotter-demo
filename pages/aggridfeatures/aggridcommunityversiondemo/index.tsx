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
            (i.e. with NONE of the ag-Grid Enterprise features available.)
          </p>
          <p>
            When this is the case AdapTable will still work with the vast
            majority of its features enabled (though obvoiusly things like
            support for Master / Detail or Tree Grids are missing).
          </p>
          <p>
            Likewise all the advanced features AdapTable offers such as the
            No-Code version, Team Sharing, Audit Log, Advanced Search,
            Calculated Column, Alerts, Schedules etc. are present.
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
    />
  );
};
