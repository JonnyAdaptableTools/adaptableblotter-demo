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
            The Dashboard includes an optional <b>CustomButtons</b> collection
            (provided in Dashboard Options).{' '}
          </p>
          <p>
            This enables you to place your own buttons next to any{' '}
            <a href="./aggriddashboardbuttonsdemo">Function Buttons</a> you have
            selected to display.
          </p>
          <p>
            Each button can show an icon, a caption or both and you can provide
            an onClick event.
          </p>
          <p>
            In this demo we have created a 'Delete Row' button with a caption
            and a 'New Row' button with an Icon.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/user-interface/dashboard"
            target="_blank"
          >
            Dashboard Read Me
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/dashboard-options"
            target="_blank"
          >
            Dashboard Options
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
