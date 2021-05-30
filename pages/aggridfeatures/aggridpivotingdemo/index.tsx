import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridfeatures/aggridpivotingdemo')}
      pageTitle={'Pivoting Demo'}
      description={
        <div>
          <p>
            ag-Grid has incredible pivoting capability; AdapTable knows when the
            grid's in pivoting mode (click 'Pivot Mode' checkbox in the tool
            panel) and will react accordingly.
          </p>
          <p>
            AdapTable also allows you to specify - and save - pivoting
            information in your layout and then it will be available each time
            you select that layout.
          </p>
          <p>
            In this demo you can switch layouts between <i>Pivot View</i> and{' '}
            <i>Non Pivot View</i> and the correct layout (and Pivot Mode) will
            load.
          </p>
          <p>
            Note also that we created a{' '}
            <a href="./../gridmanagement/aggridcustomsortdemo">Custom Sort</a>{' '}
            for the <i>Ship Via</i> column. This will operate both in table view
            (see 'Non Pivot View' Layout) and pivot view (see 'Pivot View
            Layout').
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/using-aggrid"
            target="_blank"
          >
            ag-Grid Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/layout-config"
            target="_blank"
          >
            Layout Config
          </a>{' '}
          |{' '}
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-modules/layout-module"
            target="_blank"
          >
            Layout Module
          </a>{' '}
        </div>
      }
    />
  );
};
