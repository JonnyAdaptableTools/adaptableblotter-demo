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
            However you can change this via the <i>HomeToolbarTitle</i> property
            in{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_dashboardstate_.dashboardstate.html#hometoolbartitle"
              target="_blank"
            >
              Dashboard Predefined Config
            </a>{' '}
          </p>
          <p>
            In this example we set the name of the Toolbar to 'New Dashboard
            Header Name' (though we have <b>not</b> changed the adaptableId
            property itself) and made the Dashboard 'floating'.
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
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_dashboardapi_.dashboardapi.html"
            target="_blank"
          >
            Adaptable API
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
