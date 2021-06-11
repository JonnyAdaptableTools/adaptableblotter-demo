import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridadvancedalertdemo')}
      pageTitle={'Advanced Alerts Demo'}
      description={
        <div>
          <p>
            As well as Alerts that use Predicates, AdapTable also provides
            Alerts that will trigger when a more complicated (boolean){' '}
            <b>Expression</b> is evaluated.
          </p>
          <p>
            You can still set up the same Message Type, Notification, Alert
            Behaviour and Forms etc as with Basic Alerts.
          </p>

          <p>
            This example contains an Alert written using a Boolean Expression:{' '}
            <i>
              '[ItemCost] {'>'} 50 AND [InvoicedCost] {'>'} 700 AND
              [PackageCost] {'>'} 14'
            </i>
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
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-query"
            target="_blank"
          >
            Expressions
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
