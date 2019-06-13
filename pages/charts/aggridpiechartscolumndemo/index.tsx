import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridpiechartscolumndemo')}
      pageTitle={'Pie Charts Column Demo'}
      description={
        <div>
          <h4>Pie Charts (Column) Demo</h4>
          <p>
            You can see a pie (or doughnut) chart view of a single column by
            clicking 'See as Pie Chart' in the Column Header Menu.
          </p>
          <p>
            As with the main Pie Chart, you can create a threshold (as value or
            %), and manage labels positiion and the order of the slices.
          </p>
          <p>
            Most columns show a simple count of distinct values (e.g. try
            'Employee' column). However where there are multiple values for that
            column, the Adaptable Blotter will automatically group them (e.g.
            try 'Invoiced' column).
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005113352-Shortcuts"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028587212-Shortcut-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028899451-Shortcut-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005171-Shortcuts-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            , and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028952951-Shortcut-Videos"
              target="_blank"
            >
              Videos
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
