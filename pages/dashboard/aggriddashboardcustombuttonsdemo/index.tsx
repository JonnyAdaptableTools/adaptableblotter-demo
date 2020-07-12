import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/dashboard/aggriddashboardcustombuttonsdemo'
      )}
      pageTitle={'Custom Buttons Demo'}
      description={
        <div>
          <p>
            The Dashboard includes an optional <b>CustomButtons</b> collection.{' '}
          </p>
          <p>
            This enables you to place your own buttons next to any{' '}
            <a href="./aggriddashboardbuttonsdemo">Function Buttons</a> you have
            selected to display.
          </p>
          <p>
            Each button can show an icon, a caption or both; when a button is
            clicked the{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_api_eventapi_.eventapi.html"
              target="_blank"
            >
              DashboardButtonClicked
            </a>{' '}
            event is fired.
          </p>
          <p>
            In this demo we have created a 'Delete Row' button with a caption
            and a 'New Row' button with an Icon. We handle the{' '}
            <i>DashboardButtonClicked</i> event for both buttons.
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
            Dasbhoard Api
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
