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
            ag-Grid has an incredibly powerful and useful{' '}
            <a
              href="https://www.ag-grid.com/javascript-grid-server-side-model/"
              target="_blank"
            >
              Server Row Model
            </a>{' '}
            which allows you to populate your grid via your server as the user
            scrolls - ideal for enormous datasets.
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
            However, thanks to the way that the{' '}
            <a
              href="https://docs.adaptabletools.com/api/adaptablesearchstate/"
              target="_blank"
            >
              Search
            </a>{' '}
            and{' '}
            <a
              href="https://docs.adaptabletools.com/api/adaptablesortstate/"
              target="_blank"
            >
              Sort
            </a>{' '}
            states are abstracted in AdapTable, its relatively easy to hand this
            off to the server to perform.
          </p>
          <p>
            In this demo we provide an example - its slightly contrived as we
            want to display all the code required on a single page - but note
            the following features:
          </p>
          <ul>
            <li>
              We create 200,000 date entries on our 'Fake Server' - which
              simulates a real life server.
            </li>
            <li>
              We create a ServerSideDatasource which implements <b>getRows</b>{' '}
              (see{' '}
              <a
                href="https://www.ag-grid.com/documentation/javascript/server-side-model-datasource/#datasource-interface/"
                target="_blank"
              >
                IServerSideDatasource
              </a>
              )
            </li>
            <li>
              We pass that datasource to ag-Grid via its api method{' '}
              <b>setServerSideDatasource</b> - this calls <i>getRows</i> (see
              above) whenever the filters change or user scrolls to bottom of
              grid.
            </li>
            <li>
              In our datasource, we call a <b>fetchServerData</b> function each
              time that <b>getRows</b> is invoked by ag-Grid, passing in the
              current row count information.
            </li>
            <li>
              We also pass the current{' '}
              <a
                href="https://docs.adaptabletools.com/api/adaptablesearchstate/"
                target="_blank"
              >
                <b>AdaptableSearchState</b>
              </a>{' '}
              which includes the ColumnFilters & Query(AST or string), allowing
              us to perform on the server the same filtering & searching as
              AdapTable does for us on the client.
            </li>
            <li>
              We also pass the current{' '}
              <a
                href="https://docs.adaptabletools.com/api/adaptablesortstate/"
                target="_blank"
              >
                <b>AdaptableSortState</b>
              </a>{' '}
              which includes which columns are sorted and the sort direction,
              and we perform the same sorting on our result set.
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
            href="https://docs.adaptabletools.com/docs/key-topics/server-functionality"
            target="_blank"
          >
            Server Functionality Guide
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/search-changed-event"
            target="_blank"
          >
            Search Changed
          </a>{' '}
        </div>
      }
    />
  );
};
