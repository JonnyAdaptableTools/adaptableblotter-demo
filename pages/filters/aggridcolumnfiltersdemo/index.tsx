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
            In this example we create filters on 5 columns:
            <ul>
              <li>
                ItemCost - <b>GreaterThan</b> 20
              </li>{' '}
              <li>
                ChangeLastOrder - <b>Positive</b>
              </li>{' '}
              <li>
                Employee - 3 <b>Values</b> selected
              </li>
              <li>
                InvoicedCost - <b>Between</b> 10-300
              </li>
              <li>
                OrderDate - <b>In Past</b>
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
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_columnfilterstate_.columnfilterstate.html"
            target="_blank"
          >
            Column Filter Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_columnfilterapi_.columnfilterapi.html"
            target="_blank"
          >
            Column Filter Api
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/guides/adaptable-filtering-guide.md"
            target="_blank"
          >
            Adaptable Filtering Guide
          </a>
          .
        </div>
      }
    />
  );
};
