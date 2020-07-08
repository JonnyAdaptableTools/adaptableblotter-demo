import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      agGridTheme="ag-theme-alpine"
      demo={import('../../../src/client/theme/aggridalpinethemedemo')}
      pageTitle={'Alpine Theme Demo'}
      description={
        <div>
          {' '}
          <p>
            This demo shows ag-Grid with the new Alpine theme introduced in
            Version 23.
          </p>
          <p>
            To see it in the dark variant, select 'Dark Theme' from the Theme
            dropdown.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_themestate_.themestate.html"
            target="_blank"
          >
            Theme Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/upgrade-guides/upgrade-guide-v7.md"
            target="_blank"
          >
            Adaptable Version 7 'ReadMe'
          </a>{' '}
          |{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_themeapi_.themeapi.html"
            target="_blank"
          >
            Theme Api
          </a>{' '}
        </div>
      }
    />
  );
};
