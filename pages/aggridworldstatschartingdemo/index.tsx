import React from 'react';
import AgGridDemoPage from '../../src/AgGridDemoPage';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(
  () => import('../../src/client/aggridworldstatschartingdemo'),
  {
    loading: () => null,
    ssr: false
  }
);

export default () => {
  return (
    <AgGridDemoPage
      pageTitle={'AdaptableBlotter.JS World Stats Charting Demo'}
      description={
        <h4>A demo of AdaptableBlotter.JS integrating with ag-Grid</h4>
      }
    >
      <DynamicComponent />
    </AgGridDemoPage>
  );
};
