import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/config/aggridnoconfigdemo')}
      pageTitle={'AdaptableBlotter.JS No Config Demo'}
      description={
        <div>
          <h4>No Config Demo</h4>
          <p>
            The Adaptable Blotter offers more than 30 functions to allow you to
            search, filter, edit, audit, export and style your data in
            cutting-edge and exciting ways.
          </p>
          <p>
            Typically you ship the Blotter with <b>Predefined Config</b>{' '}
            (searches, views, reports etc. created at design time). And you'll
            set Blotter Options to non-default values to configure your grid to
            precise requirements.
          </p>
          <p>
            You will also likely include Entitlements as part of Predfined
            Config so that users only have access to the functions and the
            functionality that they require.
          </p>
          <p>
            This basic example has <b>no</b> Predefined Configuration (or
            Entitlements) and no overriden Blotter objects. So all the
            functionality (e.g. 30 functions, Column Header, Quick Filter etc.)
            is available in a default way.
          </p>
        </div>
      }
    />
  );
};
