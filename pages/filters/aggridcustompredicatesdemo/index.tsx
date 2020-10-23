import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/filter/aggridcustompredicatesdemo')}
      pageTitle={'Custom Predicates Demo'}
      description={
        <div>
          <p>
            AdapTable ships with a number of powerful{' '}
            <a href="aggridsystemfiltersdemo">System Filters</a> which in most
            cases are sufficient for all needs.
          </p>
          <p>
            But occasionally you might want to filter a column based on other
            data in the row or using internal logic not available to the Grid or
            even using an external lookup.
          </p>
          <p>
            This is the role of <b>Custom Predicates</b>; they are created at{' '}
            <b>design time</b> and provide 3 imporant pieces of information:
            <ul>
              <li>
                <b>Column Scope</b>: Which Columns or DataTypes will the
                Predicate be relevant
              </li>
              <li>
                <b>Function Scope</b>: In which Adaptable Functions can the
                Predicate be called (e.g. Conditional Style, Alerts, Filters
                etc.)
              </li>
              <li>
                <b>Handler</b>: The actual function that will be evaluated each
                time the predicate is called - it receives node, column and cell
                details and returns a <b>Boolean</b>
              </li>
            </ul>
          </p>
          <p>In this example we created 4 Custom Predicates: </p>
          <ol>
            <li>
              <b>High</b> with Scope of <i>OrderId</i> Column that evaluates
              based on the data in the <i>Invoiced</i> and <i>ItemCount</i>{' '}
              columns
            </li>
            <li>
              <b>New Starter</b> which has Scope of <i>Employee</i> column, and
              mimics a lookup to an internal CRM system - (
              <b>
                this is also set in Config as a{' '}
                <a href="aggridcolumnfiltersdemo">column filter</a>
              </b>
              ){' '}
            </li>
            <li>
              <b>Post Takeover</b> which has a Scope of Date columns and
              evaluates true if date in cell was after a putative takeover date.
            </li>
            <li>
              <b>After Work</b> which has Scope of <i>LastUpdatedTime</i> Column
              and returns any time after 5pm - (
              <b>
                this is also set in Config as a{' '}
                <a href="aggridcolumnfiltersdemo">column filter</a>{' '}
              </b>
              ){' '}
            </li>
          </ol>
        </div>
      }
      helpResources={
        <div>
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
            href="https://docs.adaptabletools.com/docs/adaptable-functions/filter-function"
            target="_blank"
          >
            Filter ReadMe
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/common-objects/common-objects-predicate"
            target="_blank"
          >
            Prredicates Guide
          </a>
          .
        </div>
      }
    />
  );
};
