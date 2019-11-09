import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/search/aggridquicksearchdemo')}
      pageTitle={'Quick Search Demo'}
      description={
        <div>
          <h4>Quick Search Demo</h4>
          <p>
            Quick Search enables you to quickly find matching text across all{' '}
            <b>visible</b> columns. You can use wildcards like '*' (starts with)
            or '>' (greater than) to refine your search.
          </p>
          <p>
            Quick Search Config allows you to set the style of matched cells and
            whether to hide or show rows with no matching cells.
          </p>
          <p>
            In this example we have chosen a darker yellow than the default
            option, chosen to hide non matching rows and are searching for any
            columns that start with 'g'.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_quicksearchstate_.quicksearchstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_quicksearchapi_.quicksearchapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029568432-Quick-Search-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028952711-Quick-Search-Videos"
              target="_blank"
            >
              Videos
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755137-Search-Functions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
