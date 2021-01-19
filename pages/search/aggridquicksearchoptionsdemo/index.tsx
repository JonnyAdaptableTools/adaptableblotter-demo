import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggridquicksearchoptionsdemo')}
      pageTitle={'Quick Search Options Demo'}
      description={
        <div>
          <p>
            There are a few useful options available if running Quick Search
            (see the{' '}
            <a href="./aggridquicksearchdemo" target="_blank">
              main demo
            </a>{' '}
            here). These include:
          </p>
          <ul>
            <li>
              <b>Styling Results</b>
              <p>
                Quick Search Predefined Config enables the style of matched
                cells to be configured - in this example we have set a darker
                yellow background with a brown font and italic text.
              </p>
            </li>
            <li>
              <b>Placeholder Text</b>
              <p>
                The default placeholder text value of 'Search' in the Quick
                Search box can be changed via the <i>quickSearchPlaceholder</i>{' '}
                property in{' '}
                <a
                  href="https://docs.adaptabletools.com/docs/adaptable-options/search-options"
                  target="_blank"
                >
                  Search Options
                </a>
                ; here it is set to 'Search Grid'.
              </p>
            </li>
            <li>
              <b>Running Parallel Query</b>
              <p>
                Quick Search is a Find and Highlight operation and not a Filter
                one so the default behaviour is to show all rows with matching
                cells highlighted.
              </p>
              <p>
                To return only those rows which contains a matching cell, set
                the
                <i>runQueryAfterQuickSearch</i> property in{' '}
                <a
                  href="https://docs.adaptabletools.com/docs/adaptable-options/search-options"
                  target="_blank"
                >
                  Search Options
                </a>
                to true (as we have done in this demo).
              </p>
            </li>

            <li>
              <b>Excluding Columns From Search</b>{' '}
              <p>
                By default AdapTable will search every visible column when
                running Quick Seach.
              </p>
              <p>
                Particular columns can be excluded by providing a{' '}
                <b>excludeColumnFromQuickSearch</b> function in{' '}
                <a
                  href="https://docs.adaptabletools.com/docs/adaptable-options/search-options#excluding-quick-search"
                  target="_blank"
                >
                  Search Options
                </a>
                . Set it to return <i>true</i> for any column that you want
                excluded.
              </p>
              <p>
                In this example our function will exclude the <i>Contact</i>{' '}
                Column which is why searching for 'Maria' will not show up in
                the result set.
              </p>
            </li>
          </ul>

          <p></p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/quick-search-function"
            target="_blank"
          >
            Quick Search Function
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/quick-search-config"
            target="_blank"
          >
            Quick Search Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/quick-search-api"
            target="_blank"
          >
            Quick Search Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/search-options"
            target="_blank"
          >
            Search Options
          </a>
        </div>
      }
    />
  );
};
