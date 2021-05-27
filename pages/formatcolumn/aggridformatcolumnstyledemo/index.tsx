import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/formatcolumn/aggridformatcolumnstyledemo'
      )}
      pageTitle={'Format Column Style Demo'}
      description={
        <div>
          <p>
            The Format Column Function allows you to style an entire column by
            proviing a visual Style or a Display Format (or both).
          </p>
          <p>
            This demo shows how to provide a <b>Visual Style</b> - while the
            Formatter demo demonstrates how to apply a Display Format.
          </p>
          <p>
            Format Columns use the same Style builder as Quick Search and
            Conditional Styles, which allows you to name key elements of the
            style e.g. Fore, Back and Border Colours and Font properties.
          </p>{' '}
          <p>
            Alternatively you can specify a css style name in Format Colunn
            Predefined Config (which you must provide in your css).
          </p>
          <p>This example has 2 Format Columns: </p>
          <ul>
            <li>
              <b>Order Id</b> has Visual Style of lime green with a red fore
              colour
            </li>
            <li>
              <b>Order Date</b> has a Visual Style of bold and italicised and
              with a smaller font (and a Display Format with pattern of
              'yyyyMMdd')
            </li>
          </ul>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://v9-0--docs-adaptabletools.netlify.app/docs/adaptable-modules/format-column-module"
            target="_blank"
          >
            Format Column Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/format-column-config"
            target="_blank"
          >
            Format Column Predefined Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/format-column-api"
            target="_blank"
          >
            Format Column API
          </a>
          |{' '}
          <a href="https://youtu.be/tYTGQ1ufhbc" target="_blank">
            Format Column Video
          </a>
        </div>
      }
    />
  );
};
