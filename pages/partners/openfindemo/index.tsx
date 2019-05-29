import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/openfindemo')}
      pageTitle={'AdaptableBlotter.JS OpenFin Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - OpenFin Demo</h4>
          <p>TODO://</p>
        </div>
      }
    />
  );
};
