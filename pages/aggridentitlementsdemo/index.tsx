import React from 'react';
import AgGridDemoPage from '../../src/AgGridDemoPage';
import dynamic from 'next/dynamic';
import config from '../../src/client/aggridentitlementsdemo/config';

const DynamicComponent = dynamic(
  () => import('../../src/client/aggridentitlementsdemo'),
  {
    loading: () => null,
    ssr: false,
  }
);

export default () => {
  let configJson = JSON.stringify(config, null, 2);
  return (
    <AgGridDemoPage
      pageTitle={'Entitlements (Permissions) Demo'}
      description={
        <div>
          <h4>Entitlements</h4>
          <p>We can set Entitlements (todo://)</p>
        </div>
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
