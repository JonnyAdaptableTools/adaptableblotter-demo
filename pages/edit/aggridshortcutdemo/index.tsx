import React from 'react';
import DynamicDemoPage from '../../../src/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/aggridshortcutdemo')}
      pageTitle={'Shortcut Demo'}
      description={
        <div>
          <h4>Shortcut</h4>
          <p>
            Use Shortcuts to avoid fat finger issues and speed data entry. You
            can
          </p>
          <p>
            It remembers the previous operation you used which is stored with
            your state. Forthcoming updates will allow you to update by % or
            bps.
          </p>
          <p>
            In this example we have set the Smart Edit operation to be 'Add' and
            the value to be 100. Try highlighting some cells in the 'Invoiced'
            column and then clicking the tick in the Smart Edit toolbar.
          </p>
          <p>
            <b>Adaptable Blotter Help Resources:</b>{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360005113332-Smart-Edit"
              target="_blank"
            >
              User Guide
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028900891-Smart-Edit-Config"
              target="_blank"
            >
              Predefined Config
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028585472-Smart-Edit-API"
              target="_blank"
            >
              Blotter API
            </a>
            ,{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360009005191-Smart-Edit-FAQ"
              target="_blank"
            >
              FAQ
            </a>
            , and{' '}
            <a
              href="https://adaptabletools.zendesk.com/hc/en-us/articles/360028952931-Smart-Edit-Videos"
              target="_blank"
            >
              Videos
            </a>
            .
          </p>
        </div>
      }
    />
  );
};
