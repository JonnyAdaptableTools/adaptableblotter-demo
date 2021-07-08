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
            In AdapTable you can create Alerts with an{' '}
            <a
              href="https://docs.adaptabletools.com/docs/user-interface/adaptable-form"
              target="_blank"
            >
              Adaptable Form
            </a>{' '}
            that allows users to override the edited value with a new one.
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
            In this example we have created a 'Warning' Alert to fire if
            'ItemCount' is over 30 and provided a form with the following
            features:
          </p>
          <ul>
            <li>
              A <b>Description</b> to explain why a new value is required
            </li>
            <li>
              A single field with a label of 'Item Count', no default value and
              an input type of number
            </li>
            <li>
              A button labelled <b>Overwrite</b> with an <i>onClick</i> handler
              that calls the Grid Api <code>setCellValue</code> function to set
              a new value
            </li>
            <li>
              The button also has a <i>disabled</i> callback so that it is only
              enabled if the new Item Count value is between 1 and 30
            </li>
            <li>
              A second button labelled <b>Undo</b> has an <i>onClick</i> handler
              that calls the Grid Api <code>undoCellEdit</code> function to set
              a new value
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
            Alert Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/alert-options"
            target="_blank"
          >
            Alert Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/alert-api"
            target="_blank"
          >
            Alert Api
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
