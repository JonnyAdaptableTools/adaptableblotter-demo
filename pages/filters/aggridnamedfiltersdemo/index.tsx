import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggridnamedfiltersdemo')}
      pageTitle={'Named Filters Demo'}
      description={
        <div>
          <p>
            AdapTable has a range of powerful filter functions. These include
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
            <b>design time</b> a Named Filter and provide AdapTable with the
            Predicate function required to evaluate it.
          </p>
          <p>
            Named Filters operate either on a Single Column or all Columns of a
            DataType (e.g. Date) which you define in the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_namedfilterstate_.namedfilterstate.html"
              target="_blank"
            >
              Named Filters
            </a>{' '}
            section of Config.{' '}
          </p>
          <p>
            You also provide the <b>name</b> of the Predicate Function in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_namedfilterstate_.namedfilterstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            , but supply the <b>actual function implementation</b> in{' '}
            <a
              href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
              target="_blank"
            >
              UserFunctions
            </a>
            )
          </p>
          <p>
            In this example we created 4 Named Filters and associated Predicate
            Functions:{' '}
          </p>
          <ol>
            <li>
              <b>High</b> on <i>OrderId</i> Column that evaluates based on data
              in <i>Invoiced</i> and <i>ItemCount</i> columns
            </li>
            <li>
              <b>New Starter</b> on <i>Employee</i> column which mimics a lookup
              to an internal CRM system (and which is also a column filter)
            </li>
            <li>
              <b>Post Takeover</b> which operates on all Date columns and
              evaluates true if date in cell was after a putative takeover date.
            </li>
            <li>
              <b>After Work</b> which operates on the <i>LastUpdatedTime</i>{' '}
              Column and returns any time after 5pm.
            </li>
          </ol>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_namedfilterstate_.namedfilterstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_namedfilterapi_.namedfilterapi.html"
            target="_blank"
          >
            Adaptable API
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/modules/_src_adaptableoptions_userfunctions_.html"
            target="_blank"
          >
            User Functions
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/guides/adaptable-filtering-guide.md"
            target="_blank"
          >
            Adaptable Filtering Guide
          </a>
        </div>
      }
    />
  );
};
