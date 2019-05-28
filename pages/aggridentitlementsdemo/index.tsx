import React from 'react';
import DynamicDemoPage from '../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../src/client/aggridentitlementsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Entitlements Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Entitlements Demo</h4>
          <p>TODO://</p>
        </div>
      }
    />
  );
};
