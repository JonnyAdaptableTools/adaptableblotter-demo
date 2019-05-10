import React from 'react';
import HypergridDemoPage from '../../src/HypergridDemoPage';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(
  () => import('../../src/client/hypergridchartingdemo'),
  {
    loading: () => null,
    ssr: false,
  }
);

export default () => {
  return (
    <HypergridDemoPage
      pageTitle={'Adaptable Blotter Hypergrid Charting Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Charting Demo (Hypergrid)</h4>
          <p>
            One Category Chart showing Employee Sales and one Pie Chart showing
            Employee Items Sold.
          </p>
        </div>
      }
    >
      <DynamicComponent />
    </HypergridDemoPage>
  );
};
