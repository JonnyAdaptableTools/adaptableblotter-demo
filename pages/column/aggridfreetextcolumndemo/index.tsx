import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/column/aggridfreetextcolumndemo')}
      pageTitle={'Free Text Column Demo'}
      description={
        <div>
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
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/freetext-column-module"
            target="_blank"
          >
            FreeText Column Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/free-text-column-config"
            target="_blank"
          >
            FreeText Column Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/free-text-column-api"
            target="_blank"
          >
            FreeText Column API
          </a>
        </div>
      }
    />
  );
};
