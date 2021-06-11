import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridpreventeditalertsdemo')}
      pageTitle={'Prevent Edit Alerts Demo'}
      description={
        <div>
          <p>
            Alerts have a 'PreventEdit' property which will automatically
            disallow edits if an edit - directly made in AdapTable - triggers an
            Alert.
          </p>{' '}
          <p>
            This is essentially client-side validation and is designed to
            complement, but not replace, server validation.
          </p>
          <p>
            This example has 3 'Prevent Edit' Alerts:{' '}
            <ul>
              <li>All Edits are prevented in the 'Cust Ref' column</li>
              <li>Invoiced' column cannot accept values over 300</li>
              <li>
                'Order Cost' column cannot more than double in value (with a
                MessageType of <i>Warning</i>)
              </li>
            </ul>
            Note: these Alerts will apply also when you perform a Smart Edit or
            Bulk Update (and will be disallowed by the UI).
          </p>
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
