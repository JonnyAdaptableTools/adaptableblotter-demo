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
              href="https://docs.adaptabletools.com/docs/adaptable-events/dashboard-button-clicked-event"
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
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/user-interface/dashboard"
            target="_blank"
          >
            Dashboard Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/dashboard-config"
            target="_blank"
          >
            Dashboard Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/dashboard-api"
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
