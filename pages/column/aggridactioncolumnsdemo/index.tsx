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
              href="https://docs.adaptabletools.com/docs/user-interface/adaptable-button"
              target="_blank"
            >
              AdapTable Button
            </a>{' '}
            can be individually styled, and contains 2 JavaScript functions
            (povided at design-time) which AdapTable will invoke when required:
            <ul>
              <li>
                <b>onClick</b> (mandatory): What should happen when the Button
                is clicked
              </li>
              <li>
                <b>shouldRender</b>: Whether or not the Button should display
              </li>
            </ul>
            A button also contains 2 properties that can either be supplied
            either as a value or via a provided JavaScript function:
            <ul>
              <li>
                <b>label</b>: what the button will show
              </li>
              <li>
                <b>buttonStyle</b>: how the button appears
              </li>
            </ul>{' '}
          </p>
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
                <b>Action</b>: which renders a <b>Delete Row</b> and does
                exactly that.
              </li>{' '}
              <li>
                <b>Multiply</b>: updates the value of the <i>Item Cost</i>{' '}
                column using a number of functions:
                <ul>
                  <li>
                    label: either 'Double' or 'Treble' depending on the Employee
                  </li>
                  <li>
                    buttonStyle: either green or blue depending on the Employee
                    (using same logic as Label)
                  </li>
                  <li>
                    onClick: doubles or trebles the cell value depending on the
                    Employee (using the same logic as Label)
                  </li>
                  <li>
                    shouldRender: only displays the button if the cell value is
                    not 'Margaret Peacock'
                  </li>
                </ul>{' '}
              </li>
            </ul>
          </p>
          <p>
            Note: the delete row and all the cell updates are performed by using
            various functions available in the{' '}
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
