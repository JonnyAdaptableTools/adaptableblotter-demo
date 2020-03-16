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
            Quick Search enables you to quickly find matching text across all{' '}
            <b>visible</b> columns.{' '}
          </p>
          <p>
            Because it is such a popular function we have embedded it in the
            right hand side of the Dashboard Header (though there is also a
            Quick Search Toolbar you can use)
          </p>
          <p>
            In order to refine your search, you can use wildcards like '*'
            (starts with) or '>' (greater than) - see the Developer
            Documentation for a full list.
          </p>
          <p>
            Quick Search Predefined Config allows you to set the style of
            matched cells and whether to hide or show rows with no matching
            cells.
          </p>
          <p>
            In this example we have made the following changes to Quick Search
            Config: than the default option, chosen t for any columns that start
            with 'g'.
          </p>
          <ul>
            <li>Selected a darker yellow to highlight cells</li>
            <li>
              Chosen to hide all non-matching rows (ie. any row that has no
              visible cells that contain the search text)
            </li>
            <li>
              Searched for 'g*' - this will return any cells that contain text
              that starts with 'g'
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_quicksearchstate_.quicksearchstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_quicksearchapi_.quicksearchapi.html"
            target="_blank"
          >
            Adaptable API
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
        </div>
      }
    />
  );
};
