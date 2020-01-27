import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/charts/aggridsparklinecolumndemo')}
      pageTitle={'Sparkline (Column) Demo'}
      description={
        <div>
          <p>
            You can see a Sparkline view of any <b>numeric column</b> by
            clicking 'View as Sparkline' in the Column Header Menu.
          </p>
          <p>
            As with the main Sparkline Chart, you can choose the Sparkline type
            (i.e. 'Line', 'Column' or 'Area'), the Colours and whether to use
            static minimum and maximum values.
          </p>
          <p>
            If you want to see a Sparkline for a subset of values in a column
            then simply select the cells you wish to see and select 'See as
            Sparkline' from the Context menu.
          </p>
        </div>
      }
    />
  );
};
