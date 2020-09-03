import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggriddashboardbuttonsdemo')}
      pageTitle={'Dashboard Buttons Demo'}
      description={
        <div>
          <p>
            The 'VisibleButtons' property of Dashboard Predefined Config allows
            you to specify which buttons are visible in the Dashboard Header.
          </p>
          <p>
            By default, AdapTable will show the 'SystemStatus', 'GridInfo',
            'Layout' and 'ConditionalStyle' icons.
          </p>
          <p>
            In this example we have set the 'CellValidation', 'BulkUpdate',
            'SmartEdit', 'Alert' and 'Reminder' buttons to be visible.
          </p>
          <p>
            The Quick Search texbox enables you to quickly search grid; set
            <i>ShowQuickSearchInHeader</i> to false in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html#showquicksearchinheader"
              target="_blank"
            >
              Dashboard Predefined Config
            </a>{' '}
            if you don't want this to be visible.
          </p>{' '}
          <p>
            The 'Configure Dashboard' option in the main Menu allows you
            configure the Dashboard including which Function Buttons to display.
          </p>
          <p>
            Note: You can also include custom buttons in the Dashboard by
            populating the <b>CustomButtons</b> property - see the{' '}
            <a href="./aggriddashboardcustombuttonsdemo">Custom Buttons demo</a>{' '}
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/functions/dashboard-function.md"
            target="_blank"
          >
            Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html"
            target="_blank"
          >
            Dashboard Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_dashboardapi_.dashboardapi.html"
            target="_blank"
          >
            Dashboard Api
          </a>{' '}
          |{' '}
          <a href="https://youtu.be/KrahnLFYHjs" target="_blank">
            Dashboard Video
          </a>
        </div>
      }
    />
  );
};
