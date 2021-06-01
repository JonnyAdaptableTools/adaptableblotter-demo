import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridalertoverwritedemo')}
      pageTitle={'Alerts Overwrite Demo'}
      description={
        <div>
          <p>
            In AdapTable you can create Alerts where you can override the edited
            value with a new one.
          </p>
          <p>
            You can also provide validation to ensure the new value itself
            valid.
          </p>
          <p>
            Note: this is different to 'Prevent Edit' alerts where the edited
            value is automatically rejected if it breaks the Alert Definition.
          </p>
          <p>
            The Alert uses the same <b>Dynamic Form</b> template used in Custom
            Report destinations and the Data Source function.
          </p>
          <p>
            In this example we have created a 'Warning' Alert to fire if
            'ItemCost' is over 100 and provided a form with the following
            features:
          </p>
          <ul>
            <li>
              A <b>Description</b> to explain why a new value is required
            </li>
            <li>
              A single field with a label of 'Item Cost', no default value and
              an input type of number
            </li>
            <li>
              A button labelled 'Overwrite' with a predefined Action of{' '}
              <b>overwrite</b> styled with a tone of 'warning' and variant of
              'outlined'
            </li>
            <li>
              The button has <b>validation</b> provided which sets whether it is
              enabled defined as: "[ItemCost] &gt;0 AND [ItemCost] &lt;= 100"
            </li>
            <li>
              A second button labelled 'Undo' and with an action of <b>undo</b>{' '}
              - which will set the cell back to the pre-edited value
            </li>
          </ul>{' '}
        </div>
      }
      helpResources={
        <div>
          {' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/alert-module"
            target="_blank"
          >
            Alert Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/alert-config"
            target="_blank"
          >
            Alert Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/alert-api"
            target="_blank"
          >
            Alert API
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/alert-fired-event"
            target="_blank"
          >
            AlertFired Event
          </a>
        </div>
      }
    />
  );
};
