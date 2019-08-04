import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridrowstyledemo')}
      pageTitle={'Row Style Demo'}
      description={
        <div>
          <h4>Row Style Demo</h4>
          <p>To Do</p>
          <p>
            Percent Bars work for both positive and negative values and you can
            choose whether to display the actual value. If the column is
            editable, then you can still edit it as normal.
          </p>
          <p>
            In this example we created 3 Percent Bars. The 'Change Last Order'
            Percent Bar automatically shows the negative values, while the 'Item
            Cost' one displays cell values as well as uses a non default colour.
          </p>
        </div>
      }
    />
  );
};
