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
            <a
              href="https://api.adaptabletools.com/interfaces/_src_adaptableoptions_userinterfaceoptions_.userinterfaceoptions.html#adaptabletoolpaneltitle"
              target="_blank"
            >
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
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_toolpanelstate_.toolpanelstate.html"
            target="_blank"
          >
            Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_toolpanelapi_.toolpanelapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
        </div>
      }
    />
  );
};
