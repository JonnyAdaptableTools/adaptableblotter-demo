import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggrideditdropdownsdemo')}
      pageTitle={'Edit Dropdowns Demo'}
      description={
        <div>
          <p>
            By default when you edit a column AdapTable will show whichever cell
            editor you stipulated for that column when you set up ag-Grid.
          </p>
          <p>
            However, the <b>EditLookUpItems</b> property of the{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/user-interface-options"
              target="_blank"
            >
              User Interface
            </a>{' '}
            section of Adaptable Options lets you stipulate that a column will
            automatically display a Dropdown when being edited.
          </p>
          <p>
            You can provide 3 types of values for a column:
            <ul>
              <li>
                <b>No Values:</b>The Dropdown will be populated with the
                distinct values for the column (or Permitted Values if they have
                been provided)
              </li>
              <li>
                <b>List of Values:</b>Provide a list of values to show in the
                Dropdown
              </li>
              <li>
                <b>JavaScript function:</b>Supply a function which will be
                invoked by AdapTable to fill the Dropdown each time it is
                rendered
              </li>
            </ul>
            Simply list the columns that should display a Dropdown in the and
            Adaptable will do the rest. If you wish, you may also provide a list
            of values to display in the dropdown.
          </p>
          <p>
            If <b>no</b> values are provided then the Dropdown will be populated
          </p>
          <p>
            This example shows 4 column dropdowns:
            <ul>
              <li>
                <b>Cust Ref</b> (which is given a list of 15 values to show)
              </li>
              <li>
                {' '}
                <b>Contact</b> (which is empty and therefore populated via
                Permitted Values - which are supplied)
              </li>
              <li>
                <b>Employee</b> (which is empty - and has no Permitted values -
                so gets distinct column values dynamically).
              </li>
              <li>
                <b>ShipName</b> (which uses the supplied function to get the
                values to display in the Dropdown).
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/user-interface-options"
            target="_blank"
          >
            User Interface Options
          </a>
        </div>
      }
    />
  );
};
