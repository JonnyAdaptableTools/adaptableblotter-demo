import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/finsembledemo')}
      pageTitle={'AdaptableBlotter.JS Finsemble Demo'}
      description={
        <div>
          <h4>Finsemble</h4>
          <p>To do</p>
        </div>
      }
    />
  );
};
