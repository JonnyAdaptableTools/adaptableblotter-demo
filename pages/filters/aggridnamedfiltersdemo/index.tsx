import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggridnamedfiltersdemo')}
      pageTitle={'Named Filters Demo'}
      description={
        <div>
          <h4>Named Filters Demo</h4>

          <p>
            Adaptable has a range of powerful filter functions. These include
            Column Filters, System Filters and User Filters (that users create
            at run-time) and in most cases are sufficient for all needs.
          </p>
          <p>
            But occasionally you might want to filter a column based on other
            data in the row or using internal logic not available to the Grid or
            even using an external lookup.
          </p>
          <p>
            This is where <b>Named Filters</b> come in. You can create at{' '}
            <b>design time</b> a Named Filter and provide Adaptable with the
            Predicate function required to evaluate it.
          </p>
          <p>
            Named Filters operate either on a Single Column or all Columns of a
            particular DataType (e.g. Data). You provide this information
            together with the predicate function in the{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_namedfilterstate_.namedfilterstate.html"
              target="_blank"
            >
              Named Filters
            </a>{' '}
            section of Config.
          </p>
          <p>
            In this example we created 3 Named Filters and associated Predicate
            Functions: (1) <b>High</b> on <i>OrderId</i> Column that evaluates
            based on data in <i>Invoiced</i> and <i>ItemCount</i> columns; (2){' '}
            <b>New Starter</b> on <i>Employee</i> column which mimics a lookup
            to an internal CRM system (and which is also a column filter); and
            (3) <b>Post Takeover</b> which operates on all Date columns and
            evaluates true if date in cell was after a putative takeover date.
          </p>
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_namedfilterstate_.namedfilterstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_namedfilterapi_.namedfilterapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029896011-Filter-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002179298-Named-Filters-Videos"
              target="_blank"
            >
              Videos
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755137-Search-Functions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
