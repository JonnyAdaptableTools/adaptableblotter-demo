import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/lookups/aggridpermittedvaluesdemo')}
      pageTitle={'Permitted Values Demo'}
      description={
        <div>
          <h4>Permitted Values Demo (User Inferface State)</h4>
          <p>
            When AdapTable wants to provide a list of values for a column (e.g.
            in a column filter, or when building a query or in Bulk Update) it
            will first get the list from Server Lookups if that has been set.
          </p>
          <p>
            If not then it will look for any Permitted Columns values for that
            column. These are set through the{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_userinterfacestate_.userinterfacestate.html"
              target="_blank"
            >
              PermittedValuesColumns
            </a>{' '}
            property in the User Interface section of Predefined Config.
          </p>
          <p>
            In this example we have set Permitted Column Values for{' '}
            <i>Contact</i> and <i>Employee</i> Columns so that only the
            restricted set of values we have listed are displayed in their
            Column Filters (and in Query Builder).
          </p>
          <p>
            Note: if there are no Permitted Values, then AdapTable wtill
            dynamically build a list of distinct values for the column.
          </p>
          <p>
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_userinterfacestate_.permittedvaluescolumn.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_userinterfaceapi_.userinterfaceapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
          </p>
        </div>
      }
    />
  );
};
