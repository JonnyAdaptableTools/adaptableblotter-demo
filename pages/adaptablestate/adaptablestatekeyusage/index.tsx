import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/adaptablestate/adaptablestatekeyusage')}
      pageTitle={
        'AdaptableStateKey - changing the localStorage persistence key to have multiple views'
      }
      description={
        <div>
          <p>
            You can use the example below to create multiple views on the same
            data - for example, create a layout, define a conditional style and
            do another action that changes the state.
          </p>
          <p>
            At that point, click the dashboard button to toggle the view - it
            will change to another AdapTable state - which you can modify, and
            then come back to the previous view again.
          </p>
        </div>
      }
    />
  );
};
