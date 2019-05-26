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
        <p>
          A demo of AdaptableBlotter.JS integrating with ag-Grid with NO
          predefined configuration and NO non-default Blotter Options set.
        </p>
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
