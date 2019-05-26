import React from 'react';
import AgGridDemoPage from '../../src/AgGridDemoPage';
import dynamic from 'next/dynamic';
import config from '../../src/client/aggridthemingdemo/config';

const DynamicComponent = dynamic(
  () => import('../../src/client/aggridthemingdemo'),
  {
    loading: () => null,
    ssr: false,
  }
);

export default () => {
  let configJson = JSON.stringify(config, null, 2);

  return (
    <AgGridDemoPage
      pageTitle={'AdaptableBlotter.JS ag-Grid Theming Demo'}
      description={
        <p>
          <b>Setting the Thme</b>
          This example shows the Adaptable Blotter with the 'Dark Theme'
          selected.
          <br />
          This theme can be changed by selecting a new value from the Theme
          dropdown in the Toolbar (which we have made visible)
        </p>
      }
      config={configJson}
      blotterOptions={
        "primaryKey: 'OrderId',\n" +
        'vendorGrid: gridOptions,\n' +
        "userName: 'Demo User',\n" +
        "blotterId: 'Basic Demo', \n" +
        'predefinedConfig: predefinedConfig'
      }
    >
      <DynamicComponent />
    </AgGridDemoPage>
  );
};
