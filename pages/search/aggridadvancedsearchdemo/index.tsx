import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridadvancedsearchdemo')}
      pageTitle={'Advanced Search Demo'}
      description={
        <div>
          <h4>Advanced Search</h4>
          <p>To Do</p>
        </div>
      }
    />
  );
};
