import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/toolpanel/aggridtoolpanelnamedemo')}
      pageTitle={'Tool Panel Name Demo'}
      description={
        <div>
          <p>
            By default the name of the AdapTable Tool Panel (which appears down
            the side of the control) is 'AdapTable'.
          </p>
          <p>
            You can change this by setting the <b>adaptableToolPanelTitle</b>{' '}
            property in{' '}
            <a href="https://docs.adaptabletools.com/docs/adaptable-options/user-interface-options">
              UserInterfaceOptions
            </a>
            .
          </p>
          <p>
            In this example we have set the name of the Tool Panel to 'Grid
            Management'
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/tool-panel-config"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/tool-panel-api"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
