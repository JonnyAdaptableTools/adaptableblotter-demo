import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggrideditdropdownsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Edit Dropdowns Demo'}
      description={
        <div>
          <h4>Edit Dropdowns Demo</h4>
          <p>
            By default when you edit a column the Adaptable Blotter will show
            whichever cell editor you stipulated for that column when you set up
            ag-Grid.
          </p>
          <p>
            However, if you wish for a columnn to display a Dropdown (select),
            then you can stipulate in the User Interface State section of
            Predefined Config. .
          </p>
          <p>
            Simply list the columns that should display a Dropdown in the{' '}
            <b>EditLookUpColumns</b> property and the Adaptable Blotter will do
            the rest. If you wish, you may also provide a list of values to
            display in the dropdown.
          </p>
          <p>
            If <b>no</b> values are provided then the Dropdown will be populated
            first with Server Lookups (if set), then by Permitted Values (if
            set) and lastly (and the default) by getting distinct values for
            that Column dynamically.
          </p>
          <p>
            This example shows 3 column dropdowns: Cust Ref (which is given a
            list of 15 values to show), Contact (which is populated via
            Permitted Values) and Employee (which gets distinct column values
            dynamically).
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360024888651-Column-Values"
              target="_blank"
            >
              User Guide
            </a>
          </p>{' '}
        </div>
      }
    />
  );
};
