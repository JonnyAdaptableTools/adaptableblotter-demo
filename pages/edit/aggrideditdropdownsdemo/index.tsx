import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggrideditdropdownsdemo')}
      pageTitle={'Edit Dropdowns Demo'}
      description={
        <div>
          <h4>Edit Dropdowns Demo</h4>
          <p>
            By default when you edit a column AdapTable will show whichever cell
            editor you stipulated for that column when you set up ag-Grid.
          </p>
          <p>
            However, in the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_predefinedconfig_userinterfacestate_.userinterfacestate.html"
              target="_blank"
            >
              User Interface
            </a>{' '}
            section of Predefined Config you can stipulate that a column will
            automatically display a Dropdown (select) when being edited.
          </p>
          <p>
            Simply list the columns that should display a Dropdown in the{' '}
            <b>EditLookUpColumns</b> property and Adaptable will do the rest. If
            you wish, you may also provide a list of values to display in the
            dropdown.
          </p>
          <p>
            If <b>no</b> values are provided then the Dropdown will be populated
            first with Server Lookups (if set), then by Permitted Values (if
            set) and lastly (and the default) by getting distinct values for
            that Column dynamically.
          </p>
          <p>
            This example shows 3 column dropdowns: <b>Cust Ref</b> (which is
            given a list of 15 values to show), <b>Contact</b> (which is
            populated via Permitted Values) and <b>Employee</b> (which gets
            distinct column values dynamically).
          </p>
        </div>
      }
    />
  );
};
