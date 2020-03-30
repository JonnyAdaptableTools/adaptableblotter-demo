import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/theme/aggridcustomthemedemo')}
      pageTitle={'Custom Theme Demo'}
      description={
        <div>
          <p>
            AdapTable ships with 2 themes - Dark or Light. But you can create
            your own theme yourself through the use of{' '}
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
            AdapTable instance purple and green, with slightly rounded borders.
            Note that we use{' '}
            <a href="../../style/aggridrowstyledemo" target="_self">
              Row Styles
            </a>{' '}
            to similarly colour the grid).
          </p>
          <p>
            We have also created a 'Blue Theme'. When this loads we leverage the{' '}
            <b>VendorGridClassName</b> of{' '}
            <a
              href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_themestate_.themestate.html"
              target="_blank"
            >
              Theme Predefined Config
            </a>{' '}
            to tell AdapTable to load the ag-Grid <i>ag-theme-blue</i> theme
            also.
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://api.adaptabletools.com/interfaces/_src_predefinedconfig_themestate_.themestate.html"
            target="_blank"
          >
            Predefined Config
          </a>
          ,{' '}
          <a
            href="https://api.adaptabletools.com/interfaces/_src_api_themeapi_.themeapi.html"
            target="_blank"
          >
            Adaptable API
          </a>
          ,{' '}
          <a
            href="https://github.com/AdaptableTools/adaptable/blob/master/packages/adaptable/readme/adaptable-theming-guide.md"
            target="_blank"
          >
            ReadMe Guide
          </a>
          .
        </div>
      }
    />
  );
};
