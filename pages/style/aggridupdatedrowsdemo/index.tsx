import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridupdatedrowsdemo')}
      pageTitle={'Updated Row Demo'}
      description={
        <div>
          <p>
            Updated Rows are designed for when rows <b>change rarely</b> and you
            wish to see what has changed. (For fast ticking data use the{' '}
            <a href="./aggridflashingcelldemo">Flashing Cell</a> function).
          </p>
          <p>
            If the function is enabled, then each time a cell value changes the
            row will change colour. You can also choose to have the Grid 'jump'
            to display the updated row.
          </p>
          <p>
            If the data change occurs in a numeric or date cell, then the row
            will display the 'Up' or 'Down' colour depending on the direction of
            the change. For other cell typess it wil use the 'neutral' colour.
          </p>
          <p>
            By default the up, down and neutral colours are green, red and gray
            respectively but this can be changed in your{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_updatedrowstate_.updatedrowstate.html"
              target="_blank"
            >
              Updated Row Predefined Config
            </a>{' '}
            ; here we set 'neutral' to 'lightblue'.
          </p>
          <p>
            You can clear a single updated row through the Context Menu, and you
            can clear all updated rows through the Column Header Menu.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_updatedrowstate_.updatedrowstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_updatedrowapi_.updatedrowapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
