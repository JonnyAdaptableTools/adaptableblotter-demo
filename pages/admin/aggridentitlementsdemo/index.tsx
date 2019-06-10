import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridentitlementsdemo')}
      pageTitle={'AdaptableBlotter.JS ag-Grid Entitlements Demo'}
      description={
        <div>
          <h4>AdaptableBlotter.JS - Entitlements Demo</h4>
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
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360024582992-Permissions"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028584252-Entitlements-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585352-Entitlements-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360008819312-Configuration-FAQ"
              target="_blank"
            >
              FAQ
            </a>
          </p>
        </div>
      }
    />
  );
};