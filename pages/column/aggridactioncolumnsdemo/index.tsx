import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/column/aggridactioncolumnsdemo')}
      pageTitle={'Action Columns Demo'}
      description={
        <div>
          <p>
            AdapTable provides an Action Column which wraps the{' '}
            <b>Adaptable Button</b> object in helpful ways.
          </p>
          <p>
            Each{' '}
            <a
              href="https://docs.adaptabletools.com/docs/common-objects/common-objects-button"
              target="_blank"
            >
              AdapTable Button
            </a>{' '}
            can be individually styled, and contains 2 JavaScript functions
            (povided at design-time) which AdapTable will invoke when required:
          </p>
          <ul>
            <li>
              <b>onClick</b> (mandatory): What should happen when the Button is
              clicked
            </li>
            <li>
              <b>shouldRender</b>: Whether or not the Button should display
            </li>
          </ul>
          <p>
            In this example we created 4 Action Columns:
            <ul>
              <li>
                <b>Plus</b> and <b>Minus</b>: the clicked function will update
                the <i>Item Count</i> column (though we do also have a{' '}
                <a href="../../edit/aggridplusminusdemo" target="_blank">
                  Plus/Minus Module
                </a>
                ).
              </li>
              <li>
                <b>Multiply</b>: doubles the <i>Item Cost</i> column value if
                Employee is 'Robert King' or 'Janet Leverling'; otherwise it
                trebles it
                <br />
                (We also provide a<i>shouldRender</i> Predicate implementation
                to say the button shouldn't appear if Employee is 'Margaret
                Peacock')
              </li>
              <li>
                <b>Action</b>: which renders a <b>Delete Row</b> and does
                exactly that.
              </li>
            </ul>
          </p>
          <p>
            Note: the delete row and all the cell updates were performed by
            using various functions in the{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-api/grid-api"
              target="_blank"
            >
              gridApi
            </a>{' '}
            section of AdaptableApi.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options#action-columns"
            target="_blank"
          >
            Action Columns (User Interface Options)
          </a>{' '}
        </div>
      }
    />
  );
};
