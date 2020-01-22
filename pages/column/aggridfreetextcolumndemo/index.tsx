import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/column/aggridfreetextcolumndemo')}
      pageTitle={'Free Text Column Demo'}
      description={
        <div>
          <h4>Free Text Column Demo</h4>
          <p>
            Free Text columns are similar to calculated columns in that they are
            not part of the Grid's datasource but are created by you and stored
            with your state.
          </p>
          <p>
            The difference is that a Free Text column is editable (not derived)
            and is designed for you to store whatever values you want for each
            row (typically comments).
          </p>
          <p>
            This example we created a Free Text Column named 'Comments'. And we
            added 3 initial comments - which are then automatically saved with
            the user's state and reloaded with the grid.
          </p>
          <p>
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_predefinedconfig_freetextcolumnstate_.freetextcolumnstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_api_freetextcolumnapi_.freetextcolumnapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030078371-FreeText-Column-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029743352-Free-Text-Column-Videos"
              target="_blank"
            >
              Videos
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360003213038-Special-Column-Functions"
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
