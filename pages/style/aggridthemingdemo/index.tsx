import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridthemingdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Theming Demo'}
      description={
        <>
          <h4>AdaptableBlotter.JS - Theming Demo</h4>
          <p>
            You can style and theme the Adaptable Blotter so that it matches
            precisely your corporate styles and colours.
          </p>
          <p>
            We currently use Bootstrap 3 and you can use any Bootstrap theme you
            want instead. A release in the near future will allow for full style
            management entirely through css and without needing to use Bootstrap
            at all.
          </p>
          <p>
            The Blotter ships with 2 themes ('Light' and 'Dark'). This example
            shows the Adaptable Blotter with the 'Dark Theme' selected - use the
            dropdown in the Theme toolbar to change the selection.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005168191-Theme-Picker"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028587452-Theme-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028899491-Theme-API"
              target="_blank"
            >
              Blotter API
            </a>{' '}
            and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005211-Theme-Picker-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            .
          </p>
        </>
      }
    />
  );
};
