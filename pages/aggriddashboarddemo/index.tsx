import React from 'react';
import AgGridDemoPage from '../../src/AgGridDemoPage';
import dynamic from 'next/dynamic';
import config from '../../src/client/aggriddashboarddemo/config';

const DynamicComponent = dynamic(
  () => import('../../src/client/aggriddashboarddemo'),
  {
    loading: () => null,
    ssr: false,
  }
);

export default () => {
  let configJson = JSON.stringify(config, null, '\t');

  return (
    <AgGridDemoPage
      pageTitle={'AdaptableBlotter.JS ag-Grid Dashboard Demo'}
      description={
        <p>
          <h4>Configuring the Dashboard</h4>
          You are able to set up the Dashboard so that it shows only the
          toolbars and buttons you wish, with the look and feel that best
          matches your requirements.
          <br />
          This example has the Adaptable Blotter Dashboard minimised on startup.
          On opening it you will see that we are using the non-default set of
          toolbars and buttons. Plus we have set{' '}
          <i>Use Single Colour for All Dashboard Buttons</i> property to false
          so that we see the more colourful set of toolbars.
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
