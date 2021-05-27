import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggridfilteroptionsdemo')}
      pageTitle={'Filter Options Demo'}
      description={
        <div>
          <p>
            There are many options available for managing Filters in AdapTable
            via the{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/search-options"
              target="_blank"
            >
              Search Options
            </a>{' '}
            class. These include:
          </p>
          <ul>
            <li>
              <b>Auto Apply Filter</b>
              <p>
                By default AdapTable will apply the column filters immediately
                after it is created or an in item in the filter value list is
                selected or unselected.
              </p>{' '}
              <p>
                However sometimes this is not the desired behaviour,
                particularly if you are filtering on the server and want to make
                one call at the end after all filters have been selected.
              </p>
              <p>
                In this case, set <b>autoApplyFilter</b> to false - as done here
                - and a button appears in each column filter: the filter is only
                applied when it is clicked.
              </p>
            </li>

            <li>
              <b>Quick Filter Trigger</b>
              <p>
                The Quick Filter menu will normally open when the mouse hovers
                over the menu on the left of any Quick Filter Bar column.
              </p>
              <p>
                If Filters are used rarely this can be distracting; setting{' '}
                <b>quickFilterTrigger</b> to <b>'click'</b> - as done here -
                ensures the menu only opens (and closes) when explicitly
                clicked.
              </p>
            </li>

            <li>
              <b>sortColumnValuesInFilter</b>
              <p>
                By default the Column Values that are listed in the Filter pane
                are the distinct values in that column sorted in a default way
                i.e. alphabetically, lowest to highest etc.
              </p>
              <p>
                Setting <b>sortColumnValuesInFilter</b> to <b>true </b> will
                ensure that column values will display according to the current
                sorting set for that column.
              </p>
              <p>
                Here we set <i>Order Date</i> to sort in descending order
                (newest to oldest); this same sorting order is reflecting in the
                filter form for the column that displays distinct values.
              </p>
            </li>

            <li>
              <b>Clear Filters On StartUp</b>
              <p>
                Column Filters - like all other changes made in AdapTable are
                automatically stored in AdapTable State and then available when
                the grid re-opens.
              </p>{' '}
              <p>
                If this behaviour is not required, then setting{' '}
                <b>clearFiltersOnStartUp</b> in to <b>true </b> will clear any
                Column Filters that have been saved.
              </p>
              <p>
                This has been done here - so if you create a column filter and
                reload the page the filter will not reappear when the page
                loads.
              </p>
            </li>
            <li>
              <b>Default Filter Predicates</b>
              <p>
                AdapTable sets default predicates to use for each column data
                type. These are the ones that appear when no filter is applied.{' '}
              </p>
              <p>
                By default they are: <b>Numeric Columns:</b> 'Equals';{' '}
                <b>String Columns:</b> 'Contains'; <b>Date Columns:</b>'On'.
              </p>
              <p>
                In this example we have set these 3 values to GreaterThan',
                'StartsWith', and 'NotOn' respectively, and the Quick Filter
                changes accordingly.
              </p>
            </li>
          </ul>
          <p></p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-functions/filter-function"
            target="_blank"
          >
            Filter ReadMe
          </a>{' '}
          |{' '}
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-options/search-options"
            target="_blank"
          >
            Search Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/filter-config"
            target="_blank"
          >
            Filter Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/filter-api"
            target="_blank"
          >
            Filter Api
          </a>{' '}
        </div>
      }
    />
  );
};
