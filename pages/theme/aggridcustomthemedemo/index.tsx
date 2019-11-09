import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/theme/aggridcustomthemedemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Custom Theme Demo'}
      description={
        <>
          <h4>Custom Theme Demo</h4>
          <p>
            The Adaptable Blotter ships with 2 themes - Dark or Light. But you
            can create your own theme yourself through the use of{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"
              target="_blank"
            >
              CSS variables
            </a>
            .{' '}
          </p>
          <p>
            We provide many properties for you to set when creating your theme;
            most are colour based, but you have control also over button shapes
            and sizes for example.
          </p>
          <p>
            In this example we have created a 'Wimbledon Theme' that styles the
            Blotter purple and green, with slightly rounded borders. Note that
            we use{' '}
            <a href="../style/aggridrowstyledemo" target="_self">
              Row Styles
            </a>{' '}
            to similarly colour the grid).
          </p>
          <p>
            We have also created a 'Blue Theme'. When this loads we leverage the{' '}
            <b>VendorGridClassName</b> of{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028587452-Theme-Config"
              target="_blank"
            >
              Theme Predefined Config
            </a>{' '}
            to tell the Blotter to load the ag-Grid <i>ag-theme-blue</i> theme
            also.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_themestate_.themestate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_themeapi_.themeapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005211-Theme-Picker-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002755177-Styling-Functions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </>
      }
    />
  );
};
