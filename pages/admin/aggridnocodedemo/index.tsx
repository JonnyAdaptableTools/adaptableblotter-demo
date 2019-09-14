import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridnocodedemo')}
      pageTitle={'Audit Log Demo'}
      description={
        <div>
          <h4>No Code Demo</h4>
          <p>To Do</p>
        </div>
      }
    />
  );
};
