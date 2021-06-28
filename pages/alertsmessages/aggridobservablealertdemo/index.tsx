import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridobservablealertdemo')}
      pageTitle={'Observable Alerts Demo'}
      description={
        <div>
          <p>
            One advanced Alert option is to to trigger Alerts in response to{' '}
            <b>Observable Queries</b>.
          </p>
          <p>
            An{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-parser/query#observable-expressions"
              target="_blank"
            >
              Observable Query
            </a>{' '}
            watches for changes (or lack of changes) in data that match a
            particular pattern (and uses advanced Rx techniques to trigger an
            Alert).
          </p>
          <p>
            There are 2 functions available in an Observable Query:
            <ul>
              <li>
                <b>ROW_CHANGE</b>: listens to changes in each row (or those that
                match the WHERE clause){' '}
              </li>
              <li>
                <b>GRID_CHANGE</b>: listens to changes in the whole grid.{' '}
              </li>
            </ul>
          </p>{' '}
          <p>
            Both these functions take 2 parameters:
            <ul>
              <li>
                <b>Change function</b>: What needs to change to trigger the
                Observable. Can be any of: <i>COUNT</i>, <i>MIN</i>, <i>MAX</i>{' '}
                or <i>NONE</i>.
              </li>
              <li>
                <b>Timeframe</b>: Defines the period in which the changes will
                be observed. Can be set in <i>Seconds</i>, <i>Minutes</i> or{' '}
                <i>Hour</i>
              </li>
            </ul>
          </p>{' '}
          <p>
            The Observable Query can additionally have a <b>WHERE clause</b>{' '}
            which will limit the number of rows which are observed.
          </p>
          <p>
            In this demo we have provided 2 Observable Expression:{' '}
            <ul>
              <li>
                <b>ROW_CHANGE( COUNT( [ItemCount], 3) , TIMEFRAME('5m') ) </b>
                <br />
                Triggers if <i>Item Count</i> in a Row changes 3 times within a
                5 minute timeframe <br />
                Try it yourself: Click the <i>Increase Item Count</i> button
                which will update the 'Item Count' value in the first row; once
                it is clicked 3 times, the <i>Info</i> Alert will be triggered.
                <br />
              </li>
              <br />
              <li>
                <b>
                  ROW_CHANGE( MAX( [OrderCost] ), TIMEFRAME('1h') ) WHERE
                  [CustomerReference] = 'TRADH'
                </b>
                <br /> Triggers when the <i>Order Cost</i> f is the highest
                value it has been within the last hour - for rows where the{' '}
                <i>Cust Ref.</i> is 'TRADH'
                <br />
                Try it yourself: Click the <i>Increase Order Cost</i> button
                which will update the 'Order Cost' value in the second row; as
                it updates it will trigger the <i>Success</i> Alert
                <br />
              </li>
            </ul>
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
            href="https://docs.adaptabletools.com/docs/adaptable-parser/query/#observable-expressions"
            target="_blank"
          >
            Observable Expressions
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
