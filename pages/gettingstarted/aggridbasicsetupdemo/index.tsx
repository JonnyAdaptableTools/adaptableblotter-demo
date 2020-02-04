import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/gettingstarted/aggridbasicsetupdemo')}
      pageTitle={'Basic Set Up Demo'}
      description={
        <div>
          <p>
            This example shows how to create an instance of AdapTable using
            ag-Grid. All the code required is displayed under the Grid.
          </p>
          <p>
            The main steps required are:
            <ol>
              <li>
                Create an ag-Grid GridOptions object with a column schema, row
                data and any properties set.
              </li>
              <li>Create any Predefined Configuration that you want</li>
              <li>
                Create an AdaptableOptions object that will take the GridOptions
                and Predefined Config
              </li>
              <li>
                Instantiate AdapTable - passing in the AdaptableOptions object
                and retrieving an AdaptableApi object for run-time access to the
                tool.
              </li>
            </ol>
          </p>
        </div>
      }
    />
  );
};
