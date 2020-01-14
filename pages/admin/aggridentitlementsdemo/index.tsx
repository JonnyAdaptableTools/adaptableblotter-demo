import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/admin/aggridentitlementsdemo')}
      pageTitle={'Entitlements Demo'}
      description={
        <div>
          <h4>Entitlements Demo</h4>
          <p>
            As well as allowing you create objects for users to have access to
            when the system starts for the first time, Predefined Config also
            includes Entitlments (also known as Permissions).
          </p>
          <p>
            For each function you can set Entitlement for each User to be 'Full'
            (the Default), 'ReadOnly' (typically you can access existing object
            but not create/edit/ delete) or 'Hidden' (function is entirely
            absent).
          </p>
          <p>
            This example we have created 3 Entitlements. We have made 'Layout'
            to be ReadOnly so we can use existing layouts but we cannot edit or
            delete them (or create new ones). 'Advanced Search' and 'Column
            Category' are hidden which means they are not available in the menu,
            or as toolbars.
          </p>
          <p>
            <b>AdapTable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_entitlementstate_.entitlementstate.html"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_entitlementsapi_.entitlementsapi.html"
              target="_blank"
            >
              Adaptable API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819312-Configuration-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754857-Permissions"
              target="_blank"
            >
              User Guide
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
