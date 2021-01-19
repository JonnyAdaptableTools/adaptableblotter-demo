import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggridquicksearchdemo')}
      pageTitle={'Quick Search Demo'}
      description={
        <div>
          <p>
            Quick Search enables you to quickly find <b>any matching text</b>{' '}
            across all cells in <b>visible</b> columns.
          </p>
          <p>
            Because it is such a popular function we have embedded it in the
            right hand side of the Dashboard Header (though there is also a
            Quick Search Toolbar you can use)
          </p>
          <p>
            There are many options available for Quick Search around styling,
            available columns and filtering behaviour. See the{' '}
            <a href="./aggridquicksearchoptionsdemo" target="_blank">
              Quick Search Options Demo
            </a>{' '}
            for more details.
          </p>
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
