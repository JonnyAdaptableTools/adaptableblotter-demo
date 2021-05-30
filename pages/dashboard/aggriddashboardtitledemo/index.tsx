import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/dashboard/aggriddashboardtitledemo')}
      pageTitle={'Dashboard Title Demo'}
      description={
        <div>
          <p>
            By default, AdapTable sets the title in the Dashboard Header to the
            value of the 'adaptableId' property in <i>Adaptable Options</i>.
          </p>
          <p>
            However you can change this via the <i>DashboardTitle</i> property
            in{' '}
            <a
              href="https://v9-0--docs-adaptabletools.netlify.app/docs/predefined-config/dashboard-config"
              target="_blank"
            >
              Dashboard Predefined Config
            </a>{' '}
          </p>
          <p>
            In this example we set the name of the Toolbar to 'New Dashboard
            Header Name' (though we have <b>not</b> changed the adaptableId
            property itself).
          </p>
          <p>
            Additionally we have set the Dashboard visibility mode to{' '}
            <b>Collapsed</b>.
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
