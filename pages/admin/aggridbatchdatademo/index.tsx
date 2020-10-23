import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridbatchdatademo')}
      pageTitle={'Batch Data Demo'}
      description={
        <div>
          <p>
            This demo illustrates batch updates - when a number of of rows are
            updated in a single transaction.
          </p>
          <p>
            This is done via the <b>updateGridData</b> method of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
              target="_blank"
            >
              Grid Api
            </a>{' '}
            in AdapTable Api.
          </p>
          <p>
            The method receives an array or rows to update, and config into
            which includes whether to update as a batch or in a loop, and a
            callback function to be invoked after the update.
          </p>
          <p>
            In this example we have set 50 random rows to update 10 columns
            every second.
          </p>
          <p>
            Similar to the{' '}
            <a href="./aggriddatasourcechangesdemo">Changing Data Demo</a> the
            grid has Filter ('Counterparty'), Sorting ('TradeId'), Conditional
            Style (the blue rows) and Quick Search ('b') in its Predefined
            Config.{' '}
          </p>
          <p>
            We also created a (Warning) Alert to fire whenever the country is
            Spain; note how this is triggered even though the data is being
            updated programatically and not through direct editing.
          </p>
          <p>
            These all immediately invoke after each batch update to ensure the
            Grid displays according to the user's requirements.
          </p>
        </div>
      }
    />
  );
};

// and we process a callback (with a message to the console)
