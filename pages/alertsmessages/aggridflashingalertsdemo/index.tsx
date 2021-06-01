import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridflashingalertsdemo')}
      pageTitle={'Flashing Alerts Demo'}
      description={
        <div>
          <p>Flashing cells briefly appear when cell values' change.</p>
          <p>
            By default they flash for half a second, with a green flash for a
            positive change and a red flash for a negative change but this can
            be amended by you.
          </p>
          <p>
            This (very contrived!) example has 4 Flashing cell columns: The
            'Item Cost', 'Order Cost', 'Change Last Order' columns use the
            default flashing values while (for no particularly good reason) the
            'Invoiced' column has different colours and a longer duration.
          </p>
          <p>
            The Dashobard has been put into floating mode - useful for when
            screen estate is at a premium.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/alert-module"
            target="_blank"
          >
            Alerts Module
          </a>
        </div>
      }
    />
  );
};
