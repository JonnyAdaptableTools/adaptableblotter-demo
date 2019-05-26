import React from 'react';
import AgGridDemoPage from '../../src/AgGridDemoPage';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(
  () => import('../../src/client/aggridbasicdemo'),
  {
    loading: () => null,
    ssr: false,
  }
);

export default () => {
  return (
    <AgGridDemoPage
      pageTitle={'AdaptableBlotter.JS basic ag-Grid Demo'}
      description={
        <div>
          <h4>Basic ag-Grid Demo</h4>
          <p>The Adaptable Blotter offers 30 functions out of the box.</p>
          <p>
            This example no Predefined Configuration and no overriden Blotter
            objects.
          </p>
        </div>
      }
      config={<p>[No Config Supplied]</p>}
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
