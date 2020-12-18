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
            href="https://docs.adaptabletools.com/docs/predefined-config/theme-config"
            target="_blank"
          >
            Theme Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/theme-api"
            target="_blank"
          >
            Theme Api
          </a>{' '}
        </div>
      }
    />
  );
};
