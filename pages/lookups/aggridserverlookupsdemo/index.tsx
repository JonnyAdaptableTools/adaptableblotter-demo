import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/lookups/aggridserverlookupsdemo')}
      pageTitle={'Server Lookups Demo'}
      description={
        <div>
          <p>
            By default when showing a list of filter values (or a list of
            distinct column values when building a query) AdapTable will create
            the distinct list based on what is currently in the DataSet.
          </p>
          <p>
            However sometimes you might want to provide AdapTable with a list of
            allowed values for lookups or filtering. You do this through the{' '}
            <b>permittedValues</b> property of{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/user-interface-options"
              target="_blank"
            >
              User Interface Options
            </a>
            .
          </p>
          <p>
            This property allows you to provide a method which will get the
            distinct values you want to show from the Server and return to
            AdapTable. If the return list is empty then we will show the list
            from the grid as normal.
          </p>
          <p>
            This example provides custom value list for the 'Cust. Ref' and
            'Contact' columns. When you filter on these columns or use them in a
            query only a subset of values are shown; other columns display
            distinct values normally.
          </p>
        </div>
      }
      helpResources={<div></div>}
    />
  );
};
