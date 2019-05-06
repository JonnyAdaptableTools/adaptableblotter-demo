import React from 'react';
import AgGridDemoPage from '../../src/AgGridDemoPage';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(
  () => import('../../src/client/aggridbasicdemo'),
  {
    loading: () => null,
    ssr: false
  }
);

export default () => {
  return (
    <AgGridDemoPage
      pageTitle={'AdaptableBlotter.JS basic ag-Grid Demo'}
      description={
        <h4>
          A demo of AdaptableBlotter.JS integrating with ag-Grid with NO
          predefined configuration.
        </h4>
      }
    >
      <DynamicComponent />
    </AgGridDemoPage>
  );
};
