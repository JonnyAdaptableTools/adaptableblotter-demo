import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/config/aggridnoconfigdemo')}
      pageTitle={'No Config Demo'}
      description={
        <div>
          <p>
            AdapTable offers more than 30 functions to allow you to search,
            filter, edit, audit, export and style your data in cutting-edge and
            exciting ways.
          </p>
          <p>
            Typically you ship the AdapTable instance with{' '}
            <b>Predefined Config</b> (searches, views, reports etc. created at
            design time). And you'll set Adaptable Options to non-default values
            to configure your grid to precise requirements.
          </p>
          <p>
            You will also likely include Entitlements as part of Predfined
            Config so that users only have access to the functions and the
            functionality that they require.
          </p>
          <p>
            This basic example has <b>no</b> Predefined Configuration (or
            Entitlements) and no overriden AdapTable Objects. So all the
            functionality (e.g. 30 functions, Column Header, Quick Filter etc.)
            is available in a default way.
          </p>
        </div>
      }
    />
  );
};
