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
            In this example we have created a 'Blue Theme' that styles the
            AdapTable instance blue, with no border radius. When this loads we
            leverage the <b>VendorGridClassName</b> of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/predefined-config/theme-config"
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
            href="https://docs.adaptabletools.com/docs/predefined-config/theme-config"
            target="_blank"
          >
            Theme Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/theme-api"
            target="_blank"
          >
            Theme Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/key-topics/theming-and-styling"
            target="_blank"
          >
            Theming and Styling Guide
          </a>
          .
        </div>
      }
    />
  );
};
