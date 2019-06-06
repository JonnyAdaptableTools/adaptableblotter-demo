import React from 'react';
import DynamicDemoPage from '../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../src/client/aggridbasicdemo')}
      pageTitle={'AdaptableBlotter.JS basic ag-Grid Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Basic Demo</h4>
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
            This is a very basic example with no Predefined Configuration (or
            Entitlements) and no overriden Blotter objects. So all the
            functionality is available in a default way.
          </p>
        </div>
      }
    />
  );
};
