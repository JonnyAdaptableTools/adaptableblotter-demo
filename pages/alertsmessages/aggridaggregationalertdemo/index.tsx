import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridaggregationalertdemo')}
      pageTitle={'Aggregation Alerts Demo'}
      description={
        <div>
          <p>
            One advanced Alert option is to to trigger Alerts in response to{' '}
            <b>Aggregation Queries</b>.
          </p>
          <p>
            An{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-parser/query#aggregatation-expressions"
              target="_blank"
            >
              Aggregation Query
            </a>{' '}
            is one which evaluates an Expression based on a given set of data
            (as opposed to a normal Expression which works on a single row).
          </p>
          <p>
            The Aggregation Query can additionally have a <b>WHERE clause</b>{' '}
            which will limit the number of rows which are aggregated.
          </p>
          <p>
            Currently the only <i>function</i> available in the parser for
            Aggregation Queries is <b>SUM</b> (which sums) the value in the
            given column, but more will be added in the future.
          </p>
          <p>
            In this demo we have provided the Aggregation Expression:{' '}
            <code>
              SUM([ItemCount]) &gt; '2K' WHERE [Employee]='Margaret Peacock'
            </code>
          </p>
          <p>
            Try it yourself: Click the 'Increment' button which updates 'Item
            Count' value by 150; once all the rows that match the 'WHERE' clause
            exceeds 2000, the Alert is triggered.
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
            href="https://docs.adaptabletools.com/docs/adaptable-parser/query#aggregatation-expressions"
            target="_blank"
          >
            Aggregation Expressions
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
          </a>{' '}
          |{' '}
          <a href="https://youtu.be/Jo2rpfOATng" target="_blank">
            Reactive Queries Video
          </a>{' '}
        </div>
      }
    />
  );
};
