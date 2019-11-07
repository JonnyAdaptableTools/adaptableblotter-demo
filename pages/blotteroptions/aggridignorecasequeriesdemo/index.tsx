import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/blotteroptions/aggridignorecasequeriesdemo'
      )}
      pageTitle={'AdaptableBlotter.JS ag-Grid Ignore Case in Queries Demo'}
      description={
        <div>
          <h4>Ignore Case in Queries Demo</h4>
          <p>
            By default case is ignored when running Queries against string
            columns. This is for Quick Search, Filters, and wherever we run a
            Query (e.g. Advanced Search, Conditional Style).
          </p>
          <p>
            However, if this is not your preferred behaviour, you can set the
            the <b>ignoreCaseInQueries</b> property of{' '}
            <a href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028584632-Query-Options">
              Query Options
            </a>
            to be <i>false</i> (the default if not set is <i>true</i>).
          </p>
          <p>
            This example we have set the value to false. Type 'j' into the Quick
            Search and you will see that Janet Leverling does not highlight.
            Change that to 'J' and it will highlight.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_blotteroptions_queryoptions_.queryoptions.html"
              target="_blank"
            >
              Blotter Options
            </a>
          </p>{' '}
        </div>
      }
    />
  );
};
