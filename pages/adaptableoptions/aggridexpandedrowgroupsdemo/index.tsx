import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/adaptableoptions/aggridexpandedrowgroupsdemo'
      )}
      pageTitle={'Expanded Row Groups Demo'}
      description={
        <div>
          <p>
            Layouts in AdapTable include which columns should be{' '}
            <a href="../aggridfeatures/aggridrowgroupingdemo">Row Grouped</a>.
          </p>
          <p>
            Additionally you can specify / store information about which Row
            Groups are open - so that they will re-open when the Grid next
            loads.
          </p>
          <p>This requires 2 steps:</p>
          <ol>
            <li>
              Set <b>includeExpandedRowGroups</b> to <i>true</i> in{' '}
              <a
                href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
                target="_blank"
              >
                Layout Options
              </a>{' '}
            </li>
            <li>
              Add a list of Column Values in the <i>ExpandedRowGroupValues</i>{' '}
              property of the <b>Layout</b> object in{' '}
              <a
                href="https://docs.adaptabletools.com/docs/predefined-config/layout-config"
                target="_blank"
              >
                Layout State
              </a>{' '}
            </li>
          </ol>
          <p>
            In this demo we have set up our Predined Config so that AdapTable is
            grouped on the 'Ship Country' column with the 'Belgium' and
            'Denmark' groups expanded.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/layout-options"
            target="_blank"
          >
            Layout Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/layout-config"
            target="_blank"
          >
            Layout State
          </a>{' '}
        </div>
      }
    />
  );
};
