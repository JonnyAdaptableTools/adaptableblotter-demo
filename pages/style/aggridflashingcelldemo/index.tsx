import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/style/aggridflashingcelldemo')}
      pageTitle={'Flashing Cells Demo'}
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
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_flashingcellstate_.flashingcellstate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_flashingcellapi_.flashingcellapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360029742952-Flashing-Cell-FAQ"
            target="_blank"
          >
            FAQ
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030944531-Flashing-Cells-Videos"
            target="_blank"
          >
            Videos
          </a>
          ,{' '}
          <a
            href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755177-Styling-Functions"
            target="_blank"
          >
            User Guide
          </a>
          .
        </div>
      }
    />
  );
};
