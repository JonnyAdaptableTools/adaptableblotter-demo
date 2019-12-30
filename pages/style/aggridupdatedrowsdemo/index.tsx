import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridupdatedrowsdemo')}
      pageTitle={'Updated Rows Demo'}
      description={
        <div>
          <h4>Updated Rows Demo</h4>
          <p>
            Updated Rows are designed for when rows <b>change rarely</b> and you
            wish to see what has changed. (For fast ticking data use the
            Flashing Cell funtion).
          </p>
          <p>
            If the function is enabled, then each time a cell value changes the
            row will change colour. You can also choose to have the Grid 'jump'
            to display the updated row.
          </p>
          <p>
            If the change occurs in a numeric or date cell then the row will
            dispaly the 'Up' or 'Down' colour depending on the direction of the
            change. For other cells it wil use the 'neutral' colour.
          </p>
          <p>
            You can clear an updated row through the Context Menu, and you can
            clear all updated rows through the Column Header Menu.
          </p>
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_updatedrowstate_.updatedrowstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_updatedrowapi_.updatedrowapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360003410918-Updated-Row-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755177-Styling-Functions"
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
