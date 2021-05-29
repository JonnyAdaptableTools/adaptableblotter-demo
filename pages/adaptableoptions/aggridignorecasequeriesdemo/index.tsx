import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptableoptions/aggridignorecasequeriesdemo'
      )}
      pageTitle={'Ignore Case in Queries Demo'}
      description={
        <div>
          <p>
            By default case is ignored when running Queries against string
            columns. This is for Quick Search, Filters, and wherever we run a
            Query.
          </p>
          <p>
            However, if this is not your preferred behaviour, you can set the
            the <b>ignoreCaseInQueries</b> property of{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/search-options"
              target="_blank"
            >
              Search Options
            </a>{' '}
            to be <i>false</i> (the default if not set is <i>true</i>).
          </p>
          <p>
            This example we have set the value to false. Type 'j' into the Quick
            Search and you will see that Janet Leverling does not highlight.
            Change that to 'J' and it will highlight.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/search-options"
            target="_blank"
          >
            Adaptable Options
          </a>
        </div>
      }
    />
  );
};
