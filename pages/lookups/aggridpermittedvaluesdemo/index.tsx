import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/lookups/aggridpermittedvaluesdemo')}
      pageTitle={'Permitted Values Demo (User Inferface State)'}
      description={
        <div>
          <p>
            When AdapTable wants to provide a list of values for a column (e.g.
            in a column filter, or when building a query or in Bulk Update) it
            will first get the list from Server Lookups if that has been set.
          </p>
          <p>
            If not then it will look for any Permitted Columns values for that
            column. These are set through the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_userinterfacestate_.userinterfacestate.html"
              target="_blank"
            >
              PermittedValuesColumns
            </a>{' '}
            property in the User Interface section of Predefined Config.
          </p>
          <p>
            Here we set 'hard-coded' Permitted Column Values for <i>Contact</i>{' '}
            and <i>Employee</i> columns so only this list of values is displayed
            in their Column Filters (and Query Builder).
          </p>
          <p>
            For the <i>Cust Ref.</i> column we provide a function that will be
            evaluated each time the list is required; this allows you to get the
            values from your local store or via an external look-up.
          </p>
          <p>
            Additionally we set an empty array [' '] for the <i>Order Date</i>{' '}
            Column so that NO distinct column values are diplayed, and only the
            System Filters for Date columns are shown.
          </p>
          <p>
            Note: if there are no Permitted Values, then AdapTable will
            dynamically build a list of distinct values for the column.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_userinterfacestate_.permittedvaluescolumn.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_userinterfaceapi_.userinterfaceapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
