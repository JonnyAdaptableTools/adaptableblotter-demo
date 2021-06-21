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
            A FreeText Column is usually a string, but it has a <i>DataType</i>{' '}
            property that can, alternatively, be set to Number, Boolean or Data;
            AdapTable will provide an appropriate Cell Editor
          </p>
          <p>
            Free Text Columns can be provided with a <b>Default Value</b> which
            will appear if no other value is given
          </p>
          <p>
            You can provide a Free Text Column with an initial set of values,
            and then add to them at run-time; they are automatically saved with
            the user's state and reloaded with the grid.{' '}
          </p>
          <p>
            In this example we created 3 Free Text Columns:
            <ul>
              <li>
                <b>Comments</b>: together with 3 initial comments. No DataType
                was provided so it uses the default of <i>String</i>
              </li>
              <li>
                <b>OrderCode</b>: of type <i>Number</i> and with a default value
                of 123
              </li>
              <li>
                <b>LastSpoken</b>: of type <i>Date</i> (see how a Date Picker
                appears when you edit the Column)
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/free-text-column-module"
            target="_blank"
          >
            FreeText Column Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/free-text-column-config"
            target="_blank"
          >
            FreeText Column Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/free-text-column-api"
            target="_blank"
          >
            FreeText Column Api
          </a>
        </div>
      }
    />
  );
};
