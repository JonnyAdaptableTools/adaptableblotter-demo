import React from 'react';
import DynamicDemoPage from '../../../src/Helpers/DynamicDemoPage';

export default () => {
  return (
    <DynamicDemoPage
      demo={import('../../../src/client/alerts/aggridalertactionsdemo')}
      pageTitle={'Alert Actions Demo'}
      description={
        <div>
          <p>
            An Alert Notification can contain a sophisticated form with fields,
            validation, buttons with callbacks etc (see{' '}
            <a href="./aggridalertformdemo">Alert Form Demo</a>
            ).{' '}
          </p>
          <p>
            However an alternative - when a full Form is not required - is to
            produce a series of Alert Buttons - which are (styleable) buttons
            hooked up to <b>Alert Actions</b>.
          </p>
          <p>
            Note: When creating a Form at run-time you can{' '}
            <b>only use Action Buttons</b>.
          </p>
          <p>
            AdapTable ships with 5 Alert Actions:
            <ul>
              <li>highlight-cell</li>
              <li>jump-to-cell</li>
              <li>jump-to-row</li>
              <li>jump-to-column</li>
              <li>undo</li>
            </ul>
          </p>
          <p>
            You can also define your own via the <b>actionHandlers</b> property
            of{' '}
            <a
              href="https://docs.adaptabletools.com/docs/adaptable-options/alert-options"
              target="_blank"
            >
              Alert Options
            </a>{' '}
            , where you provide the <code>handler</code> to be invoked by
            AdapTable when the button is clicked.
          </p>
          <p>
            In this demo we have create an Alert which is triggered on any
            change to the Contact column and displays a form with 2 action
            buttons:
            <ul>
              <li>
                <b>Show Me</b>: attaches to AdapTable's 'highlight-cell' and
                'jump-to-cell' Actions and the Custom Action 'email-support'
              </li>
              <li>
                <b>Undo</b>: attaches to AdapTable's 'undo' Action
              </li>
            </ul>
          </p>
        </div>
      }
      helpResources={
        <div>
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-modules/alert-module"
            target="_blank"
          >
            Alert Module
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/predefined-config/alert-config"
            target="_blank"
          >
            Alert Config
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-options/alert-options"
            target="_blank"
          >
            Alert Options
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-api/alert-api"
            target="_blank"
          >
            Alert Api
          </a>{' '}
          |{' '}
          <a
            href="https://docs.adaptabletools.com/docs/adaptable-events/alert-fired-event"
            target="_blank"
          >
            AlertFired Event
          </a>
        </div>
      }
    />
  );
};
