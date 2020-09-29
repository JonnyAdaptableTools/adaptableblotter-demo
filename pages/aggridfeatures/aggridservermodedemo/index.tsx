import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridfeatures/aggridservermodedemo')}
      pageTitle={'Server Row Model Demo'}
      description={
        <div>
          <p>
            ag-Grid has a{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-server-side-model/"
              target="_blank"
            >
              Server Row Model
            </a>{' '}
            which allows you to populate your grid from your server as the user
            scrolls.
          </p>
          <p>
            (There is also an{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-infinite-scrolling/"
              target="_blank"
            >
              Infinite Scrolling Model
            </a>{' '}
            which performs similarly but it is has less functionality than
            Server Row Model and is less frequently used.)
          </p>
          <p>
            Unlike with the - default -{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-client-side-model/"
              target="_blank"
            >
              Client-Side Row Model
            </a>{' '}
            ag-Grid will not perform any filtering or sorting, and these must be
            done by the developer on the server.
          </p>
          <p>
            Likewise{' '}
            <b>
              AdapTable cannot perform its out of the box searching, filtering
              or sorting in this mode
            </b>{' '}
            (though Quick Search does work as it highlights cells and doesn't
            filter).
          </p>
          <p>
            However, due to the way that Column Filters are created in AdapTable
            - using Predicates - its relatively easy to hand this off to the
            server to perform.
          </p>
          <p>
            In this demo we provide an example - its slightly contrived as we
            want to display all the code required on a single page - but note
            the following features:
          </p>
          <ul>
            <li>
              We create 200,000 rows to mimic multiple rows on our 'Mock Server'
              - which implements <b>getRows</b>.
            </li>
            <li>
              We pass that Mock Server to ag-Grid via its api method{' '}
              <b>setServerSideDatasource</b> - this calls <i>getRows</i> (see
              above) whenever the filters change or user scrolls to bottom of
              grid.
            </li>
            <li>
              We set the <i>Batch Count</i> to 100 so that 100 rows are loaded
              at at time - when you scroll and reach 100 you will see a small
              lag.
            </li>
            <li>
              On our mock server, we call a <b>getTradesRange</b> function each
              time that <b>getRows</b> is invoked by ag-Grid, passing in the
              current row count information.
            </li>
            <li>
              We pass the current{' '}
              <b>
                <a
                  href="https://api.adaptabletools.com/interfaces/_src_api_events_searchchanged_.adaptablesearchstate.html"
                  target="_blank"
                >
                  AdaptableSearchState
                </a>{' '}
              </b>{' '}
              which includes the Column Filters, allowing us to perform on the
              server the same filtering as AdapTable does for us on the client.
            </li>
            <li>
              We also pass the current{' '}
              <b>
                <a
                  href="https://api.adaptabletools.com/interfaces/_src_api_events_searchchanged_.adaptablesortstate.html"
                  target="_blank"
                >
                  AdaptableSortState
                </a>
              </b>{' '}
              which includes which columns are sorted and the sort direction,
              and we perform the same sorting on our result set.
            </li>
            <li>
              We use the <b>GetColumnValuesFunction</b> in UserFunctions to
              retrieive the distinct values for each column too show in the
              filter dropdown...
            </li>
            <li>
              ...And we set the name of this function in the
              PermittedValuesItems property of the UserInterace section of
              Predefined Config.
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/guides/adaptable-server-functionality-guide.md"
            target="_blank"
          >
            Server Functionality Guide
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_events_searchchanged_.adaptablesearchstate.html"
            target="_blank"
          >
            Search State
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_events_searchchanged_.adaptablesortstate.html"
            target="_blank"
          >
            Sort State
          </a>
        </div>
      }
    />
  );
};
