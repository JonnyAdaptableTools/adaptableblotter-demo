import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/edit/aggridservervalidationdemo')}
      pageTitle={'Server Validation Demo'}
      description={
        <div>
          <h4>Server Validation Demo</h4>
          <p>
            With Server Validation, you provide the Adaptable Blotter with a
            function that returns a Promise and will run (presumably
            server-side) each time a cell is edited allowing you to perform
            advanced validation.{' '}
          </p>
          <p>
            The return value can be: nothing (the edit works - or you want to
            'swallow' it), the old value (validation failed) or a differnt value
            altogether (in advanced scenarios). You can additionally provide a
            Validation Message.
          </p>
          <p>
            This example has 3 Server Validation Rules for <b>Item Count</b>:
            (1) Edits above 25 are rejected and changed to 25; (2) Edits below 5
            are rejected and changed to 5; (3) Any edit of 17 is (bizarrely)
            rejected outright.{' '}
          </p>
          <p>
            <b>Note:</b> Cell Validation takes precedence. We have also created
            a rule that an edit cannot increase in value by 15; if that rule
            fails then no Server Validation is run.
          </p>
          <p>
            <b>Adaptable Help Resources:</b>{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_predefinedconfig_cellvalidationstate_.cellvalidationstate.htmll"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://api.adaptableblotter.com/interfaces/_api_cellvalidationapi_.cellvalidationapi.html"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360030078191-Cell-Validation-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028638052-Cell-Validation-Videos"
              target="_blank"
            >
              Videos
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360002754698-Edit-Functions"
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
