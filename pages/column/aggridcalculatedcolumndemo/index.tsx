import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridcalculatedcolumndemo')}
      pageTitle={'Calculated Column Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Calculated Column Demo</h4>
          <p>
            Calculated columns are custom columns that you create (at design or
            run time) where the value is now in the bound dataset but is{' '}
            <b>derived</b> from other columns in the row.
          </p>
          <p>
            Create them with an Expression which can range from straightforward
            to incredibly complex (we use{' '}
            <a href="https://mathjs.org/" target="_blank">
              Math.JS
            </a>
            ). They become a 'normal' column in the grid and will update
            automatically as other values change.
          </p>
          <p>
            This example we created 2 Calculated Columns: 'Avg Item Cost' and
            'Profit' (click on the 5th button in toolbar to see details of the
            Expression - or 'Edit Expression' in the Column Header menu). And
            because they are treated as 'normal' columns we were able to include
            them in the layout we created and also to style them using
            Conditional Styles.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005113212-Calculated-Columns"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585232-Calculated-Column-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008818992-Calculated-Column-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
