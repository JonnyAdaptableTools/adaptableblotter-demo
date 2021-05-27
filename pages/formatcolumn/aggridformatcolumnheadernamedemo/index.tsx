import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import(
        '../../../src/client/formatcolumn/aggridformatcolumnheadernamedemo'
      )}
      pageTitle={'Format Column Header Name Demo'}
      description={
        <div>
          <p>
            The Format Column Function also allows you to change the Header /
            Caption of any column so that it better fits your requirements.
          </p>
          <p>This example has 2 Format Columns with a new Header / Caption: </p>
          <ul>
            <li>
              <b>Change Last Order</b> has been changed to have a Header Name of
              'Change'
            </li>
            <li>
              <b>Required Date</b> has been changed to have a Header Name of
              'Reqd Dt'
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
