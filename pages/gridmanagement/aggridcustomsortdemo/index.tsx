import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/grid/aggridcustomsortdemo')}
      pageTitle={'Custom Sort Demo'}
      description={
        <div>
          <p>
            Custom Sort function allows you to specify a bespoke custom sort
            order when a column is sorted (in place of the default alphabetical
            or numbered sort).
          </p>
          <p>
            This is ideal for columns where the default sort order doesnt make
            sense (e.g. a 'Ratings' or 'Tenor' column) where you will want to
            provide a standard non-alphabetical sort.
          </p>
          <p>
            It is also suitable for columns where some users might have their
            own preferred non standard sort (e.g. a 'Sector' column).
          </p>
          <p>
            You can provide a hard-coded, sorted list of values which will be
            used to sort the column when the header is clicked (e.g. in the
            'Contact' column below).{' '}
          </p>
          <p>
            Or you can provide a{' '}
            <a
              href="https://api.adaptableblotter.com/modules/_predefinedconfig_customsortstate_.html#customsortcomparerfunction"
              target="_blank"
            >
              function
            </a>{' '}
            that's evaluated each time sort is run (it receives the cell value
            and the rest of the row). We use this function to sort the Employee
            column by surname.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_predefinedconfig_customsortstate_.customsortstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_api_customsortapi_.customsortapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819032-Custom-Sort-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755197-Grid-Functions"
            target="_blank"
          >
            User Guide
          </a>
          .
        </div>
      }
    />
  );
};
