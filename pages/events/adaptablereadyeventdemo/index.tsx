import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/events/adaptablereadyeventdemo')}
      pageTitle={'Adaptable Ready Demo'}
      description={
        <div>
          <p>
            The on('AdaptableReady') event is fired as soon as AdapTable has
            completed its initialisation. It provides the `AdaptableReadyInfo`
            object which contains 2 properties:
          </p>
          <ul>
            <li>
              <b>adaptableAPI</b>: This is the AdaptableApi which provides run
              time access to all methods, functionality and events in AdapTable
            </li>
            <li>
              <b>vendorGrid</b>: This is the instance of the underlying vendor
              grid being used
            </li>
          </ul>
          <p>
            'vendorGrid' is returned because AdapTable enriches the one it
            receives in AdaptableOptions (with modules & other properties), so
            use this object if you want access to the underlying grid.
          </p>
          <p>
            <b>Note</b>: the React and Angular ag-Grid wrappers explicitly
            return 'adaptableApi and 'gridOptions' as the event arguments.
          </p>
          <p>
            In this example we have used Adaptable Ready to set the Quick Search
            (through AdaptableAPI) and also to hook up to the ag-grid Selection
            Changed event (logging to console).
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/adaptable-events-overview"
            target="_blank"
          >
            Adaptable Events
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/adaptable-ready-event"
            target="_blank"
          >
            Adaptable Ready Event
          </a>
        </div>
      }
    />
  );
};
