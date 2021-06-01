import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/lookups/aggridpermittedvaluesdemo')}
      pageTitle={'Permitted Values Demo (User Inferface Options)'}
      description={
        <div>
          <p>
            AdapTable follows a series of steps when it wants to provide a list
            of values for a column (e.g. in a column filter, or when building a
            query or in Bulk Update).
          </p>
          <p>
            It will first look for any Permitted Values for that column, set via
            the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options#permittedvaluesitems"
              target="_blank"
            >
              PermittedValuesItems
            </a>{' '}
            property in UserInterface Options - where you can provide either a
            list or a function.
          </p>
          <p>
            Here we set 4 Permitted Values:
            <ul>
              <li>
                A 'hard-coded' set of Values for <i>Contact</i> and{' '}
                <i>Employee</i> columns - so only this list of values is
                displayed in their Column Filters (and Expression Editor).
              </li>
              <li>
                {' '}
                For <i>Cust Ref.</i> column a function that will be evaluated
                each time the list is required; this allows you to get the
                values from your local store or via an external look-up.
              </li>
              <li>
                An empty array [' '] for the <i>Order Date</i> Column so that NO
                distinct column values are diplayed, and only the System Filters
                for Date columns are shown.
              </li>
            </ul>
          </p>
          <p>
            Note: if there are no Permitted Values provided, then AdapTable will
            dynamically build a list of current distinct values for the column.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options#permittedvaluesitems"
            target="_blank"
          >
            User Interface Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/user-interface-api"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
