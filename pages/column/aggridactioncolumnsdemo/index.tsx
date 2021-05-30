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
            AdapTable provides an Action Column Module which wraps the{' '}
            <b>Adaptable Button</b> object in helpful ways.
          </p>
          <p>
            Each{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/common-objects/common-objects-button"
              target="_blank"
            >
              AdapTable Button
            </a>{' '}
            can be individually styled, and contains 2 JavaScript functions
            (povided at design-time) which AdapTable will invoke when required:
          </p>
          <ul>
            <li>
              <b>ButtonClickedFunction</b> (mandatory): What should happen when
              the Button is clicked
            </li>
            <li>
              <b>ButtonRenderPredicate</b>: Whether or not the Button should
              display
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
                <b>Multiply</b>: updates the <i>Item Cost</i> column (with a{' '}
                <i>ButtonRenderPredicate</i> implementation to say the button
                shouldn't appear if Employee is 'Margaret Peacock')
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
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-modules/action-column-module"
            target="_blank"
          >
            Action Column Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/action-column-config"
            target="_blank"
          >
            Action Column Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/action-column-api"
            target="_blank"
          >
            Action Column API
          </a>
          |{' '}
          <a href="https://youtu.be/y0cDvtdmSKM" target="_blank">
            Action Column Video
          </a>
        </div>
      }
    />
  );
};
