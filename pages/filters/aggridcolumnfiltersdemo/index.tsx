import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggridcolumnfiltersdemo')}
      pageTitle={'Column Filters Demo'}
      description={
        <div>
          <p>
            Each (filterable) column has a filters tab in the Column Menu (the
            second option). Alternatively you can click on the filter icon next
            to the filter bar if its showing.
          </p>
          <p>
            You can create a Column Filter by selecting column values and
            filters (items in the long list) and / or create a range (e.g.
            'GreaterThan 15') by using the operator dropdown at the top.
          </p>
          <p>
            In this example we create filters on 6 columns:
            <ul>
              <li>
                ItemCost - <b>GreaterThan</b> 20
              </li>{' '}
              <li>
                ChangeLastOrder - <b>Positive</b>
              </li>{' '}
              <li>
                Employee - 3 <b>Column Values</b> selected
              </li>
              <li>
                InvoicedCost - <b>Between</b> 10-300
              </li>
              <li>
                OrderDate - <b>In Past</b>
              </li>
              <li>
                Ship Country - 3 <b>Column Values</b> selected
              </li>
            </ul>
            Edit / clear filters in the individual columns or via the Column
            Filter toolbar.
          </p>
          <p>
            Note: You can show / hide the Quick Filter bar through the Column
            Menu or by clicking the last button in the Column Filter toolbar.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/filter-module"
            target="_blank"
          >
            Filter Module
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
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/search-options"
            target="_blank"
          >
            Search Options
          </a>
        </div>
      }
    />
  );
};
